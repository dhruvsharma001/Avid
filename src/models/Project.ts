import { inputSchema } from '@/remotion/textVideo/types';
import { z } from 'zod';
import { renderSchema } from './Render';



export const chatSchema = z.object({
    from: z.enum(["user", "assistant"]),
    content: z.string(),
    timestamp: z.number(),

})

export const PromptOptionsSchema = z.object({
    industry: z.array(z.string()).optional(),
    targetUser: z.array(z.string()).optional(),
    targetPlatform: z.array(z.string()).optional(),
    type: z.array(z.string()).optional(),
    url: z.string().optional(),
    productImage: z.array(z.string()).optional(),
    brandId: z.string().optional(),
    lengthInSeconds: z.number().optional()
})

//A template when chosen and values put in , it would create a project
export const ProjectSchema = z.object({
    id: z.string(),
    name: z.string(),
    templateId: z.string().optional(),
    initialPrompt: z.object({
        prompt: z.string(),
        options: PromptOptionsSchema.optional()

    }).optional(),
    chat: z.array(chatSchema),
    userId: z.string(),
    props: inputSchema,         // z.record(z.string().or(z.number()).or(z.boolean()).or(z.array(z.string()).or(z.object({})))),
    siteId: z.string().optional(),
    thumbnail: z.string().optional(),
    renders: z.array(renderSchema).optional(),
    createdAt: z.date(),
    updatedAt: z.date(),

});

export type TProject = z.infer<typeof ProjectSchema>;


export type TChat = z.infer<typeof chatSchema>
export type TPromptOptions = z.infer<typeof PromptOptionsSchema>;