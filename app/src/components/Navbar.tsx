import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const auth = useAuth();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span>Hemingway</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:justify-end">
        {auth.authenticated ? (
          <div className="text-sm px-4 py-2 leading-none text-white mt-4 lg:mt-0">
            {process.env.NODE_ENV === "development" ? (
              <button onClick={() => auth.fakeSignOut()}>Logout</button>
            ) : (
              <a href={`/logout?post_logout_redirect_uri=/logout`}>Logout</a>
            )}
          </div>
        ) : (
          <>
            <div className="text-sm px-4 py-2 leading-none text-white mt-4 lg:mt-0">
              <Link to="/">Home</Link>
            </div>
            <div className="text-sm px-4 py-2 leading-none text-white mt-4 lg:mt-0">
              <Link to="/login">Login</Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
