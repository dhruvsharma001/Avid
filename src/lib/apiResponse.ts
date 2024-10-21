'use server';

import { NextResponse } from "next/server";
import { ZodError, z } from "zod";
import { getErrorText } from "./utils";
import { fromZodError } from "zod-validation-error";
import { responseCodes } from "./responseCodes";

const responseParams = z.discriminatedUnion("type", [
    z.object({ type: z.literal("success"), data: z.any(), responseCodes: responseCodes }),
    z.object({ type: z.literal("error"), error: z.instanceof(Error).or(z.instanceof(ZodError)).or(z.string()).nullish(), responseCodes: responseCodes }),
]);
type TResponseParams = z.infer<typeof responseParams>;
export async function sendNextResponse(props: TResponseParams): Promise<NextResponse> {
    const { type, responseCodes } = props;
    try {
        const responseObj = responseParams.parse(props);

        if (responseObj.type === 'error') {
            let errorText = '';
            if (responseObj.error instanceof ZodError) {
                errorText = fromZodError(responseObj.error).message
            } else if (responseObj.error instanceof Error) {
                errorText = getErrorText(responseObj.error)
            }
            else if (typeof responseObj.error === 'string') {
                errorText = responseObj.error
            }
            else {
                errorText = responseCodes.message || 'Unknown error'
            }


            return NextResponse.json({
                error: errorText,
                resolution: responseCodes.resolution
            }, { status: responseCodes.code || 500 })
        }


        else if (type === 'success')
            return NextResponse.json({
                data: responseObj.data
            }, { status: responseCodes.code || 200 })
        else
            return NextResponse.json({
                error: 'Invalid response type'
            }, { status: 500 })
    } catch (err) {
        return NextResponse.json({
            error: 'Invalid response type'
        }, { status: 500 })
    }

}