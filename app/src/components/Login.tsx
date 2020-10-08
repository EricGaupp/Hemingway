import React from "react";
import { Redirect } from "react-router-dom";
import { authResource } from "../index";

const Login = () => {
  const auth = authResource.auth.read();

  if (auth.authenticated) return <Redirect to="/dashboard" />;
  return (
    <div className="container mx-auto flex flex-col">
      <a
        href={`/login/aad?post_login_redirect_uri=${process.env.REACT_APP_BASE_URI}/dashboard`}
      >
        Microsoft
      </a>
      <a
        href={`/login/facebook?post_login_redirect_uri=${process.env.REACT_APP_BASE_URI}/dashboard`}
      >
        Facebook
      </a>
      <a
        href={`/login/google?post_login_redirect_uri=${process.env.REACT_APP_BASE_URI}/dashboard`}
      >
        Google
      </a>
      <a
        href={`/login/twitter?post_login_redirect_uri=${process.env.REACT_APP_BASE_URI}/dashboard`}
      >
        Twitter
      </a>
    </div>
  );
};

export default Login;
