import { Request } from "firebase-functions/v2/https";
import {
    GcpRegion,
    deployService,
    deploySite,
    getOrCreateBucket,
    getServices,
    renderMediaOnCloudrun,
} from "@remotion/cloudrun";


export async function getBucketName() {
    try {
        const { bucketName } = await getOrCreateBucket({
            region: (process.env.REMOTION_GCP_REGION || "us-central1") as GcpRegion,
        });
        // remotioncloudrun-c837zgb3fp
        return bucketName;
    } catch (err) {
        console.error(err);
    }
}

/**
 *
 * @param entryPoint this is the file where registerRoot is present
 * @param siteName keep it as template ID as if it is changed, it will create a new site.so 1 template should have  1 site
 * @returns serveUrl
 */
export async function deployRemotionTemplate(
    entryPoint: string,
    siteName: string
) {
    const bucketName = await getBucketName();
    if (!bucketName) throw new Error("Bucket name not found");
    const serveUrl = await deploySite({
        bucketName,
        entryPoint: entryPoint,
        siteName: siteName,
    });

    //    {
    //         "serveUrl": "https://storage.googleapis.com/remotioncloudrun-c837zgb3fp/sites/goner/index.html",
    //         "siteName": "goner",
    //         "stats": {
    //             "uploadedFiles": 9,
    //             "deletedFiles": 0,
    //             "untouchedFiles": 0
    //         }

    return serveUrl;
}

export async function getService(req: Request, res: any) {
    const { templatePath, templateName } = req.body;
    if (!templatePath)
        return { message: "error", data: "templatePath is required" }
    if (!templateName)
        return { message: "error", data: "templateName is required" }

    const service = await deployRemotionTemplate(templatePath, templateName);
    if (service)
        return { message: "success", data: service }
    else
        return { message: "error" }


} 