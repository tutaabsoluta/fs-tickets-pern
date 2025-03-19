import axios from "axios";
import { DraftProductSchema, TicketSchema, TicketsSchema } from "../types/validationSchema";

type TicketData = {
    [k: string]: FormDataEntryValue
};

const url = `${import.meta.env.VITE_API_URL}/api/tickets`;

export async function addTicket ( data: TicketData ) {
    try {
        const result = DraftProductSchema.safeParse(data)

        if ( result.success ) {

            await axios.post(url, {
                author: result.data.author,
                text: result.data.text,
                severity: result.data.severity,
                createdAt: result.data.createdAt,
            });


        } else {
            throw new Error('Invalid data')
        }

    } catch (error) {
        console.log(error)
    }
};


export async function getTickets() {

    try {

        const { data } = await axios.get(url)
        const result = TicketsSchema.safeParse(data)
        
        if ( result.success ) {
            return result.data 
        } else {
            throw new Error('Error geting tickets')
        }

    } catch (error) {
        console.log(error)
    }
}