import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FilterDropdown() {

    const [statusDropdownOpen, setStatusDropdownOpen] = useState(false)


    return (
        <>
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
                            onClick={() => setStatusDropdownOpen(false)}
                        >
                            All Statuses
                        </button>
                        <button
                            className="block w-full px-4 py-2 text-left text-sm text-gray-100 hover:bg-gray-700"
                            onClick={() => setStatusDropdownOpen(false)}
                        >
                            Open
                        </button>
                        <button
                            className="block w-full px-4 py-2 text-left text-sm text-gray-100 hover:bg-gray-700"
                            onClick={() => setStatusDropdownOpen(false)}
                        >
                            In Progress
                        </button>
                        <button
                            className="block w-full px-4 py-2 text-left text-sm text-gray-100 hover:bg-gray-700"
                            onClick={() => setStatusDropdownOpen(false)}
                        >
                            Closed
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}
