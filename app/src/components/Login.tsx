import React from "react";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { fakeSignIn } = useAuth();
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
        href={`/login/github?post_login_redirect_uri=${process.env.REACT_APP_BASE_URI}/dashboard`}
      >
        GitHub
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
      <button onClick={fakeSignIn}>Fake Auth</button>
    </div>
  );
};

export default Login;
