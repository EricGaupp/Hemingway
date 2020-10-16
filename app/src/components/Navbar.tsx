import React from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import HomeButton from "./HomeButton";

const Navbar = () => {
  const { authenticated } = useAuth();
  const { pathname } = useLocation();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span>Hemingway</span>
      </div>
      <div className="lg:flex lg:items-center lg:w-auto lg:justify-end">
        {authenticated ? (
          <LogoutButton />
        ) : pathname === "/login" ? (
          <HomeButton />
        ) : (
          <LoginButton />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
