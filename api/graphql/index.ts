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
});

module.exports = server.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
});
