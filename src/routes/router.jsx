import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout"
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import About from "../pages/about/About";
import Career from "../pages/career/Career";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            }
        ]
    }
]);

export default router