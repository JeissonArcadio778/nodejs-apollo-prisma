import { Resolvers } from "../generated/graphql";
import booksResolver from "./booksResolver";

export const resolvers: Resolvers = {
    Query: {
        books: booksResolver
    }
}


