import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const auth = useAuth();

  if (auth.authenticated) return <Redirect to="/dashboard" />;
  return (
    <div>
      <a href="/login/aad?post_login_redirect_uri=/dashboard">Microsoft</a>
      <a href="/login/facebook?post_login_redirect_uri=/dashboard">Facebook</a>
      <a href="/login/google?post_login_redirect_uri=/dashboard">Google</a>
      <a href="/login/twitter?post_login_redirect_uri=/dashboard">Twitter</a>
      {process.env.NODE_ENV === "development" && (
        <button onClick={() => auth.fakeSignIn()}>Fake Login</button>
      )}
    </div>
  );
};

export default Login;
