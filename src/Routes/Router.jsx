import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        // need to add a errorPage here...
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: 'logIn',
                element: <Login></Login>
            },

            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
]);

export default Router;