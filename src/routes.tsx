import { createBrowserRouter } from "react-router-dom";
import { TimeLine } from "./pages/Timeline/Timeline";
import { Status } from "./pages/Status/Status";
import { Default } from "./layouts/Default";


export const router = createBrowserRouter([

    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: '/',
                element: <TimeLine />
            },

            {
                path: '/status',
                element: <Status />
            }
        ]
    }
]);