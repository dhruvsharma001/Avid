import getFirebaseAdmin from "@/firebase/admin";
import { uploadToStorage } from "@/firebase/controllers/server/storage";
import { sendNextResponse } from "@/lib/apiResponse";
import RESPONSE_CODES from "@/lib/responseCodes";
import { getErrorText } from "@/lib/utils";
import verifyTokenInAPI from "@/lib/verifyTokenAPI";
import moment from "moment";
import { NextRequest } from "next/server";
import { requestStability, requestStabilityV1 } from "../stability";
interface GenerationResponse {
    artifacts: Array<{
        base64: string;
        seed: number;
        finishReason: string;
    }>;
}

export async function GET(request: NextRequest) {
    try {
        const resp = await verifyTokenInAPI();
        if (!resp.success) {
            return sendNextResponse({
                type: "error",
                responseCodes: RESPONSE_CODES.API.ERRORS.UNAUTHORIZED,
                error: resp.error,
            });
        }

        const { decodedToken } = resp;
        const admin = await getFirebaseAdmin();
        const db = await admin.firestore();

        const searchParams = new URLSearchParams(request.url.split("?")[1]);
        const prompt = searchParams.get("prompt");
        let version = searchParams.get("version");
        const project = searchParams.get("project");
        if (!version) version = "1";

        if (!project)
            return sendNextResponse({
                type: "error",
                responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED,
                error: "Project not provided",
            });
        if (!prompt)
            return sendNextResponse({
                type: "error",
                responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED,
                error: "Prompt not provided",
            });
        let url = "";
        const uploadPath = `assets/images/${project}/${moment().unix()}.png`;

        if (version === "1") {
            const resp = await requestStabilityV1(prompt);
            if (resp?.ok) {
                const responseJSON = (await resp.json()) as GenerationResponse;
                const b64 = responseJSON.artifacts[0].base64;
                //base64 to file
                const base64Data = b64.replace(/^data:image\/png;base64,/, "");
                const buffer = Buffer.from(base64Data, "base64");

                url = await uploadToStorage(buffer, uploadPath, "image/png");
            } else {
                return sendNextResponse({
                    type: "error",
                    responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED,
                });
            }
        } else {
            const resp = await requestStability(prompt);
            if (!resp)
                return sendNextResponse({
                    type: "error",
                    responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED,
                });
            const buffer = Buffer.from(await resp.arrayBuffer());
            url = await uploadToStorage(buffer, uploadPath);
        }
        //create asset in db
        const asset: any = {
            title: prompt,
            format: "png",
            access: "private",
            project: project,
            source: url,
            category: "image",
            isAIGenerated: true,
            createdAt: new Date(),
            updatedAt: new Date(),
            owner: db.collection("users").doc(decodedToken.uid),
        };
        //save asset to db

        const assetRef = db.collection("assets").doc();
        const assetResp = assetRef.create(asset);
        if (!assetResp)
            return sendNextResponse({
                type: "error",
                responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED,
            });

        return sendNextResponse({
            type: "success",
            data: url,
            responseCodes: RESPONSE_CODES.API.SUCCESS.OK,
        });
    } catch (err) {
        return sendNextResponse({
            type: "error",
            responseCodes: RESPONSE_CODES.API.ERRORS.UNKNOWN,
            error: getErrorText(err),
        });
    }
}
