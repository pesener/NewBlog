import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ user } ) => {


  return (
    user ? <Outlet /> : <Navigate to="/"/>
    );
};

export default PrivateRoute;
