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
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
};

export default App;
