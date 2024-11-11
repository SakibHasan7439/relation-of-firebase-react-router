import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if(loading){
        return <span className="loading absolute left-[50%] mt-8 loading-spinner text-secondary"></span>
    }

    if(user){
        return children;
    }
    return (
        <Navigate to={"/logIn"}></Navigate>
    );
};

export default PrivateRoute;