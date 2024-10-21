import { getErrorText } from '@/lib/utils';
import { GoogleGenerativeAI } from '@google/generative-ai';

let genAI: GoogleGenerativeAI;
let model: any;
export async function init() {
    // init gemini
    if (!process.env.NEXT_PRIVATE_GEMINI_API_KEY) throw new Error('Gemini API Key not found')
    genAI = new GoogleGenerativeAI(process.env.NEXT_PRIVATE_GEMINI_API_KEY);
    model = genAI.getGenerativeModel({ model: "gemini-pro" });
    return model;
}

export function getGenerativeModel() {
    if (!model) {
        init();
    }
    return model;

}

export async function askGemini(prompt: string) {
    try {
        if (!model) model = getGenerativeModel();
        const response = await model.generateContent(prompt);
        return response;
    } catch (err) {
        throw new Error("Unable to execute request on Gemini " + getErrorText(err))
    }
}