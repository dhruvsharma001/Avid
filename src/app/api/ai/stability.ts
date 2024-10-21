import { getErrorText } from "@/lib/utils";
import { storage } from "firebase-admin";
import { getStorage } from "firebase/storage";


export async function requestStability(prompt: string) {
    const formData = {
        prompt: prompt,
        output_format: "webp"
    };

    const stabilityKey = process.env.NEXT_PRIVATE_STABILITY_AI_API_KEY
    if (!stabilityKey) return null;
    const formDataWithValues = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
        formDataWithValues.append(key, value);
    });


    try {
        const resp = await fetch(`https://api.stability.ai/v2beta/stable-image/generate/core`, {

            method: 'POST',
            headers: {
                Authorization: `Bearer ${stabilityKey}`,
                Accept: "image/*"
            },
            body: formDataWithValues
        }
        )

        if (resp.status != 200) {
            //save to storage
            return null;

        }
        return resp;
    } catch (err) {
        throw new Error("Error requesting image from stability " + getErrorText(err))
    }
}

export async function requestStabilityV1(prompt: string) {


    const engineId = 'stable-diffusion-v1-6'

    const stabilityKey = process.env.NEXT_PRIVATE_STABILITY_AI_API_KEY
    if (!stabilityKey) return null;


    const response = await fetch(
        `https://api.stability.ai/v1/generation/${engineId}/text-to-image`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${stabilityKey}`,
            },
            body: JSON.stringify({
                text_prompts: [
                    {
                        text: prompt,
                    },
                ],
                cfg_scale: 7,
                height: 1024,
                width: 1024,
                steps: 30,
                samples: 1,
                style_preset: "digital-art"
            }),
        }
    )

    if (!response.ok) {
        return null
    }
    return response;
}