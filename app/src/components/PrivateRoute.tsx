import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ component: Component, ...rest }: RouteProps) => {
  const auth = useAuth();

  if (auth.fetching) return <h3>Fetching auth...</h3>;
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
