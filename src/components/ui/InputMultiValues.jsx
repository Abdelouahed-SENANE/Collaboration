import React, { useState } from "react";
import { FaCircleXmark } from "react-icons/fa6";

const InputMultiValues = ({ data, handleChange, handleRemove }) => {
    return (
        <>
            <label className="mx-1 mt-2 text-gray-700">Competences</label>
            <div className="border-2 flex mt-1 items-start px-3  py-2  border-slate-200 flex-wrap rounded-md max-w-[600px]">
                <ul className="inline-flex gap-0.5 w-full flex-wrap h-full">
                    {data.map((competence, index) => {
                        return (
                            <li
                                key={index}
                                className="px-3  py-1.5 rounded-full bg-secondary flex items-center  text-white text-sm"
                            >
                                <span>{competence}</span>
                                <button
                                    className="block ml-2"
                                    onClick={() => handleRemove(index)}
                                >
                                    <FaCircleXmark />
                                </button>
                            </li>
                        );
                    })}
                </ul>
                <input
                    placeholder={"Enter competences"}
                    onKeyDown={handleChange}
                    className={"outline-none text-sm block"}
                />
            </div>
        </>
    );
};

export default InputMultiValues;
