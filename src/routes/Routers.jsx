
import { BrowserRouter, Route, createBrowserRouter } from "react-router-dom";
import AuthLayout from "@layouts/auth/AuthLayout.jsx";
import Login from "@pages/auth/Login";
import Registre from "@pages/auth/Registre";
import ProtectedLayout from "@layouts/protected/ProtectedLayout";
import Profile from "@pages/profile/Profile";

import OrganizerLayout from "@layouts/organizer/OrganizerLayout.jsx";


const Routers = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Registre />,
            },
        ],
    },
    {
        element: <ProtectedLayout />,
        children: [

            {
                path: "/profile",
                element: <Profile />,
            },
        ],
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
