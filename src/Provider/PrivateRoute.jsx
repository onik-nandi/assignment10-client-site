import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
// import { Navigate, useLocation } from "react-router";
import Loader from "../Pages/Loader";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(`private location `, location.pathname)

  if (loading) {
    return <Loader></Loader>;
  }
  if (user && user?.email) {
    return children;
  }
  return   <Navigate
      state={{ from: location.pathname }}
      to="/auth/login"
      replace
    ></Navigate>
    }
export default PrivateRoute;


<Navigate state={location.pathname} to="/auth/login"></Navigate>;