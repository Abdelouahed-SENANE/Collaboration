import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

const Input = ({
    type = 'text',
    handleChange,
    label,
    name,
    placeholder,
    classInput,
    handleKeyDown,
    error,
}) => {
    return (
        <div className="my-2">
            <label className="mx-1 text-gray-700">{label}</label>
            <input
                type={type}
                className={classInput}
                placeholder={placeholder}
                name={name}
                onKeyDown={handleKeyDown}
                onChange={handleChange}
            />
            {error && (
                <p className="text-red-500 text-sm font-medium flex gap-1 items-center">
                    <FaExclamationCircle />
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;
