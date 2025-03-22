import { ActionFunctionArgs, Form, Link, redirect, useActionData } from "react-router-dom";
import { ErrorMessage, TicketForm } from "../components";
import { addTicket } from "../services";

// action procesa los datos del formulario
// Habilitamos en el router la propiedad action, decimos que funcion se ejecutara cuando se haga submit
export async function action({ request }: ActionFunctionArgs) {

    // form data entries
    const data = Object.fromEntries(await request.formData() );

    let error = '';

    // data validation
    if ( Object.values( data ).includes('') ) {
        error = 'All the fields are required'
    }

    if ( error ) {
        return error
    }

    // If no errors, we call the service and comunicate with the API
    await addTicket( data );

    // If the API returns success, the action redirects the user
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
                    className="rounded-md p-3 text-sm font-bold text-white shadow-sm bg-indigo-600/10 border border-cyan-600 hover:bg-cyan-600/30 duration-300"
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
               <TicketForm />

                <input
                    type="submit"
                    className="mt-5 w-full bg-indigo-600/10 border border-indigo-600 hover:bg-indigo-600/30 duration-300 p-2 text-white font-bold text-lg cursor-pointer rounded"
                    value="Add Ticket"
                />
            </Form>
        </>
    )
}
