import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Error from "../components/Error";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement:<Error/>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blog',
                element: <Blog />
            },
        ]
    }
]);

export default Router;