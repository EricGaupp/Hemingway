import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Homepage = () => {
  const { authenticated } = useAuth();
  //Put Redirect here in case user is logged in?
  if (authenticated) return <Redirect to="/dashboard" />;
  return (
    <div>
      <h5>Homepage</h5>
    </div>
  );
};

export default Homepage;
