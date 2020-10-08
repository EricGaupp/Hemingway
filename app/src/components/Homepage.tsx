import React from "react";
import { Redirect } from "react-router-dom";
import { authResource } from "../index";

const Homepage = () => {
  const auth = authResource.auth.read();

  if (auth.authenticated) return <Redirect to="/dashboard" />;

  return (
    <div>
      <h5>Homepage</h5>
    </div>
  );
};

export default Homepage;
