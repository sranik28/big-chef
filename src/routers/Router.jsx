import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Error from "../components/Error";
import Register from "../pages/loginsite/Register";
import Login from "../pages/loginsite/Login";
import ViewDetails from "../components/ViewDetails";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/view-details',
                element: <ViewDetails/>
            },

        ]
    }
]);

export default Router;