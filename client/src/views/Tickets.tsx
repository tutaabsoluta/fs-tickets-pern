import { Link, useLoaderData } from "react-router-dom";
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
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-slate-500">Tickets</h2>
                <Link
                    to={"tickets/new"}
                    className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500 transition duration-300"
                >
                    Add Ticket
                </Link>

            </div>

            {/* Tickets table */}
            <div className="p-2">
                <table className="w-full mt-5 table-auto">
                    <thead className="bg-slate-800 text-white">
                        <tr>
                            <th className="p-2">Author</th>
                            <th className="p-2">Message</th>
                            <th className="p-2">Severity</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">CreatedAt</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            tickets.map((ticket) => (
                                <TicektDetails 
                                    key={ ticket.id }
                                    ticket={ ticket }
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
