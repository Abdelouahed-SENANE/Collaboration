import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import Routers from "./routes/Routers";

function App() {
    return (
        <>
            <RouterProvider router={Routers} />
        </>
    );
}

export default App;
