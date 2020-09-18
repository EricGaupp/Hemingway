import { ApolloServer, gql } from "apollo-server-azure-functions";

const typeDefs = gql`
  type Query {
    helloWorld: String!
  }
`;

const resolvers = {
  Query: {
    helloWorld() {
      return "Hello world!";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // playground: process.env.NODE_ENV === "development",
});
export default server.createHandler();
