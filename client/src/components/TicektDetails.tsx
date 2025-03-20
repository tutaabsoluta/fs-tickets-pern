import { Ticket } from "../types/validationSchema"
import { Link, useNavigate } from 'react-router-dom';

type TicketDetailsProp = {
    ticket: Ticket
};



export const TicektDetails = ({ ticket }: TicketDetailsProp) => {

    const navigate = useNavigate();

  return (
    <tr className="border-b">

        <td className="p-3 text-lg text-gray-800">
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
                onClick={ () => navigate(`/tickets/${ ticket.id }/edit`, {
                    state: {
                        ticket: ticket
                    }
                })}>Edit
            </button>
            <button>Delete</button>
        </td>


    </tr>
  )
}
