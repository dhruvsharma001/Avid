/**
 * Controller functions goes here , like mods to prompts
 */
import { DEFAULT_TEMPLATE_ID } from "@/constants";
import { getErrorText } from "@/lib/utils";
import { TClip } from "@/remotion/textVideo/types";
import { askGemini } from "./gemini";
import { getSystemPrompt } from "./prompt";

import getFirebaseAdmin from "@/firebase/admin";
import { TPromptOptions } from "@/models/Project";
import { TTemplate } from "@/models/Template";
/**
 * 
 * @returns 
 */
export function getInputPropsSchemaForAI() {
    try {
        //Steps 

        const mockInputProps: TClip = {
            id: "uuid id",
            name: "relevant name",
            content: [
                {
                    type: "text | image | video | lottie",
                    data: "value as per type",
                    style: {
                        // any React based style properties 
                        fontFamily: "Arial",
                        fontSize: 24,
                        fontWeight: "bold",
                        color: "#000000",
                        textAlign: "center",
                        lineHeight: 1.5,
                    }
                }
            ],
            duration: 3,
            transition: {
                type: "'none'| 'fade'| 'wipe'| 'flip'| 'slide' ",
                duration: 0.5
            },


        }
        return mockInputProps;
    } catch (e) {
        throw new Error(getErrorText(e))
    }
}

export async function getBestTemplate(options?: TPromptOptions): Promise<TTemplate> {
    const defaultTemplate = DEFAULT_TEMPLATE_ID;
    try {
        const admin = await getFirebaseAdmin();
        const firestore = admin.firestore();
        const templateRef = firestore.collection('templates');

        const template = await templateRef.doc(defaultTemplate).get()
        const defaultTemplateData = template.data() as TTemplate;
        if (!options) return defaultTemplateData;

        // get best template from our db based on the options
        if (options.url) {
            // get data from URL like text and Images and select template based on the data
            fetch(options.url).then((response) => {
                // parse data and get the best template
                const html = response.body;
                console.log(html);
                // const dom = new JSDOM(html);
                // call AI to extract data from the html

            });

            // parse html and get data



        }

        const resp1 = await templateRef.where('listed', '==', true).
            where('industry', 'array-contains-any', options.industry).get();

        const resp2 = await templateRef.where('listed', '==', true).
            where('targetPlatform', 'array-contains-any', options.targetPlatform).get();

        const resp3 = await templateRef.where('listed', '==', true).
            where('targetUser', 'array-contains-any', options.targetUser).get();



        // join the data and remove duplicate
        const resp = resp1.docs.concat(resp2.docs).concat(resp3.docs);
        // remove duplicates
        const uniqueResp = Array.from(new Set(resp.map(a => a.id)))
            .map(id => {
                return resp.find(a => a.id === id)
            });





        return resp1.docs[0].data() as TTemplate;





    } catch (e) {
        throw new Error(getErrorText(e))
    }
}




/**
 * 
 * @param prompt the main prompt
 * @param options 
 * @returns Input Schema JSON
 * Steps:
 *     1. Get the best template list based on the options and prompt
 *     2. Get the system prompt based on the template and options
 *     3. Ask the AI to create text content 
 *     4. Ask the AI to create image content
 *     5. fill that in template
 *     6. return the input schema
 */

export async function getInputSchemaFromAI(prompt: string, options?: TPromptOptions) {
    try {
        //steps 
        const template: TTemplate = await getBestTemplate(options);
        const inputProps = template.props;
        const initialSystemPrompt = getSystemPrompt(prompt, template, options)
        const result = await askGemini(initialSystemPrompt)
        const response = await result.response;
        const text = response.text();
        const clipText = text.replaceAll("'''", "").replace('JSON', '');
        const newText = JSON.parse(clipText)
        try {

            for (let i = 0; i < inputProps.clips.length; i++) {
                let contentCounter = 0;
                for (let j = 0; j < inputProps.clips[i].content.length; j++) {

                    if (inputProps.clips[i].content[j].type === "text") {
                        const currentData = inputProps.clips[i].content[j].data;
                        if (currentData.variable) {
                            // this is a variable
                            // DO not replace
                            continue;
                        } else {
                            inputProps.clips[i].content[j].data = newText[i][contentCounter];
                            contentCounter += 1;
                        }
                    }
                }
            }
        } catch (e) {
            console.error(e);
        }

        return [initialSystemPrompt, inputProps]
    } catch (e) {
        console.error(e);
    }
}