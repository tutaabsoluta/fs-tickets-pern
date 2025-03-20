import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import { EditTicket, loader as editTicketLoader  } from './views/EditTicket'
import { NewTicket, action as newTicketAction } from './views/NewTicket';
import { Tickets, loader as ticketsLoader } from './views/Tickets';



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
                element: <EditTicket/>,
                loader: editTicketLoader,
            },
        ],
    }
]);