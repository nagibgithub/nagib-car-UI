import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layout/mainLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:3000/services')
            }
        ]
    }
]);

export default router