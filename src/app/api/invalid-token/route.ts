
import verifyUserToken from "@/firebase/verify";

import { NextRequest, NextResponse } from "next/server";

const validateToken = async (request: NextRequest) => {
    const token = request.headers.get('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return NextResponse.json({ error: 'No Token Provided !!' }, {
            status: 401
        })
    }

    //read json body
    const body = await request.json()

    const verificationResult = await verifyUserToken(token)
    if (!verificationResult.decodedToken)
        return NextResponse.json({ error: 'Invalid Token' }, {
            status: 401
        })
    else {
        return NextResponse.json({ message: 'success', verificationResult }, {
            status: 200
        })

    }
}
export async function GET(request: NextRequest) {
    return validateToken(request)
}

export async function POST(request: NextRequest) {
    return validateToken(request)
}