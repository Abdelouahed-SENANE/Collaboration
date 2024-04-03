import { BrowserRouter, Route, createBrowserRouter } from "react-router-dom";
import AuthLayout from "@layouts/auth/AuthLayout.jsx";
import Login from "@pages/auth/Login";
import Registre from "@pages/auth/Registre";

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
]);

export default Routers;
