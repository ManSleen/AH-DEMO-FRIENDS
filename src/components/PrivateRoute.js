import React from "react";
import { Route, Redirect } from "react-router-dom";

// --- PrivateRoute component

const PrivateRoute = ({ component: Component, ...rest }) => {
  // 1. Check if user is logged in
  // 2. If user is not logged in, redirect them
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
