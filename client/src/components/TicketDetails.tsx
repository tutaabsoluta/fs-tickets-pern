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


export const TicketDetails = ({ ticket }: TicketDetailsProp) => {

    const navigate = useNavigate();

    return (
        <tr className="border-t border-gray-800 hover:bg-gray-800/50 text-white rounded-t-3xl">

            <td className="px-4 py-3 text-sm font-medium">
                {ticket.author}
            </td>

            <td className="max-w-xs truncate px-4 py-3 text-sm">
                {ticket.text}
            </td>

            <td className={` px-4 py-3 text-sm ${ ticket.severity === 'HIGH' ? 'text-red-500' : ticket.severity === 'MEDIUM' ? 'text-yellow-500' : 'text-green-500' }`}>
                <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold text-white border ${ ticket.severity === 'HIGH' ? 'border-red-400/50 bg-red-400/10' : ticket.severity === 'MEDIUM' ? 'border-yellow-400/50 bg-yellow-400/10' : 'border-green-400/50 bg-green-400/10' }`}>
                {ticket.severity}
                </span>
            </td>

            <td className="px-4 py-3 text-sm">
            <span className={` inline-flex rounded-full px-2 py-1 text-xs font-semibold text-white border ${ ticket.status === 'OPEN' ? 'border-red-400/50 bg-red-400/10' : ticket.status === 'IN_PROGRESS' ? 'border-yellow-400/50 bg-yellow-400/10' : 'border-green-400/50 bg-green-400/10' }`}>
                {ticket.status}
                </span>
            </td>

            <td className="px-4 py-3 text-sm">
                {ticket.createdAt.toLocaleDateString()}
            </td>

            <td className="px-4 py-3 text-right text-sm">
                <div className="flex justify-end gap-2">
                    <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-700 bg-gray-800 hover:bg-gray-700 duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-gray-900"
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
                                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-700 bg-gray-800 hover:bg-gray-700 duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 focus:ring-offset-gray-900"
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
