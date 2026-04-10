import {
    DeleteObjectCommand,
    GetObjectCommand,
    HeadObjectCommand,
    ListObjectsV2Command,
    PutObjectCommand,
    S3Client,
} from "@aws-sdk/client-s3";
import { NodeHttpHandler } from "@smithy/node-http-handler";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export interface FileObject {
    Key?: string;
    LastModified?: Date;
    ETag?: string;
    Size?: number;
    StorageClass?: string;
    Metadata?: Record<string, string>;
}

const ACCESS_KEY_ID = process.env.ACCESS_KEY_ID!;
const ENDPOINT = process.env.ENDPOINT;
const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY!;
const BUCKET = process.env.BUCKET!;
const PUBLIC_BASE_URL = process.env.R2_PUBLIC_BASE_URL!;


const S3 = new S3Client({
    region: "auto",
    endpoint: ENDPOINT,
    credentials: {
        accessKeyId: ACCESS_KEY_ID,
        secretAccessKey: SECRET_ACCESS_KEY,
    },
    forcePathStyle: true, // Must be enabled for RustFS compatibility
    requestHandler: new NodeHttpHandler({
        connectionTimeout: 3000,
        socketTimeout: 5000,
    }),

});

function normalizeKey(key: string) {
    return key.replace(/^\/+/, "");
}

function getPublicUrl(key: string) {
    const cleanBase = PUBLIC_BASE_URL.replace(/\/+$/, "");
    const cleanKey = normalizeKey(key);
    return `${cleanBase}/${cleanKey}`;
}


export async function uploadFile(
    file: Buffer,
    key: string,
    contentType = "application/octet-stream",
    metadata: Record<string, string> = {},
) {
    const cleanKey = normalizeKey(key);

    const command = new PutObjectCommand({
        Bucket: BUCKET,
        Key: cleanKey,
        Body: file,
        ContentType: contentType,
        Metadata: metadata,
    });

    try {
        const response = await S3.send(command);

        return {
            ...response,
            key: cleanKey,
            url: getPublicUrl(cleanKey),
            metadata,
            contentType,
        };
    } catch (error) {
        console.error("Upload error:", error);
        throw error;
    }
}


export async function getSignedUrlForUpload(
    key: string,
    contentType: string,
    metadata: Record<string, string> = {},
    expiresIn: number = 3600,
): Promise<string> {
    const command = new PutObjectCommand({
        Bucket: BUCKET,
        Key: key,
        ContentType: contentType,
        Metadata: metadata,
    });
    try {
        const signedUrl = await getSignedUrl(S3, command, {
            expiresIn: expiresIn,
        });
        console.log("Generating signed URL with metadata:", metadata); // ← add this log
        return signedUrl;
    } catch (error) {
        console.log("Error generating signed url:", error);
        throw error;
    }
}

export async function listFiles(prefix: string = ""): Promise<FileObject[]> {
    const command = new ListObjectsV2Command({
        Bucket: BUCKET,
        Prefix: prefix,
    });

    try {
        const response = await S3.send(command);
        const objects = response.Contents || [];
        // console.log("list",response)

        const files: FileObject[] = await Promise.all(
            objects.map(async (obj) => {
                console.log("Obj", obj);
                const headCommand = new HeadObjectCommand({
                    Bucket: BUCKET,
                    Key: obj.Key!,
                });

                const headResponse = await S3.send(headCommand);
                console.log(headResponse);

                return {
                    Key: obj.Key,
                    Size: obj.Size,
                    LastModified: obj.LastModified,
                    ETag: obj.ETag,
                    StorageClass: obj.StorageClass,
                    Metadata: headResponse.Metadata,
                };
            }),
        );

        return files;
    } catch (error) {
        console.log("Error listing files:", error);
        throw error;
    }
}

export async function getSignedUrlForDownload(key: string): Promise<string> {
    const command = new GetObjectCommand({
        Bucket: BUCKET,
        Key: key,
    });

    try {
        const signedUrl = await getSignedUrl(S3, command, { expiresIn: 3600 });

        return signedUrl;
    } catch (error) {
        console.error("Error generating signed URL:", error);
        throw error;
    }
}

export async function deleteFile(key: string) {
    const command = new DeleteObjectCommand({
        Bucket: BUCKET,
        Key: key,
    });

    try {
        const response = await S3.send(command);
        return response;
    } catch (error) {
        console.error("Error deleting file:", error);
        throw error;
    }
}