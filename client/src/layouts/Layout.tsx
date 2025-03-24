import { PlusCircle } from "lucide-react";
import { Link, Outlet } from "react-router-dom";


export default function Layout() {
    return (
        <>
            <div className="flex flex-col bg-gray-950 text-gray-100 min-h-screen">
                <header className="border-b border-gray-800 bg-gray-900 px-6 py-10">
                    <div className="flex items-center justify-between">
                        <h1 className="text-4xl font-extrabold text-white">
                            Support Tickets
                        </h1>

                        <Link
                            to={"tickets/new"}
                            className="rounded-md bg-gradient-to-r from-indigo-600 to-indigo-500 px-4 py-2 text-sm font-medium text-white hover:from-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300"
                        >
                            <PlusCircle className="mr-2 inline-block h-4 w-4" />
                            Add Ticket
                        </Link>

                    </div>
                </header>

                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div>
        </>
    )
};


