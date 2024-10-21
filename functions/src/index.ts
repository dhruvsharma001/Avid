/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { getService } from "./controller/getService";
import { renderVideo } from "./controller/renderVideo";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const deployService = onRequest((request, response) => {

    const result = getService(request, response);

    response.send(result);
});

export const generateVideo = onRequest((request, response) => {
    const { data } = request.body;
    logger.info(data, { structuredData: true });
    const result = renderVideo(request, response)
    response.send(result);
})