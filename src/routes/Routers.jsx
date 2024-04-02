import { BrowserRouter, Route, createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../authentication/Login";

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
]);

export default Routers;
