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
    <nav className="w-100 flex justify-center items-center bg-blue-800 p-6">
      <div className="container flex justify-between items-center flex-wrap">
        <div className="text-white mr-6">
          <span>Hemingway</span>
        </div>
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
