import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "@layouts/auth/AuthLayout";
import Login from "../authentication/Login";
import OrganizerLayout from "@layouts/organizer/OrganizerLayout.jsx";

const Routers = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
    {
        path : "/organizer",
        element: <OrganizerLayout />,
        // children: [
        //     {
        //         path: "/announcement/create",
        //         element: <OrganizerLayout  mainVue="create"/>,
        //     }, {
        //         path: "/announcement/update",
        //         element: <OrganizerLayout  mainVue="update"/>,
        //     },
        // ],
    },
]);

export default Routers;
