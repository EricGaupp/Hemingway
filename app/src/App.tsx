import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
      <div className="w-100 flex-none flex h-10 bg-red-400">
        {["button1", "button2", "button3", "button4"].map((button) => (
          <div className="flex-1 flex justify-center items-center">
            {button}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
