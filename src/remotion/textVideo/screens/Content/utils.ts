import { prefetch } from "remotion";
import { TClip, TInput } from "../../types";
import { getSignedUrl } from "@/firebase/utils";

export async function saveContentFromUrlAsBlob(url: string): Promise<string> {
    const response = await fetch(url);
    const data = await response.blob();
    const blobUrl = URL.createObjectURL(data);
    return blobUrl;
}

function getContentType(type: string) {
    switch (type) {
        case 'image':
            return 'image/png';
        case 'video':
            return 'video/mp4';
        case 'lottie':
            return 'application/json';
        case 'gif':
            return 'image/gif';
        default:
            return 'image/png';
    }
}
const cache: any = {};
export async function prefetchAllAssets(clipsO: TClip[]) {
    const clips = JSON.parse(JSON.stringify(clipsO));
    for (const clip of clips) {
        if (Array.isArray(clip.content)) {
            for (const subContent of clip.content) {
                if (['image', 'video', 'lottie', 'gif'].includes(subContent.type)) {
                    if (!cache[subContent.data]) {
                        let res = subContent.data;
                        if (!subContent.data.startsWith('http'))
                            res = await getSignedUrl(subContent.data);

                        const pfObj = prefetch(res, { method: 'blob-url', contentType: getContentType(subContent.type) });
                        cache[subContent.data] = pfObj;
                        subContent.data = await pfObj.waitUntilDone();
                    } else {
                        subContent.data = await cache[subContent.data].waitUntilDone();
                    }
                }


            }


        } if (clip.audio) {
            const res = await getSignedUrl(clip.audio.source);
            const pfObj = prefetch(res, { method: 'blob-url', contentType: 'audio/mp3' });
            clip.audio.source = await pfObj.waitUntilDone();
        }
        if (clip.background && clip.background.type === 'video') {
            const res = await getSignedUrl(clip.background.value);
            const pfObj = prefetch(res, { method: 'blob-url', contentType: getContentType(clip.background.type) });
            clip.background.value = await pfObj.waitUntilDone();
        }
    }
    return clips;

}