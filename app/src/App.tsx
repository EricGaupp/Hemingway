import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const helloWorld = gql`
  query helloWorld {
    helloWorld
  }
`;

const authorsQuery = gql`
  query {
    authors {
      id
      name
      publications
    }
  }
`;

const publicationsQuery = gql`
  query {
    publicationSort {
      id
      name
      publications
    }
  }
`;

const HelloRoute: React.FC = () => {
  const { loading, error, data } = useQuery(helloWorld);

  if (loading) return <h4>Loading</h4>;
  if (error) {
    console.error(error);
    return <h4>Error</h4>;
  }

  return <h4>{data["helloWorld"]}</h4>;
};

const AuthorsRoute: React.FC = () => {
  const { loading, error, data } = useQuery(authorsQuery);

  if (loading) return <h4>Loading</h4>;
  if (error) {
    console.error(error);
    return <h4>Error</h4>;
  }

  return data.authors.map(
    (author: { id: string; name: string; publications: number }) => {
      return (
        <div key={author.id}>
          <h3>{author.name}</h3>
          <h5>{`Publications: ${author.publications}`}</h5>
        </div>
      );
    }
  );
};

const PublicationsRoute: React.FC = () => {
  const { loading, error, data } = useQuery(publicationsQuery);

  if (loading) return <h4>Loading</h4>;
  if (error) {
    console.error(error);
    return <h4>Error</h4>;
  }

  return data.publicationSort.map(
    (author: { id: string; name: string; publications: number }) => {
      return (
        <div key={author.id}>
          <h3>{author.name}</h3>
          <h5>{`Publications: ${author.publications}`}</h5>
        </div>
      );
    }
  );
};

const App: React.FC = () => {
  return (
    <>
      <Link to="/hello">Hello</Link>
      <Link to="/authors">Authors</Link>
      <Link to="/publications">Publications</Link>
      <Switch>
        <Route exact path="/hello">
          <HelloRoute />
        </Route>
        <Route exact path="/authors">
          <AuthorsRoute />
        </Route>
        <Route exact path="/publications">
          <PublicationsRoute />
        </Route>
      </Switch>
    </>
  );
};

export default App;
