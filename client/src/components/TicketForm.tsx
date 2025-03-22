import { Ticket } from "../types/validationSchema"

type TicketFormProps = {
    ticket?: Ticket
}

export function TicketForm({ ticket }: TicketFormProps) {
  return (
    <>
         {/* Author */}
         <div className="mb-4">
                    <label
                        className="block text-sm font-medium text-gray-300"
                        htmlFor="author"
                    >Author:
                    </label>
                    <input
                        className="mt-2 block w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-sm text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        type="text"
                        id="author"
                        placeholder="Author"
                        name="author"
                        defaultValue={ ticket?.author }
                    />
                </div>

                {/* Text */}
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium text-gray-300"
                        htmlFor="message"
                    >Message:
                    </label>
                    <input
                        className="mt-2 block w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-sm text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        type="text"
                        id="message"
                        placeholder="Text"
                        name="text"
                        defaultValue={ ticket?.text }
                    />
                </div>

                {/* Severity */}
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium text-gray-300"
                        htmlFor="severity"
                    >Severity:
                    </label>
                    <select
                        className="mt-2 block w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-sm text-gray-100 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        name="severity" 
                        defaultValue={ ticket?.severity }
                        id="severity">
                            
                        <option value="LOW">Low</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="HIGH">High</option>
                    </select>
                </div>

                {/* Status */}
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium text-gray-300"
                        htmlFor="status"
                    >Status:
                    </label>
                    <select
                        className="mt-2 block w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-sm text-gray-100 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                        name="status"
                        defaultValue={ ticket?.status }
                        id="status">
                        <option value="OPEN">Open</option>
                        <option value="IN_PROGRESS">In progress</option>
                        <option value="CLOSED">Closed</option>
                    </select>
                </div>

                {/* Created at */}
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium text-gray-300"
                        htmlFor="createdAt"
                    >Created at:
                    </label>
                    <input
                        className="mt-2 block w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-sm text-gray-100 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                        type="date"
                        name="createdAt"
                        defaultValue={ ticket?.createdAt ? new Date(ticket?.createdAt).toISOString().split('T')[0] : '' }
                        id="createdAt">
                    </input>
                </div>
    </>
  )
}