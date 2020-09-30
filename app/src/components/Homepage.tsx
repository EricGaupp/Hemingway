import React from "react";
import { useAuth } from "../hooks/useAuth";

const Homepage = () => {
  const { user } = useAuth();
  return (
    <div>
      <h5>Homepage</h5>
      <p>
        {user?.userDetails
          ? `Authenticated: ${user.userDetails}`
          : "Not Authenticated!"}
      </p>
    </div>
  );
};

export default Homepage;
