import { NextRequest, NextResponse } from 'next/server'
import { getSignedUrlForUpload } from '@/lib/server/file'

function sanitizeFileName(name: string) {
    return name.replace(/[^\w.\-]+/g, '-')
}

export async function POST(request: NextRequest) {
    try {
        const { fileName, contentType } = await request.json()

        if (!fileName) {
            return NextResponse.json(
                { error: 'fileName is required' },
                { status: 400 }
            )
        }

        const safeContentType = contentType || 'application/octet-stream'
        const key = `uploads/${Date.now()}-${sanitizeFileName(fileName)}`

        const signedUrl = await getSignedUrlForUpload(
            key,
            safeContentType,
            {}, // no metadata for now
            3600
        )

        return NextResponse.json({
            signedUrl,

        })
    } catch (error) {
        console.error('Error generating signed URL:', error)
        return NextResponse.json(
            { error: 'Error generating signed URL' },
            { status: 500 }
        )
    }
}