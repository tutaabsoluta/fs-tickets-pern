import { Pencil, Trash2 } from "lucide-react";
import { deleteTicket } from "../services";
import { Ticket } from "../types/validationSchema"
import { ActionFunctionArgs, Form, redirect, useNavigate } from 'react-router-dom';

type TicketDetailsProp = {
    ticket: Ticket
};

export async function action({ params }: ActionFunctionArgs) {

    if (params.id !== undefined) {

        await deleteTicket(+params.id)
        return redirect('/')

    }

};


export const TicektDetails = ({ ticket }: TicketDetailsProp) => {

    const navigate = useNavigate();

    return (
        <tr className="border-t border-gray-800 hover:bg-gray-800/50 text-white">

            <td className="px-4 py-3 text-sm font-medium">
                {ticket.author}
            </td>

            <td className="max-w-xs truncate px-4 py-3 text-sm">
                {ticket.text}
            </td>

            <td className="px-4 py-3 text-sm">
                {ticket.severity}
            </td>

            <td className="px-4 py-3 text-sm">
                {ticket.status}
            </td>

            <td className="px-4 py-3 text-sm">
                {ticket.createdAt.toLocaleDateString()}
            </td>

            <td className="px-4 py-3 text-right text-sm">
                <div className="flex justify-end gap-2">
                    <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-700 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-gray-900"
                        onClick={() => navigate(`/tickets/${ticket.id}/edit`)
                        }><Pencil className="h-4 w-4 text-blue-400" />
                        <span className="sr-only">Edit</span>
                    </button>
                    <div>


                        <Form
                            className="w-full"
                            method="POST"
                            action={`tickets/${ticket.id}/delete`}
                            onSubmit={(e) => {
                                if (!confirm('Delete?')) {
                                    e.preventDefault()
                                }
                            }}
                        >
                            <button
                                type="submit"
                                value={"Delete"}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-700 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 focus:ring-offset-gray-900"
                            >
                                <Trash2 className="h-4 w-4 text-red-400" />
                                <span className="sr-only">Delete</span>
                            </button>
                        </Form>
                    </div>
                </div>

            </td>


        </tr>
    )
}
