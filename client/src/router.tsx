import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import { action as newTicketAction, Tickets, NewTicket } from './views';



export const router = createBrowserRouter ([
    
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Tickets/>,
            },

            {
                path: 'tickets/new',
                element: <NewTicket />,
                action: newTicketAction,
            },
        ],
    }
]);