import { Ticket } from "../types/validationSchema"

type TicketDetailsProp = {
    ticket: Ticket
};



export const TicektDetails = ({ ticket }: TicketDetailsProp) => {
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



    </tr>
  )
}
