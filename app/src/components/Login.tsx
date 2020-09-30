import React from "react";

const Login = () => {
  return (
    <div className="container mx-auto flex flex-col">
      <a
        href={`/.auth/login/aad?post_login_redirect_uri=${process.env.REACT_APP_BASE_URI}/dash`}
      >
        Microsoft
      </a>
      <a
        href={`/.auth/login/facebook?post_login_redirect_uri=${process.env.REACT_APP_BASE_URI}/dash`}
      >
        Facebook
      </a>
      <a
        href={`/.auth/login/github?post_login_redirect_uri=${process.env.REACT_APP_BASE_URI}/dash`}
      >
        GitHub
      </a>
      <a
        href={`/.auth/login/google?post_login_redirect_uri=${process.env.REACT_APP_BASE_URI}/dash`}
      >
        Google
      </a>
      <a
        href={`/.auth/login/twitter?post_login_redirect_uri=${process.env.REACT_APP_BASE_URI}/dash`}
      >
        Twitter
      </a>
    </div>
  );
};

export default Login;
