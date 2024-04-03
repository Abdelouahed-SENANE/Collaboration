import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@components/navbar/Navbar";
const ProtectedLayout = () => {

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default ProtectedLayout;
