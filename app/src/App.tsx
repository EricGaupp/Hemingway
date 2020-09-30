// import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/dash">
          <h5>Dashboard</h5>
        </Route>
      </Switch>
    </>
  );
};

export default App;
