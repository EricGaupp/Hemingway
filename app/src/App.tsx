import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Link to="/login">
          <h3>Login</h3>
        </Link>
        <h5>Homepage</h5>
      </Route>
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default App;
