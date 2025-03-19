import { ActionFunctionArgs, Form, Link, redirect, useActionData } from "react-router-dom";
import { ErrorMessage } from "../components";
import { addTicket } from "../services";

// action procesa los datos del formulario
// Habilitamos en el router la propiedad action, decimos que funcion se ejecutara cuando se haga submit
export async function action({ request }: ActionFunctionArgs) {

    const data = Object.fromEntries(await request.formData() );

    let error = '';

    if ( Object.values( data ).includes('') ) {
        error = 'All the fields are required'
    }

    if ( error ) {
        return error
    }

    // Si pasa las validaciones llamamos al servicio, nos comunicamos con la API
    await addTicket( data );

    return redirect('/');
};

export function NewTicket() {

    const error = useActionData() as string;
    
    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-slate-500">Add Ticket</h2>
                <Link
                    to={"/"}
                    className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500 transition duration-300"
                >
                    Go to Home
                </Link>
            </div>

            { error && <ErrorMessage>{ error }</ErrorMessage> }

            <Form 
                className="mt-10"
                method="POST"
                action=""
            >
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
                    >Severity:
                    </label>
                    <select
                        className="mt-2 block w-full p-3 bg-gray-50" 
                        name="status"
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
                        id="createdAt">
                    </input>
                </div>

                <input
                    type="submit"
                    className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                    value="Add Ticket"
                />
            </Form>
        </>
    )
}
