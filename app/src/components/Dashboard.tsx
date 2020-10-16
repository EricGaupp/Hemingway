import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Author } from "../types/types";

const authorsQuery = gql`
  query {
    authors {
      id
      name
    }
  }
`;

const GraphQLData = () => {
  const { loading, error, data } = useQuery(authorsQuery);
  if (loading) return <h5>Loading...</h5>;
  if (error) {
    console.log(error);
    return <h5>Error...</h5>;
  }
  return (
    <ul>
      {data.authors.map((author: Author) => (
        <li key={author.id}>{author.name}</li>
      ))}
    </ul>
  );
};

class Dashboard extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h4>GraphQL Data</h4>
        <GraphQLData />
      </div>
    );
  }
}

export default Dashboard;
