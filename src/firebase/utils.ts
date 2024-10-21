'use server'
import { DEFAULT_BUCKET_NAME } from "@/constants";
import getFirebaseAdmin from "./admin";

export async function getSignedUrl(url: string, expirationMinutes: number = 1) {
    const admin = getFirebaseAdmin();
    const storage = (await admin).storage();
    const expirationDate = new Date();
    const storageRef = storage.bucket(DEFAULT_BUCKET_NAME).file(url);
    expirationDate.setMinutes(expirationDate.getMinutes() + expirationMinutes);
    const signedUrl = await storageRef.getSignedUrl({ action: "read", expires: expirationDate });
    return signedUrl[0];

}
