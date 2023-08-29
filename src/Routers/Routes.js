import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Shared/Login/Login";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Leaflet from "../Pages/Leaflet/Leaflet";
import Signup from "../Pages/Shared/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                path: '/leaflet',
                element: <Leaflet></Leaflet>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },

    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])

export default router;