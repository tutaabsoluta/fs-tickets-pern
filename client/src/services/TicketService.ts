import axios from "axios";
import { DraftProductSchema, TicketsSchema, Ticket, TicketSchema } from "../types/validationSchema";

type TicketData = {
    [k: string]: FormDataEntryValue
};


export async function addTicket ( data: TicketData ) {
    try {

        const url = `${import.meta.env.VITE_API_URL}/api/tickets`;
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

        const url = `${import.meta.env.VITE_API_URL}/api/tickets`;
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
};

export async function getTicketById( id: Ticket['id'] ) {

    try {

        const url = `${import.meta.env.VITE_API_URL}/api/tickets/${ id }`;
        const { data } = await axios.get(url);
        const result = TicketSchema.safeParse(data);

        if ( result.success ) {
            return result.data 
        } else {
            throw new Error(`Error geting ticket with id: ${ id }`)
        }

    } catch (error) {
        console.log(error)
    }
};

export async function updateProduct (data: TicketData, id: Ticket['id']) {

    try {
        const result = TicketSchema.safeParse({

            id,
            author: data.author,
            text: data.text,
            severity: data.severity,
            status: data.status,
            createdAt: data.createdAt

        });

        if ( result.success ) {
            const url = `${import.meta.env.VITE_API_URL}/api/tickets/${ id }`;

            await axios.put(url, result.data)

        }

    } catch (error) {
        console.log(error)
    }
};

export async function deleteTicket ( id: Ticket['id'] ) {
    
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/tickets/${ id }`;

        await axios.delete(url);
        
    } catch (error) {
        console.log(error)
    }
};