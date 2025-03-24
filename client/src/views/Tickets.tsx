import { useLoaderData } from "react-router-dom";
import { getTickets } from "../services";
import { TicketDetails } from "../components";
import { Ticket } from "../types/validationSchema";
import FilterDropdown from "../components/FilterDropdown";


export async function loader() {

    const tickets = await getTickets();
    return tickets
}

export function Tickets() {

    const tickets = useLoaderData() as Ticket[]

    return (
        <>
            {/* Tickets table */}
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold mb-4">Tickets</h2>

                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Search tickets..."
                        className="w-64 rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <FilterDropdown />
                </div>
                </div>
        

              
                <table className="w-full border text-left">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="px-4 py-3 text-sm font-medium text-gray-300">Author</th>
                            <th className="px-4 py-3 text-sm font-medium text-gray-300">Message</th>
                            <th className="px-4 py-3 text-sm font-medium text-gray-300">Severity</th>
                            <th className="px-4 py-3 text-sm font-medium text-gray-300">Status</th>
                            <th className="px-4 py-3 text-sm font-medium text-gray-300">CreatedAt</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            tickets.map((ticket) => (
                                <TicketDetails
                                    key={ticket.id}
                                    ticket={ticket}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
