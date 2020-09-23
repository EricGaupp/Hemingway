import { gql } from "apollo-server-azure-functions";

const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    publications: Int!
  }
  type Post {
    id: ID!
    title: String!
    author: Author!
  }
  type Query {
    helloWorld: String!
    authors: [Author]!
    posts: [Post]!
    publicationSort: [Author]!
  }
  type Mutation {
    login(email: String): String
  }
`;

export default typeDefs;
