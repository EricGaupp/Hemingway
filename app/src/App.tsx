import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <>
      <Suspense fallback={<h1>Navbar fetching auth...</h1>}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<h1>Fetching auth...</h1>}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
