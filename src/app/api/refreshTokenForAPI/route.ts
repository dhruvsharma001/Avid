import getFirebaseAdmin from "@/firebase/admin";
import { authConfig } from "@/firebase/auth/server-config";
import { sendNextResponse } from "@/lib/apiResponse";
import RESPONSE_CODES from "@/lib/responseCodes";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, res: NextResponse) {
    const auth = await request.headers.get('authorization')
    if (!auth) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_AUTH_TOKEN })
    }

    const idToken = auth.split('Bearer ')[1];

    if (!idToken) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_AUTH_TOKEN })

    }

    const admin = await getFirebaseAdmin();
    const decodedToken = await admin.auth().verifyIdToken(idToken, true).catch((e) => {
        if (e.code === 'auth/id-token-expired') {
            throw new Error("Token Expired");
        }
    })
    if (!decodedToken) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_AUTH_TOKEN })
    }
    //change cookie value

    return NextResponse.json({ message: 'success', verified: decodedToken }, {
        headers: {
            'set-cookie': `${authConfig.cookieName}=${idToken}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=86400; Domain=${process.env.NEXT_PUBLIC_HOSTNAME || 'dev.blinkadz.com'}`,
            'Content-Type': 'application/json'
        },
        status: 200
    });

}