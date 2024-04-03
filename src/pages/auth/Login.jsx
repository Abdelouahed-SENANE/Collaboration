import React, { useState } from "react";
import Form from "@components/ui/Form";
import Input from "@components/ui/Input";
import Button from "@components/ui/button/Button";

const Login = () => {
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
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
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
