import { PlusCircle } from "lucide-react";
import { Link, Outlet } from "react-router-dom";


export default function Layout() {
  return (
    <>
    <div className="flex flex-col bg-gray-950 text-gray-100 h-screen">
        <header className="border-b border-gray-800 bg-gray-900 px-6 py-10">
            <div className="flex items-center justify-between">
                <h1 className="text-4xl font-extrabold text-white">
                    Support Tickets
                </h1>

                <Link
                    to={"tickets/new"}
                    className="rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                    <PlusCircle className="mr-2 inline-block h-4 w-4" />
                    Add Ticket
                </Link>

            </div>
        </header>
{/* mt-10 max-w-6xl mx-auto p-10 bg-gray-900 shadow rounded-lg */}
        <main className="flex-1 p-6">
            <Outlet />
        </main>
    </div>


    </>
  )
}
