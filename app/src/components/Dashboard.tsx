import React from "react";
import { gql, useQuery } from "@apollo/client";

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
      {data.authors.map((author: any) => (
        <li key={author.id}>{author.name}</li>
      ))}
    </ul>
  );
};

const Dashboard = () => {
  return (
    <div>
      {/* <h3>Homepage</h3>
      {user?.userId ? (
        <h5>Authenticated: {user.userId}</h5>
      ) : (
        <h5>Unauthenticated</h5>
      )} */}
      <h4>GraphQL Data</h4>
      <GraphQLData />
    </div>
  );
};

export default Dashboard;
