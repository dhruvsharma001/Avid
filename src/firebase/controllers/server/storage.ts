'use server'
import { DEFAULT_BUCKET_NAME } from "@/constants";
import getFirebaseAdmin from "../../admin";

/**
 * The function `uploadToStorage` uploads a file to a specified storage bucket with optional parameters
 * for content type and bucket name.
 * @param {string} file - The `file` parameter in the `uploadToStorage` function represents the content
 * of the file that you want to upload to the specified storage bucket. It should be a string
 * containing the file data or a file path that you want to upload.
 * @param {string} path - The `path` parameter in the `uploadToStorage` function represents the
 * destination path where the file will be stored in the cloud storage bucket. It specifies the
 * location within the bucket where the file will be saved.
 * @param {string} [contentType=image/webp] - The `contentType` parameter in the `uploadToStorage`
 * function specifies the type of content that is being uploaded to the storage. In this case, the
 * default value is set to `'image/webp'`, which indicates that the content being uploaded is an image
 * in WebP format. You can change
 * @param {string} bucketName - The `bucketName` parameter in the `uploadToStorage` function refers to
 * the name of the storage bucket where you want to upload the file. It is a string parameter that
 * specifies the name of the bucket in which the file will be stored. In the function, the `bucketName`
 * parameter
 * @returns The function `uploadToStorage` is returning the `path` of the uploaded file.
 * https://cloud.google.com/storage/docs/uploading-objects#storage-upload-object-nodejs
 */

export async function uploadToStorage(file: string | Buffer, path: string, contentType: string = 'image/webp', bucketName: string = DEFAULT_BUCKET_NAME,) {
    const admin = getFirebaseAdmin();
    const storage = (await admin).storage();
    const bucket = storage.bucket(bucketName);
    const fileRef = bucket.file(path)
    const resp = await fileRef.save(file, {

        metadata: {
            contentType: contentType,
            metadata: {
                custom: 'metadata'
            },
            public: false,
            validation: 'md5'
        },
    }, function (err) {
        if (err) {
            console.error(`Error uploading image image_to_upload.jpeg: ${err}`)
        } else {
            console.log(`Image image_to_upload.jpeg uploaded to ${bucketName}.`)
        }
    })
    return path;

}

