import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyOrders from "../Pages/MyOrders";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../Pages/Profile";

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
            },

            {
                path: 'orders',
                element: <PrivateRoute>
                            <MyOrders></MyOrders>
                        </PrivateRoute>
            },

            {
                path: 'profile',
                element: <PrivateRoute>
                            <Profile></Profile>
                        </PrivateRoute>
            }
        ]
    }
]);

export default Router;