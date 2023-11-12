import { QueryResolvers } from "../generated/graphql.js";


const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];
  
  const booksResolver: NonNullable<QueryResolvers["books"]> = () => {
    return books;
  } 
  
  export default booksResolver;
  