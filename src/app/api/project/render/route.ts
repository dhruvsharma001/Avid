
import verifyTokenInAPI from "@/lib/verifyTokenAPI";
import { NextRequest } from "next/server";
import { checkIfAllowedToRender, renderProject } from "../controller";

import { sendNextResponse } from "@/lib/apiResponse";
import RESPONSE_CODES from "@/lib/responseCodes";
import { getErrorText } from "@/lib/utils";
export type TCreateRenderOptions = {
    fps: number;
    width: number;
    height: number;
    format: string;
    access: 'public' | 'private';
    media: 'video';
}
type TCreateRenderInput = {
    projectId: string;
    options: TCreateRenderOptions
}
/**
 * @swagger
 * /project/render:
 *   post:
 *     summary: Render a project
 *     tags:
 *       - Project
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               projectId:
 *                 type: string
 *                 example: 'project123'
 *               options:
 *                 type: object
 *                 properties:
 *                   fps:
 *                     type: integer
 *                     example: 30
 *                   width:
 *                     type: integer
 *                     example: 1280
 *                   height:
 *                     type: integer
 *                     example: 720
 *                   format:
 *                     type: string
 *                     example: 'mp4'
 *                   access:
 *                     type: string
 *                     example: 'private'
 *                   media:
 *                     type: string
 *                     example: 'video'
 *     responses:
 *       201:
 *         description: Success - Project rendered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 type:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                 responseCodes:
 *                   type: string
 *                   example: CREATED
 *       400:
 *         description: Invalid Data Provided
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 type:
 *                   type: string
 *                   example: error
 *                 responseCodes:
 *                   type: string
 *                   example: INVALID_DATA_PROVIDED
 *       402:
 *         description: No Subscription
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 type:
 *                   type: string
 *                   example: error
 *                 responseCodes:
 *                   type: string
 *                   example: NO_SUBSCRIPTION
 *                 error:
 *                   type: string
 *                   example: 'Subscription required'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 type:
 *                   type: string
 *                   example: error
 *                 responseCodes:
 *                   type: string
 *                   example: NO_CREATE
 *                 error:
 *                   type: string
 *                   example: 'Detailed error message'
 */

export async function POST(request: NextRequest) {
    try {
        const result = await verifyTokenInAPI();
        //read json body
        const body: TCreateRenderInput = await request.json()

        if (!result.success) {

            throw new Error(result.error)
        }
        const { decodedToken } = result;
        const { projectId, options } = body;

        if (!projectId)
            return sendNextResponse({ type: "error", responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED })

        //check if allowed to render 
        const isAllowed = await checkIfAllowedToRender(decodedToken.uid);
        if (isAllowed.isAllowed === false) return sendNextResponse({ type: "error", responseCodes: RESPONSE_CODES.API.ERRORS.NO_SUBSCRIPTION, error: isAllowed.reason })
        const defOptions: TCreateRenderOptions = {
            fps: 30,
            width: 1280,
            height: 720,
            format: 'mp4',
            access: 'private',
            media: 'video' as const
        }

        defOptions.fps = (options && options.fps) || defOptions.fps;
        defOptions.width = (options && options.width) || defOptions.width;
        defOptions.height = (options && options.height) || defOptions.height;
        defOptions.format = (options && options.format) || defOptions.format;
        defOptions.access = (options && options.access) || defOptions.access;
        defOptions.media = (options && options.media) || defOptions.media;

        const res = await renderProject(projectId, decodedToken.uid, defOptions);
        if (!res)
            return sendNextResponse({ type: "error", responseCodes: RESPONSE_CODES.API.ERRORS.NO_CREATE })

        return sendNextResponse({ type: 'success', data: res, responseCodes: RESPONSE_CODES.API.SUCCESS.CREATED })



    } catch (e: any) {
        return sendNextResponse({ type: "error", responseCodes: RESPONSE_CODES.API.ERRORS.NO_CREATE, error: getErrorText(e) })
    }
}