import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Switch>
        <Route exact path="/login">
          Login
        </Route>
        <Route exact path="/register">
          Register
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
