import { z } from "zod";

export const DraftProductSchema = z.object({
    author: z.string(),
    text: z.string(),
    severity: z.enum(['LOW', 'MEDIUM', 'HIGH']),
    createdAt: z.coerce.date()
});


export const TicketSchema = z.object({
    id: z.number(),
    author: z.string(),
    text: z.string(),
    severity: z.enum(['LOW', 'MEDIUM', 'HIGH']),
    status: z.enum(['OPEN', 'IN_PROGRESS', 'CLOSED']),
    createdAt: z.coerce.date()
});

export const TicketsSchema = z.array( TicketSchema )
export type Ticket = z.output<typeof TicketSchema>