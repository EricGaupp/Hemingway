import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ component: Component, ...rest }: RouteProps) => {
  const { user, fetching } = useAuth();

  if (fetching) return null;
  return (
    <Route
      {...rest}
      render={(props) =>
        user?.userId && Component ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
