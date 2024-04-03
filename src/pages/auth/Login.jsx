import React, { useState } from "react";
import Form from "@components/ui/Form";
import Input from "@components/ui/Input";
import Button from "@components/ui/button/Button";
import { useAuth } from "@contexts/AuthContext";
import instance from "../../services/api/api";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const { setToken, token } = useAuth();
    const navigate = useNavigate();

    // const handleLogin = () => {
    //     setToken("new token")
    // };

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await instance.post('/login', formData);
            // If login is successful, set token and navigate to profile page
            if (resp.status === 200) {
                setToken(resp.data.token); // Assuming your API returns a token upon successful login
                navigate('/profile');
            }
        } catch (error) {
            if (error.response) {
                // If the response status is 422, set error messages from the server
                if (error.response.status === 422) {
                    const serverErrors = error.response.data.errors;
                    const formattedErrors = {};
                    for (const key in serverErrors) {
                        formattedErrors[key] = serverErrors[key][0]; // Assuming only one error message per field
                    }
                    setErrors(formattedErrors);
                } else if (error.response.status === 401) {
                    // Handle 401 Unauthorized error (invalid credentials)
                    setErrors({ ...errors, email: "Invalid email or password" });
                } else {
                    // Handle other server errors here
                    console.error("Server Error:", error.response.data);
                }
            } else {
                // Handle network errors
                console.error("Network Error:", error.message);
            }
        }
    };

    return (
        <>
            <div className="min-h-[90vh] flex items-center w-full justify-center bg-slate-50">
                <Form handleSubmit={handleSubmit}>
                    <Input
                        label={"Email"}
                        type={"text"}
                        handleChange={handleChange}
                        value={formData.email}
                        name={"email"}
                        classInput={
                            "text-sm px-3 text-slate-700  py-2 outline-none block w-full mt-1 focus:border-secondary focus:ring-4 focus:ring-primary/10 transition-all rounded-md  border-2"
                        }
                        placeholder={"Email"}
                        error={""}
                    />

                    <Input
                        label={"Password"}
                        type={"password"}
                        handleChange={handleChange}
                        value={formData.password}
                        name={"password"}
                        classInput={
                            "text-sm px-3  text-slate-700 py-2 outline-none block w-full mt-1 focus:border-secondary focus:ring-4 focus:ring-primary/10 transition-all rounded-md  border-2"
                        }
                        placeholder={"Password"}
                        error={""}
                    />
                    <Button
                        type={"submit"}
                        children={"Login"}
                        buttonClass={" text-white bg-primary w-full"}
                    />
                </Form>
            </div>
        </>
    );
};

export default Login;
