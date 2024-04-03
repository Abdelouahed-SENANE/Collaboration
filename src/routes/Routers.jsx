import { BrowserRouter, Route, createBrowserRouter } from 'react-router-dom'
import AuthLayout from '@/layouts/AuthLayout'
import Login from '@/authentication/Login'
import HomeLayout from '@/layouts/HomeLayout'
import Home from '@/pages/home/Home'

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
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);

export default Routers;
