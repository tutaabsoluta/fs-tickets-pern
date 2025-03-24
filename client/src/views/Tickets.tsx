import { useLoaderData } from "react-router-dom";
import { getTickets } from "../services";
import { TicketDetails } from "../components";
import { Ticket } from "../types/validationSchema";
import { ChevronDown } from 'lucide-react'
import { useState } from "react";


export async function loader() {

    const tickets = await getTickets();
    return tickets
};


export function Tickets() {
    const tickets = useLoaderData() as Ticket[];
    const [status, setStatus] = useState('');
    const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const ticketsPerPage = 5;

    // Filter tickets by status and message
    const filteredTickets = (tickets ?? []).filter(ticket => {
        const matchesStatus = status ? ticket.status === status : true;
        const matchesText = searchQuery
            ? ticket.text.toLowerCase().includes(searchQuery.toLowerCase())
            : true;
    
        return matchesStatus && matchesText;
    });

    // Calculate the amount of pages and the ticket range
    const totalPages = Math.ceil(filteredTickets.length / ticketsPerPage);
    const startIndex = (currentPage - 1) * ticketsPerPage;
    const endIndex = startIndex + ticketsPerPage;
    const paginatedTickets = filteredTickets.slice(startIndex, endIndex);

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
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                            }}
                            className="w-64 rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <div className="relative">
                            <button
                                onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
                                className="flex w-[180px] items-center justify-between rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            >
                                <span>Filter by status</span>
                                <ChevronDown className="h-4 w-4" />
                            </button>

                            {statusDropdownOpen && (
                                <div className="absolute right-0 z-10 mt-1 w-[180px] rounded-md border border-gray-700 bg-gray-800 py-1 shadow-lg">
                                    <button
                                        className="block w-full px-4 py-2 text-left text-sm text-gray-100 hover:bg-gray-700"
                                        onClick={() => {
                                            setStatusDropdownOpen(false);
                                            setStatus('');
                                        }}
                                    >
                                        All Statuses
                                    </button>
                                    <button
                                        className="block w-full px-4 py-2 text-left text-sm text-gray-100 hover:bg-gray-700"
                                        onClick={() => {
                                            setStatus('OPEN');
                                            setStatusDropdownOpen(false);
                                        }}
                                    >
                                        Open
                                    </button>
                                    <button
                                        className="block w-full px-4 py-2 text-left text-sm text-gray-100 hover:bg-gray-700"
                                        onClick={() => {
                                            setStatus('IN_PROGRESS');
                                            setStatusDropdownOpen(false);
                                        }}
                                    >
                                        In Progress
                                    </button>
                                    <button
                                        className="block w-full px-4 py-2 text-left text-sm text-gray-100 hover:bg-gray-700"
                                        onClick={() => {
                                            setStatus('CLOSED');
                                            setStatusDropdownOpen(false);
                                        }}
                                    >
                                        Closed
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden rounded-md border border-gray-800">
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
                            {paginatedTickets.map((ticket) => (
                                <TicketDetails key={ticket.id} ticket={ticket} />
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                        Showing {Math.min(endIndex, paginatedTickets.length)} of{' '}
                        {filteredTickets.length} tickets
                    </div>
                    <div className="flex gap-1">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            className={`inline-flex items-center justify-center rounded-md border border-gray-700 bg-gray-800 px-3 py-1 text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-gray-900 cursor-pointer ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            Previous
                        </button>
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            className={`inline-flex items-center justify-center rounded-md border border-gray-700 bg-gray-800 px-3 py-1 text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-gray-900 cursor-pointer ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

