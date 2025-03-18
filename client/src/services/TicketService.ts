import axios from "axios";
import { DraftProductSchema } from "../types/validationSchema";

type TicketData = {
    [k: string]: FormDataEntryValue
};

export async function addTicket ( data: TicketData ) {
    try {
        const result = DraftProductSchema.safeParse(data)

        if ( result.success ) {

            const url = `${import.meta.env.VITE_API_URL}/api/tickets`;

            const data = await axios.post(url, {
                author: result.data.author,
                text: result.data.text,
                severity: result.data.severity,
                createdAt: result.data.createdAt,
            })


        } else {
            throw new Error('Invalid data')
        }

    } catch (error) {
        console.log(error)
    }
};