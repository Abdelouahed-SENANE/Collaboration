import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="shadow shadow-black/10 py-4">
            <div className="container mx-auto w-[85%]">
                <div className="flex items-center justify-between">
                    <div>
                        <Link to={"/"}>
                            <h2 className="text-3xl text-primary">Youcare</h2>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <ul className="flex items-center gap-2">
                            <li>
                                <Link
                                    to={"/home"}
                                    className="text-secondary/90 hover:text-secondary"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/home"}
                                    className="text-secondary/90 hover:text-secondary"
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                        <div className="ml-7">
                            <Link
                                to={"login"}
                                className="text-white bg-primary border-2 px-6 border-primary py-2 rounded-md mx-3"
                            >
                                <button>Login</button>
                            </Link>
                            <Link
                                to={"registre"}
                                className="text-primary border-2 border-primary px-6 py-2 rounded-md"
                            >
                                <button>Registre</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
