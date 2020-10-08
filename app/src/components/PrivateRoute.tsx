import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { authResource } from "../index";

const PrivateRoute = ({ component: Component, ...rest }: RouteProps) => {
  const auth = authResource.auth.read();

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.authenticated && Component ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
