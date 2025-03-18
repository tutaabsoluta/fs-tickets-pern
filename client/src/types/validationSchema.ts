import { z } from "zod";

export const DraftProductSchema = z.object({
    author: z.string(),
    text: z.string(),
    severity: z.enum(['LOW', 'MEDIUM', 'HIGH']),
    createdAt: z.coerce.date()
});