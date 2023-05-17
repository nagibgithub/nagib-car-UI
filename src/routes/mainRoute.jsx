import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:3000/services')
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
]);

export default router