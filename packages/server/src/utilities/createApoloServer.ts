import typeDefs from '@typeDefs/typeDefs';
import resolvers from '@resolvers/index';
import { ApolloServer } from 'apollo-server-express';

const server = new ApolloServer({ typeDefs, resolvers });

export default server;
