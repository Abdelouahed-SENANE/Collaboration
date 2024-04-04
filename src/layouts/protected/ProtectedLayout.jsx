import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "@components/navbar/Navbar";
import { useAuth } from "@contexts/AuthContext";
import { getUser } from "@/data/user/UserData";

const ProtectedLayout = () => {
    const { token, user, setUser } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    if (!token) {
        return <Navigate to={"/login"} />;
    }
    const loading = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    };
    loading();

    // const fetchUserData = async () => {
    //     try {
    //         const resp = await getUser();
    //         setUser(resp);
    //         loading();
    //     } catch (error) {
    //         if (error.response && error.response.status === 401) {
    //             console.log(
    //                 "User not authenticated. Redirecting to login page..."
    //             );
    //         } else {
    //             console.error("Error fetching user data:", error);
    //         }
    //         loading();
    //     }
    // };

    // useEffect(() => {
    //     fetchUserData();
    // }, []);
    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         try {
    //             const userData = await getUser();
    //             setUser(userData);
    //             console.log(user);
    //         } catch (error) {
    //             if (error.response && error.response.status === 401) {
    //                 console.log(
    //                     "User not authenticated. Redirecting to login page..."
    //                 );
    //             } else {
    //                 console.error("Error fetching user data:", error);
    //             }
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };

    //     fetchUserData();
    // }, [setUser]);
    return (
        <>
            {isLoading ? (
                <div className="h-screen w-full flex items-center justify-center">
                    <div className="loader"></div>
                </div>
            ) : (
                <>
                    <header>
                        <Navbar user={user} />
                    </header>
                    <main>
                        <Outlet />
                    </main>
                </>
            )}
        </>
    );
};

export default ProtectedLayout;
