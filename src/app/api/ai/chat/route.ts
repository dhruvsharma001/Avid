import { sendNextResponse } from "@/lib/apiResponse";
import RESPONSE_CODES from "@/lib/responseCodes";
import { NextRequest, NextResponse } from "next/server";
import { getGenerativeModel } from "../gemini";
import { getInputPropsSchemaForAI } from "../controller";
let chat: any;
export async function POST(req: NextRequest, res: NextResponse) {
  const { prompt } = await req.json();
  const inputPropsSchema = getInputPropsSchemaForAI();
  const initialPrompt = `
    Context: You are bam. an ai assistant bot whose job is to create and modify the json based on the input provided by user .
    the JSON is always of following format 
    '''
    ${inputPropsSchema}
    '''
    

    
    `
  if (!prompt) return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED, })
  let msg = prompt;
  if (!chat) msg = initialPrompt
  const lChat = await getChat();
  const result = await lChat.sendMessage(msg);
  const response = await result.response;
  const jsonString = response.text().replace(new RegExp('`', 'g'), '').replace('json', '')
  const json = JSON.parse(jsonString);


  return sendNextResponse({ type: 'success', data: { json }, responseCodes: RESPONSE_CODES.API.SUCCESS.OK })

}
async function getChat() {
  const model = getGenerativeModel();
  if (!chat)
    chat = await model.startChat()

  return chat;
}