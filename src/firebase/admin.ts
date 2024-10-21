'use server';
import admin from "firebase-admin";
import { serverConfig } from "./auth/server-config";
import { clientConfig } from "./auth/client-config";



async function getFirebaseAdmin() {
    if (!admin.apps.length) {
        const app = await admin.initializeApp({
            credential: admin.credential.cert(serverConfig.serviceAccount),
            databaseURL: clientConfig.databaseURL,
        });



    }

    return admin;
}

export default getFirebaseAdmin;