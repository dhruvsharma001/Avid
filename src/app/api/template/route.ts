import { DEFAULT_TEMPLATE_PROP, FIREBASE_CONSTANTS } from "@/constants";
import getFirebaseAdmin from "@/firebase/admin";
import { sendNextResponse } from "@/lib/apiResponse";
import RESPONSE_CODES from "@/lib/responseCodes";
import { getErrorText } from "@/lib/utils";
import verifyTokenInAPI from "@/lib/verifyTokenAPI";
import { NextRequest } from "next/server";
import { getPathFromSignedUrl } from "../project/controller";
import { addSignedURLToClipContent } from "../project/route";

export async function PATCH(req: NextRequest) {
    try {
        const body = await req.json();
        const tokenResult = await verifyTokenInAPI()
        if (!tokenResult.success) {
            return sendNextResponse({
                type: "error",
                responseCodes: RESPONSE_CODES.API.ERRORS.UNAUTHORIZED,
                error: "Unauthorized",
            });
        }
        const { decodedToken } = tokenResult;
        if (!body) {
            sendNextResponse({
                type: "error",
                responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED,
                error: "No Body",
            });
        }
        const { name, props, id } = body;
        if (!name || !id || !props) {
            sendNextResponse({
                type: "error",
                responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED,
                error: "Invalid data provided",
            });
        }
        // Update the template
        const admin = await getFirebaseAdmin();
        const firestore = admin.firestore();
        const template = firestore.collection("templates").doc(id);

        const templateData = await template.get();
        if (!templateData.exists) {
            return sendNextResponse({
                type: "error",
                responseCodes: RESPONSE_CODES.API.ERRORS.NOT_FOUND,
                error: "Template not found",
            });
        }

        const templateDataData = templateData.data();

        if (templateDataData?.author !== decodedToken.uid) {
            return sendNextResponse({
                type: "error",
                responseCodes: RESPONSE_CODES.API.ERRORS.UNAUTHORIZED,
                error: "Unauthorized",
            });
        }
        if (props.clips) {
            for (let i = 0; i < props.clips.length; i++) {
                for (let j = 0; j < props.clips[i].content.length; j++) {
                    const clipContent = props.clips[i].content[j];
                    if (clipContent.type != 'text' && clipContent.data.startsWith('http')) {
                        props.clips[i].content[j].data = getPathFromSignedUrl(clipContent.data)
                    }
                }
            }
        }
        const task = await template.update({
            name,
            props,
        });

        if (!task) {
            return sendNextResponse({
                type: "error",
                responseCodes: RESPONSE_CODES.API.ERRORS.UNKNOWN,
                error: "Failed to update template",
            });
        }

        return sendNextResponse({
            type: "success",
            responseCodes: RESPONSE_CODES.API.SUCCESS.OK,
            data: { name, props, id },
        })
    } catch (error) {
        return sendNextResponse({
            type: "error",
            responseCodes: RESPONSE_CODES.API.ERRORS.UNKNOWN,
            error: getErrorText(error)
        });
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const tokenResult = await verifyTokenInAPI()
        if (!tokenResult.success) {
            return sendNextResponse({
                type: "error",
                responseCodes: RESPONSE_CODES.API.ERRORS.UNAUTHORIZED,
                error: "Unauthorized",
            });
        }
        const { decodedToken } = tokenResult;
        if (!body) {
            sendNextResponse({
                type: "error",
                responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED,
                error: "No Body",
            });
        }
        const { name } = body;
        if (!name) {
            sendNextResponse({
                type: "error",
                responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED,
                error: "Invalid data provided",
            });
        }
        // Create the template
        const admin = await getFirebaseAdmin();
        const firestore = admin.firestore();
        const template = firestore.collection("templates");

        const task = await template.add({
            name,
            props: DEFAULT_TEMPLATE_PROP,
            author: decodedToken.uid,
            createdAt: new Date(),
            updatedAt: new Date(),
            listed: false,
            rating: 0,
            thumbnailClipIndex: 1,
            category: "General",

        })

        if (!task) {
            return sendNextResponse({
                type: "error",
                responseCodes: RESPONSE_CODES.API.ERRORS.UNKNOWN,
                error: "Failed to create template",
            });
        }
        return sendNextResponse({
            type: "success",
            responseCodes: RESPONSE_CODES.API.SUCCESS.OK,
            data: { name, id: task.id },
        })
    } catch (error) {
        return sendNextResponse({
            type: "error",
            responseCodes: RESPONSE_CODES.API.ERRORS.UNKNOWN,
            error: getErrorText(error)
        });
    }
}

export async function GET(req: NextRequest) {
    try {
        const response = await verifyTokenInAPI()
        if (!response.success) {
            return sendNextResponse({
                type: "error",
                responseCodes: RESPONSE_CODES.API.ERRORS.UNAUTHORIZED,
                error: "Unauthorized",
            });
        }

        const { decodedToken } = response;
        if (decodedToken.role != "creator") return sendNextResponse(
            {
                type: "error",
                responseCodes: RESPONSE_CODES.API.ERRORS.UNAUTHORIZED,
                error: "Unauthorized",
            }
        )
        const searchParams = new URLSearchParams(req.url.split('?')[1])
        const templateId = searchParams.get('templateId')
        if (!templateId) {
            return sendNextResponse({
                type: "error",
                responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED,
                error: "No templateId provided",
            });
        }
        const admin = await getFirebaseAdmin();
        const firestore = admin.firestore();
        const template = firestore.collection(FIREBASE_CONSTANTS.COLLECTIONS.TEMPLATES).doc(templateId as string);

        const templateRef = await template.get();
        if (!templateRef.exists) {
            return sendNextResponse({
                type: "error",
                responseCodes: RESPONSE_CODES.API.ERRORS.NOT_FOUND,
                error: "Template not found",
            });
        }
        const templateData = templateRef.data();
        if (!templateData) {
            return sendNextResponse({
                type: "error",
                responseCodes: RESPONSE_CODES.API.ERRORS.NOT_FOUND,
                error: "Template not found",
            });
        }
        if (templateData.author !== decodedToken.uid) {
            return sendNextResponse({
                type: "error",
                responseCodes: RESPONSE_CODES.API.ERRORS.UNAUTHORIZED,
                error: "You are not the author of this template",
            });
        }
        const templateDataData = templateData;
        const clips = templateDataData.props.clips;
        templateDataData.props.clips = await addSignedURLToClipContent(clips);
        return sendNextResponse({
            type: "success",
            responseCodes: RESPONSE_CODES.API.SUCCESS.OK,
            data: templateDataData,
        })
    } catch (error) {
        return sendNextResponse({
            type: "error",
            responseCodes: RESPONSE_CODES.API.ERRORS.UNKNOWN,
            error: getErrorText(error)
        });
    }
}

