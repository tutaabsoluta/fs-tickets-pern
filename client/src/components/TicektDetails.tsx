import { deleteTicket } from "../services";
import { Ticket } from "../types/validationSchema"
import { ActionFunctionArgs, Form, redirect, useNavigate } from 'react-router-dom';

type TicketDetailsProp = {
    ticket: Ticket
};

export async function action({ params }: ActionFunctionArgs) {

    if ( params.id !== undefined ) {

        await deleteTicket( +params.id )
        return redirect('/')

    }

};


export const TicektDetails = ({ ticket }: TicketDetailsProp) => {

    const navigate = useNavigate();

  return (
    <tr className="border-b">

        <td className="p-3 text-lg text-gray-00">
            { ticket.author }
        </td>

        <td className="p-3 text-lg text-gray-800">
            { ticket.text }
        </td>

        <td className="p-3 text-lg text-gray-800">
            {   ticket.severity}
        </td>

        <td className="p-3 text-lg text-gray-800">
            { ticket.status }
        </td>

        <td className="p-3 text-lg text-gray-800">
            { ticket.createdAt.toLocaleDateString() }
        </td>

        <td className="flex items-center gap-2 p-3 text-lg text-gray-800">
            <button 
                className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
                onClick={ () => navigate(`/tickets/${ ticket.id }/edit`)
                }>Edit
            </button>
            <Form
                className="w-full"
                method="POST"
                action={ `tickets/${ ticket.id }/delete` }
                onSubmit={ (e) => {
                    if (  !confirm('Delete?') ) {
                        e.preventDefault()
                    }
                } }
            >
                <input 
                    type="submit"
                    value={"Delete"}
                    className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
                />
            </Form>
        </td>


    </tr>
  )
}
