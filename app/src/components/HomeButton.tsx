import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <div className="text-sm text-white">
      <Link to="/">Home</Link>
    </div>
  );
};

export default HomeButton;
