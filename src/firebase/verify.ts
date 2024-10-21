import { getFirebaseAuth } from "next-firebase-auth-edge/lib/auth";
import { authConfig } from "./auth/server-config";
import { getErrorText } from "@/lib/utils";


export default async function verifyUserToken(token: string) {

    const { verifyIdToken } = getFirebaseAuth(authConfig.serviceAccount, authConfig.apiKey)
    try {
        const verified = await verifyIdToken(token)

        return { verified: true, decodedToken: verified }

    } catch (e) {

        return { verified: false, decodedToken: null, error: getErrorText(e) }
    }
}