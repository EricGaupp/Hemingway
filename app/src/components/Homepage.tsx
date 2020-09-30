import React from "react";
import { useAuth } from "../hooks/useAuth";

const Homepage = () => {
  const { user } = useAuth();
  return (
    <div>
      <h5>Homepage</h5>
      {user?.userDetails ? (
        <>
          <p>Authenticated:</p>
          <ul>
            <li>{user.userId}</li>
            <li>{user.userDetails}</li>
            <li>{user.identityProvider}</li>
            <li>{user.userRoles.join(" & ")}</li>
          </ul>
        </>
      ) : (
        <p>"Not Authenticated!"</p>
      )}
    </div>
  );
};

export default Homepage;
