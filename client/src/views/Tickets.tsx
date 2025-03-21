import { useLoaderData } from "react-router-dom";
import { getTickets } from "../services";
import { TicektDetails } from "../components";
import { Ticket } from "../types/validationSchema";


export async function loader() {

    const tickets = await getTickets();
    return tickets
}

export function Tickets() {

    const tickets = useLoaderData() as Ticket[]

    return (
        <>
        <div className="bg-gray-900  rounded-xl p-8">
            <div className="flex justify-between">
                <h2 className="text-xl font-black text-white pb-6">All Tickets</h2>
            </div>

            {/* Tickets table */}
            <div className="overflow-hidden rounded-md border border-gray-800 min-w-5xl">
                <table className="w-full border-collapse text-left">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="px-4 py-3 text-sm font-medium text-gray-300">Author</th>
                            <th className="px-4 py-3 text-sm font-medium text-gray-300">Message</th>
                            <th className="px-4 py-3 text-sm font-medium text-gray-300">Severity</th>
                            <th className="px-4 py-3 text-sm font-medium text-gray-300">Status</th>
                            <th className="px-4 py-3 text-sm font-medium text-gray-300">Created At</th>
                            <th className="px-4 py-3 text-right text-sm font-medium text-gray-300">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            tickets.map((ticket) => (
                                <TicektDetails
                                    key={ticket.id}
                                    ticket={ticket}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
        </>
    )
}
