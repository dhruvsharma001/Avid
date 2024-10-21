import { getSignedUrl } from "@/firebase/utils";
import { sendNextResponse } from "@/lib/apiResponse";
import RESPONSE_CODES from "@/lib/responseCodes";
import { getErrorText } from "@/lib/utils";
import verifyTokenInAPI from "@/lib/verifyTokenAPI";
import { TClip } from "@/remotion/textVideo/types";
import { NextRequest, NextResponse } from "next/server";
import { deleteProject, getProject, updateProject } from "./controller";
/**
 * @swagger
 * /project:
 *   delete:
 *     summary: Delete a project by ID
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
 *     responses:
 *       201:
 *         description: Success - Project deleted
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
 *                     deleted:
 *                       type: string
 *                       example: 'project123'
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
 *                   example: NO_DELETE
 *                 error:
 *                   type: string
 *                   example: 'Detailed error message'
 */
export async function DELETE(request: NextRequest, res: NextResponse) {
    try {
        const { projectId } = await request.json();
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
        if (project.userId !== uid) {
            return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.UNAUTHORIZED });
        }

        const deletedProjectId = await deleteProject(projectId);
        if (!deletedProjectId) return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NO_DELETE });

        return sendNextResponse({ type: 'success', data: { deleted: deletedProjectId }, responseCodes: RESPONSE_CODES.API.SUCCESS.CREATED });



    } catch (e: any) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NO_INSERT, error: getErrorText(e) });
    }
}

export async function addSignedURLToClipContent(clips: TClip[]): Promise<TClip[]> {
    for (const clip of clips) {
        for (const content of clip.content) {
            if (content.type != 'text') {
                content.data = await getSignedUrl(content.data)
            }
        }
    }
    return clips;
}
/**
 * @swagger
 * /project:
 *   get:
 *     summary: Retrieve a project by ID
 *     tags:
 *       - Project
 *     parameters:
 *       - in: query
 *         name: projectId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the project to retrieve
 *     responses:
 *       200:
 *         description: Success - Project retrieved
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
 *                   example: OK
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
export async function GET(request: NextRequest, res: NextResponse) {
    try {
        const searchParams = new URLSearchParams(request.url.split('?')[1])
        const projectId = searchParams.get('projectId');

        if (!projectId) {
            return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED });
        }
        const project = await getProject(projectId);
        if (!project) {
            return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NOT_FOUND, error: 'Project not found' });
        }

        const modifiedClips = await addSignedURLToClipContent(project.props.clips);
        project.props.clips = modifiedClips;

        return sendNextResponse({ type: 'success', data: project, responseCodes: RESPONSE_CODES.API.SUCCESS.OK });
    } catch (e: any) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NO_INSERT, error: getErrorText(e) });
    }
}
/**
 * @swagger
 * /project:
 *   patch:
 *     summary: Update a project by ID
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
 *               data:
 *                 type: object
 *                 description: Data to update the project with
 *                 example: { "title": "Updated Project Title" }
 *     responses:
 *       200:
 *         description: Success - Project updated
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
 *                   example: OK
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
 *                   example: NO_UPDATE
 *                 error:
 *                   type: string
 *                   example: 'Detailed error message'
 */

export async function PATCH(request: NextRequest) {
    try {
        const { projectId, data } = await request.json();

        if (!projectId || !data) return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED })

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
        if (project.userId !== uid) {
            return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.UNAUTHORIZED });
        }

        const updatedProject = await updateProject(projectId, data);
        if (!updatedProject) return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NO_UPDATE });

        return sendNextResponse({ type: 'success', data: data, responseCodes: RESPONSE_CODES.API.SUCCESS.OK });
    } catch (err) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NO_INSERT, error: getErrorText(err) });
    }
}