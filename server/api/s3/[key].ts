import { S3Client, GetObjectCommand }  from '@aws-sdk/client-s3';
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export default defineEventHandler(async (event) => {
    const client = new S3Client({
        'credentials': {
            'accessKeyId': process.env.AWS_ACCESS_KEY_ID,
            'secretAccessKey': process.env.AWS_SECRET_ACCESS_KEY
        },
        'region': process.env.AWS_REGION
    });

    const command = new GetObjectCommand({
        Bucket: 'rk-portfolio-files',
        Key: event.context.params.key
    });

    const url = await getSignedUrl(client, command, {
        expiresIn: 3600
    });
    return url;
})