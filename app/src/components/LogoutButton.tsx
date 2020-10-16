import React from "react";
import { useAuth } from "../hooks/useAuth";

const LogoutButton = () => {
  const { fakeSignOut } = useAuth();

  return (
    <div className="text-sm text-white lg:mt-0">
      {process.env.NODE_ENV === "development" ? (
        <button onClick={() => fakeSignOut()}>Logout</button>
      ) : (
        <a href={`/logout?post_logout_redirect_uri=/logout`}>Logout</a>
      )}
    </div>
  );
};
export default LogoutButton;
