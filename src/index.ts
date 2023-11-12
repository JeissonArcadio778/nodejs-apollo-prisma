import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'node:fs'
import { resolvers } from "./resolvers/index"

const typeDefs = readFileSync(__dirname+'/schemas/schema.graphql', 'utf8')

export const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({url}) => {
console.log(`🚀  Server ready at: ${url}`);
  
});


