import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const auth = localStorage.getItem('Users');
    return auth? <Outlet/>: <Navigate to={'/SignUp'}/>
}
export default PrivateRoute;