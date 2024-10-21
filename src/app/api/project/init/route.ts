import { sendNextResponse } from "@/lib/apiResponse";
import RESPONSE_CODES from "@/lib/responseCodes";
import { maybeVerifyTokenInAPI } from "@/lib/verifyTokenAPI";
import { TBrand } from "@/models/Brand";
import { TChat, TPromptOptions } from "@/models/Project";
import moment from "moment";
import { NextRequest, NextResponse } from "next/server";
import { getInputSchemaFromAI } from "../../ai/controller";
import {
    createNewProject,
    getTemplateSchema,
    getUserBrands,
} from "../controller";

type TCreateRenderInput = {
    prompt: string;
    templateId?: string;
    options?: TPromptOptions;
};
/**
 * @swagger
 * /project:
 *   post:
 *     summary: Create a new project
 *     tags:
 *       - Project
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               prompt:
 *                 type: string
 *                 example: 'Create an advertisement for a new product launch'
 *               templateId:
 *                 type: string
 *                 example: 'template123'
 *               options:
 *                 type: object
 *                 example: { "option1": "value1", "option2": "value2" }
 *     responses:
 *       201:
 *         description: Success - Project created
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
 *                   properties:
 *                     inputProps:
 *                       type: object
 *                     projectId:
 *                       type: string
 *                       example: 'project123'
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
 *       401:
 *         description: Token Expired or Not Provided
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
 *                   example: TOKEN_EXPIRED
 *       404:
 *         description: Prompt or Template Not Found
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
 *                   example: NOT_FOUND
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
 *                   example: NO_INSERT
 *                 error:
 *                   type: string
 *                   example: 'Detailed error message'
 */

export async function POST(request: NextRequest, res: NextResponse) {
    try {
        const result = await maybeVerifyTokenInAPI();
        let chat: TChat[] | undefined = undefined;
        const body: TCreateRenderInput = await request.json();

        const { prompt, templateId, options } = body;
        let projectId;
        if (!prompt && !templateId) {
            return sendNextResponse({
                type: "error",
                responseCodes: RESPONSE_CODES.API.ERRORS.NOT_FOUND,
            });
        }
        let inputSchema;
        // call ai api and generate the schema needed with the prompt
        if (prompt) {
            const resp = await getInputSchemaFromAI(prompt, options);
            if (!resp) return sendNextResponse({
                type: "error",
                responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED,
                error: "Failed to generate input schema"
            })
            if (resp) {
                const [initialPrompt, inputSchema] = resp;

                //save prompt to project.chat in db for chat reference
                chat = [{
                    from: "user",
                    content: initialPrompt as string,
                    timestamp: moment().unix(),
                }, {
                    from: "assistant",
                    content: JSON.stringify(inputSchema),
                    timestamp: moment().unix()

                }];

                // save to project
            }
        } else if (templateId) {
            const template = await getTemplateSchema(templateId);
            if (!template)
                return sendNextResponse({
                    type: "error",
                    responseCodes: RESPONSE_CODES.API.ERRORS.NOT_FOUND,
                });
            inputSchema = template.props;
        }
        if (result.success) {
            const { decodedToken } = result;
            const brands: TBrand[] = await getUserBrands(decodedToken.uid);
            projectId = await createNewProject(
                decodedToken.uid,
                inputSchema,
                templateId,
                prompt,
                chat,
                brands[0], ///TODO: change this to user selected brand
                options
            );
        }

        return sendNextResponse({
            type: "success",
            data: { inputProps: inputSchema, projectId: projectId },
            responseCodes: RESPONSE_CODES.API.SUCCESS.CREATED,
        });
    } catch (e: any) {
        const message = typeof e === "string" ? e : e.message;
        if (message === "Token Expired" || message == "No Token")
            return sendNextResponse({
                type: "error",
                responseCodes: RESPONSE_CODES.API.ERRORS.TOKEN_EXPIRED,
            });
        return sendNextResponse({
            type: "error",
            responseCodes: RESPONSE_CODES.API.ERRORS.NO_INSERT,
            error: message,
        });
    }
}
