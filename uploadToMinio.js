import { minioClient } from "./minio/minioConfig.js"

import { v4 as uuidv4 } from 'uuid';

// interface UploadParams {
//     bucketName: string;
//     file: File;
//     folder: string;
// }

// interface DeleteParams {
//     bucketName: string;
//     fileName: string;
// }
export async function uploadToMinio({ bucketName, file, folder }) {
    try {
        const fileName = `${folder}/voucher-${uuidv4()}.pdf`;

        const data = await new Promise((resolve, reject) => {
            minioClient.putObject(
                bucketName,
                fileName,
                file, // Upload the buffer directly
                file.length, // Specify the size of the buffer
                { 'Content-Type': 'application/pdf' }, // Assuming a PDF file type
                (err, etag) => {
                    if (err) {
                        console.error('Error during Minio upload:', err); // Log the error
                        reject(new Error(`PDF upload failed: ${err.message}`));
                    } else {
                        resolve(etag);
                    }
                }
            );
        });

        return { etag: data, fileName };
    } catch (error) {
        console.error('Caught error during PDF upload:', error); // Log any caught errors
        throw new Error(`PDF upload failed: ${error.message}`);
    }
}

