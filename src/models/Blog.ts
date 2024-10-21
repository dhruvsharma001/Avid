import { z } from "zod";
import { TagSchema } from "./Tag";

export const BlogSchema = z.object({
    slug: z.string(), // the hyphenated title in lowercase e.g. "my-first-blog-post"
    title: z.string(),
    tags: z.set(TagSchema).optional(),
    summary: z.string().optional(),
    image: z.string().optional(),
    content: z.string().optional(),
    category: z.string(),
    createdAt: z.string().datetime().or(z.date()),
    updatedAt: z.string().datetime().or(z.date()),

});

export type TBlog = z.infer<typeof BlogSchema>;