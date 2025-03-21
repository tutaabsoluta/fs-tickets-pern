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
                        className="text-gray-800"
                        htmlFor="author"
                    >Author:
                    </label>
                    <input
                        className="mt-2 block w-full p-3 bg-gray-50"
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
                        className="text-gray-800"
                        htmlFor="message"
                    >Message:
                    </label>
                    <input
                        className="mt-2 block w-full p-3 bg-gray-50"
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
                        className="text-gray-800"
                        htmlFor="severity"
                    >Severity:
                    </label>
                    <select
                        className="mt-2 block w-full p-3 bg-gray-50"
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
                        className="text-gray-800"
                        htmlFor="status"
                    >Status:
                    </label>
                    <select
                        className="mt-2 block w-full p-3 bg-gray-50" 
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
                        className="text-gray-800"
                        htmlFor="createdAt"
                    >Created at:
                    </label>
                    <input
                        className="mt-2 block w-full p-3 bg-gray-50" 
                        type="date"
                        name="createdAt"
                        defaultValue={ ticket?.createdAt ? new Date(ticket?.createdAt).toISOString().split('T')[0] : '' }
                        id="createdAt">
                    </input>
                </div>
    </>
  )
}
