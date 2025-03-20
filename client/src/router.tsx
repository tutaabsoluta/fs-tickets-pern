import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import { action as newTicketAction, Tickets, NewTicket, loader as ticketsLoader } from './views';
import { EditTicket } from './views/EditTicket'



export const router = createBrowserRouter ([
    
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Tickets/>,
                loader: ticketsLoader,
            },

            {
                path: 'tickets/new',
                element: <NewTicket />,
                action: newTicketAction,
            },
            {
                path: 'tickets/:id/edit', // ROA Pattern - Resource-oriented design
                element: <EditTicket/>
            },
        ],
    }
]);