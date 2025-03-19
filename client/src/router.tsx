import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import { action as newTicketAction, Tickets, NewTicket, loader as ticketsLoader } from './views';



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
        ],
    }
]);