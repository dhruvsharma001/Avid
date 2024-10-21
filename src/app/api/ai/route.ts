import { sendNextResponse } from "@/lib/apiResponse";
import RESPONSE_CODES from "@/lib/responseCodes";
import { NextRequest, NextResponse } from "next/server";

import { getInputSchemaFromAI } from "./controller";

export async function POST(req: NextRequest, res: NextResponse) {
    const { prompt, options } = await req.json();
    if (!prompt) return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED, })
    const result = await getInputSchemaFromAI(prompt, options);

    if (!result) return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NO_CREATE, })

    const [initPrompt, inputSchema] = result;



    return sendNextResponse({ type: 'success', data: { inputSchema, initPrompt }, responseCodes: RESPONSE_CODES.API.SUCCESS.OK })

}