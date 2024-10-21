import { DEFAULT_COUNTRY } from "@/constants";
import { sendNextResponse } from "@/lib/apiResponse";
import { nextFetch } from "@/lib/fetch";
import RESPONSE_CODES from "@/lib/responseCodes";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
type Meta = {
    country: string;

}

function getIP() {
    const ffIp = headers().get('x-forwarded-for')
    const realIp = headers().get('x-real-ip')
    return ffIp || realIp || '';
}
async function getCountryFromIP(ip: string): Promise<string> {
    const resp = await nextFetch(`https://freeipapi.com/api/json/${ip}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (resp.status !== 200 || !resp.data.countryCode || resp.data.countryCode === "-") {
        return DEFAULT_COUNTRY
    }
    const data = resp.data
    return data.countryCode
}
export const getUserCountryFromRequest = async (request: NextRequest): Promise<string> => {
    let country: string = DEFAULT_COUNTRY;
    if (!request.geo?.country) {
        const IP = getIP()
        if (IP)
            country = await getCountryFromIP(IP)

    }
    else {
        country = DEFAULT_COUNTRY
    }
    return country
}
export async function GET(request: NextRequest, response: NextResponse) {
    const country = await getUserCountryFromRequest(request)
    const meta: Meta = {
        country: country,
    }
    return sendNextResponse({ type: 'success', data: meta, responseCodes: RESPONSE_CODES.API.SUCCESS.OK })
}

