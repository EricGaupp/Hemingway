import React from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <div className="text-sm text-white lg:mt-0">
      <Link to="/login">Login</Link>
    </div>
  );
};

export default LoginButton;
