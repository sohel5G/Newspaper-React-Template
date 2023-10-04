import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout"
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import About from "../pages/about/About";
import Career from "../pages/career/Career";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Term from "../pages/term/Term";
import PostDetails from "../pages/home/PostDetails";
import Categories from "../pages/home/Categories";

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
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/term-and-conditions',
                element: <Term></Term>
            },
            {
                path: '/post/:_id',
                element: <PostDetails></PostDetails>
            },
            {
                path: '/category/:category_id',
                element: <Categories></Categories>
            }
        ]
    }
]);

export default router