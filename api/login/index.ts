import { ApolloServer, gql } from "apollo-server-azure-functions";

const typeDefs = gql`
  type Query {
    helloWorld: String!
  }
`;

const resolvers = {
  Query: {
    helloWorld: () => "Hello World!",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

module.exports = server.createHandler();
