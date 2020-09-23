import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const helloWorld = gql`
  query helloWorld {
    helloWorld
  }
`;

const danger = gql`
  query danger {
    danger
  }
`;

const DangerRoute: React.FC = () => {
  const { loading, error, data } = useQuery(danger);

  if (loading) return <h4>Loading</h4>;
  if (error) {
    console.log(error);
    return <h4>Error</h4>;
  }

  return <h4>{data["imindanger"]}</h4>;
};

const HelloRoute: React.FC = () => {
  const { loading, error, data } = useQuery(helloWorld);

  if (loading) return <h4>Loading</h4>;
  if (error) {
    console.log(error);
    return <h4>Error</h4>;
  }

  return <h4>{data["helloWorld"]}</h4>;
};

const App: React.FC = () => {
  return (
    <>
      <Link to="/danger">Danger</Link>
      <Link to="/hello">Hello</Link>
      <Switch>
        <Route exact path="/danger">
          <DangerRoute />
        </Route>
        <Route exact path="/hello">
          <HelloRoute />
        </Route>
      </Switch>
    </>
  );
};

export default App;
