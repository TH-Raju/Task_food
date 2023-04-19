import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Detail from "../Components/Home/Detail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    }, {
        path: '/detail',
        element: <Detail></Detail>
    }
])