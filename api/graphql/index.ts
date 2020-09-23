import { ApolloServer, gql } from "apollo-server-azure-functions";

const typeDefs = gql`
  type Query {
    helloWorld: String!
    imindanger: String!
  }
`;

const resolvers = {
  Query: {
    helloWorld: () => "Hello World!",
    imindanger: () => process.env.imindanger,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

module.exports = server.createHandler();
