import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Homepage = () => {
  const auth = useAuth();

  if (auth.authenticated) return <Redirect to="/dashboard" />;

  return (
    <div className="container">
      <h5>Homepage</h5>
    </div>
  );
};

export default Homepage;
