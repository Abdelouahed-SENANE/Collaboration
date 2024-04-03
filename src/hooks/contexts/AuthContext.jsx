import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // State to hold the authentication token
    const [token, setToken_] = useState(localStorage.getItem("token"));
    const [user, setUser_] = useState(localStorage.getItem("user") || null);

    // Function to set the authentication token
    const setToken = (newToken) => {
        setToken_(newToken);
    };
    const setUser = (user) => {
        if (user) {
            localStorage.setItem('user' , JSON.stringify(user))
        }else {
          
        }
    };
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            localStorage.setItem("token", token);
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem("token");
        }
    }, [token]);

    // Memoized value of the authentication context
    const contextValue = useMemo(
        () => ({
            token,
            setToken,
        }),
        [token]
    );

    // Provide the authentication context to the children components
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};