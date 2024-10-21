import { sendNextResponse } from "@/lib/apiResponse";
import RESPONSE_CODES from "@/lib/responseCodes";
import { getErrorText } from "@/lib/utils";
import verifyTokenInAPI from "@/lib/verifyTokenAPI";
import { NextRequest, NextResponse } from "next/server";
import { createNewProject, getProject } from "../controller";

/**
 * @swagger
 * /project/duplicate:
 *   post:
 *     summary: Duplicate an existing project
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
 *               name:
 *                 type: string
 *                 example: 'Duplicated Project Name'
 *     responses:
 *       201:
 *         description: Success - Project duplicated
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
 *                     projectId:
 *                       type: string
 *                       example: 'newProject123'
 *                 responseCodes:
 *                   type: string
 *                   example: CREATED
 *       401:
 *         description: Unauthorized
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
 *                   example: UNAUTHORIZED
 *       404:
 *         description: Project Not Found
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
        const { projectId, name } = await request.json();
        const res = await verifyTokenInAPI();
        if (!res.success) {
            return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.UNAUTHORIZED });
        }
        const { decodedToken } = res;
        const { uid } = decodedToken;

        const project = await getProject(projectId);
        if (!project) {
            return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NOT_FOUND, error: 'Project not found' });
        }
        let templateId = undefined;
        let prompt = undefined;
        if (project.templateId) templateId = project.templateId;
        if (project.initialPrompt) prompt = project.initialPrompt;
        //create new project with the same props
        const newProjectId = await createNewProject(uid, project.props, templateId, prompt?.prompt);
        if (!newProjectId) return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NO_INSERT });
        return sendNextResponse({ type: 'success', data: { projectId: newProjectId }, responseCodes: RESPONSE_CODES.API.SUCCESS.CREATED });



    } catch (e: any) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NO_INSERT, error: getErrorText(e) });
    }
}