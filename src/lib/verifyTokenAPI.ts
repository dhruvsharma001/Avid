import { authConfig } from "@/firebase/auth/server-config";
import { NextRequest } from "next/server";
import { getErrorText } from "./utils";
import getFirebaseAdmin from "@/firebase/admin";
import { getIronSessionOfUser } from "./ironSession";

type TokenVerificationResult = {
    success: false,
    error: string
} | {
    success: true,
    decodedToken: Record<string, any>

}
export default async function verifyTokenInAPI(): Promise<TokenVerificationResult> {
    const session = await getIronSessionOfUser();
    if (!session.isLoggedIn)
        return { success: false, error: "Not Logged In" }

    return { success: true, decodedToken: session.user }

}




export async function verifyFirebaseTokenInAPI(request?: NextRequest | string): Promise<TokenVerificationResult> {

    let sessionJWT;
    const admin = await getFirebaseAdmin();
    if (typeof request != 'string') {

        sessionJWT = request?.cookies.get(authConfig.cookieName)?.value || request?.headers.get('Authorization')?.split('Bearer ')[1]
    } else {
        sessionJWT = request
    }


    // const sessionCookie = cookieStore
    if (!sessionJWT) {
        throw new Error("No Token")
    }
    const token = await admin.auth().verifyIdToken(sessionJWT, true).catch(async (e) => {
        // refresh if expired
        if (e.code === 'auth/id-token-expired') {
            //refresh token 
            throw new Error("Token Expired");
        }
    })
    // const token = await getTokensFromObject(sessionCookie, authConfig);
    if (!token) {
        throw new Error("Invalid Auth Token");
    }

    return { success: true, decodedToken: token }

}

export async function maybeVerifyTokenInAPI(): Promise<TokenVerificationResult> {
    try {
        return await verifyTokenInAPI()
    } catch (e) {
        return { success: false, error: getErrorText(e) }
    }
}