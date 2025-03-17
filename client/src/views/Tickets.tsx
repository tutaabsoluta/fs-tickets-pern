import { Link } from "react-router-dom";


export function Tickets() {
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
        </>
    )
}
