import { React, useState } from "react";
import { useAuth } from "@contexts/AuthContext";
import { Navigate } from "react-router-dom";
const Profile = () => {
    const { token, user } = useAuth();
    if (!token || !user) {
        return <Navigate to={"/login"} />;
    }
    return (
        <>
            <h2 className="text-secondary  mt-10 text-center text-5xl">
                User Profile
            </h2>
            <div className="my-5">
                <h3 className="text-4xl text-secPink text-center">
                    Welcome To Your Profile {user.name}
                </h3>
            </div>
        </>
    );
};

export default Profile;
