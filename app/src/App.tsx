import React from "react";
// import { Switch, Route, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const helloWorld = gql`
  query helloWorld {
    helloWorld
  }
`;

const App: React.FC = () => {
  const { loading, error, data } = useQuery(helloWorld);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <p>{data}</p>;
  // return (
  //   <>
  //     <Link to="/login">Login</Link>
  //     <Link to="/register">Register</Link>
  //     <Switch>
  //       <Route exact path="/login">
  //         Login
  //       </Route>
  //       <Route exact path="/register">
  //         Register
  //       </Route>
  //     </Switch>
  //   </>
  // );
};

export default App;
