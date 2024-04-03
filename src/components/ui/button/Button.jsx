import React from "react";
import './button.css'
const Button = ({ type, children, buttonClass , onClick }) => {
    return (
        <div className="flex justify-center">
            <button onClick={onClick}
                className={`button px-4 py-2 text-base cursor cursor-pointer min-w-[120px] rounded-md my-3 ${buttonClass}`}
                type={type}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
