/**
 * All final prompts generated will go here.
 */
import { TPromptOptions } from "@/models/Project";
import { TTemplate } from "@/models/Template";
import { TClipContent } from "@/remotion/textVideo/types";



export function getSystemPrompt(prompt: string, template: TTemplate, options?: TPromptOptions) {



    const clips = template.props.clips;
    const clipsText = clips.map((clip) => clip.content.map((clipContent: TClipContent) => clipContent.type === "text" && clipContent.data ? clipContent.data : undefined));
    //remove undefined
    const clipsTextFiltered = clipsText.filter((clip) => clip);


    const systemPrompt = `Context: 
    ${options?.industry ? 'Industry:' + options.industry : ''}
    ${options?.targetUser ? 'Target User:' + options.targetUser : ''}
    ${options?.type ? 'Type:' + options.type : ''}
    Based on the text """${prompt}""" rephrase the following 2D array(in triple quotes) based on the context above.
    '''
        ${JSON.stringify(clipsTextFiltered)}
    '''
    Output:
    Provide valid 2d array having new new text.Keep the number to elements same as the input array.Ignore nullish values.
    Example:
    [
        ["new text for element [0][0]","new text for element [0][1]"],
        ["new text for element [1][0]","new text for element [1][1]"]
    ]
    `
    return systemPrompt;



}

// instead of one big prompt that gives all JSON output
// we will break down the input schema prompts in 4 sections
// Music
// background
// clips
// color pallete
// We will break clips too in 
// background
// audio
// content
// Now content can be broken into 
// text,image animation and video 
// and then we combine each part to create the JSON Schema
// We need to have prompts or each and need to understand how it will impact the user(Industry +TG)

/**
 * This will be a diffusion Model prompt ?
 * @param industry 
 * @param targetUser 
 */
function createSlideTextContent(industry: string, targetUser: string,) {
    const prompt = `
`;
}
