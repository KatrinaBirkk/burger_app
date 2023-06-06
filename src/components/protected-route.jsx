import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCookie } from "./utils";
import React from "react";

const Protected = ({ onlyUnAuth = false, component }) => {
  // const isAuthChecked = useSelector((state) => state.auth.authChecked);
  const isAuthChecked = getCookie("authChecked");
  const user = useSelector((state) => state.user);
  const location = useLocation();

  console.log(isAuthChecked);
  console.log(user);

  if (isAuthChecked === false) {
    return null;
  }

  if (onlyUnAuth && user && isAuthChecked === "true") {
    console.log("onlyUnAuth");
    console.log(onlyUnAuth);
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && isAuthChecked === false) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return component;
};

export const OnlyAuth = (props) => <Protected onlyUnAuth={false} {...props} />;
export const OnlyUnAuth = (props) => <Protected onlyUnAuth={true} {...props} />;
