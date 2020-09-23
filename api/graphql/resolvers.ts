import { IResolvers } from "apollo-server-azure-functions";
import { Author } from "./types";

const authors: Author[] = [
  { id: "1001", name: "Eric", publications: 3 },
  { id: "99", name: "Andrew", publications: 13 },
  { id: "0", name: "Gaupp", publications: 100 },
  { id: "45", name: "Bartolomew", publications: 1 },
];

const resolvers: IResolvers = {
  Query: {
    helloWorld: () => "Hello World!",
    authors: () => authors.sort((a, b) => parseInt(a.id) - parseInt(b.id)),
    publicationSort: () =>
      authors.sort((a, b) => b.publications - a.publications),
  },
};

export default resolvers;
