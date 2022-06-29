import { ApolloServer } from 'apollo-server-express';
import connectToDB from '@customUtilities/connectToDB';
import express from 'express';
import cors from 'cors';
import typeDefs from './typeDefs/typeDefs';
import resolvers from './resolvers';
import Battler from './battlers/Battler';

const corsOptions = {
  origin: '*',
  credentials: true,
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Origin': '*',
};

async function init(): Promise<void> {
  //@ts-ignore
  connectToDB(process.env.DATABASE_URL);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req: { headers } }) => {
      return {
        headers,
      };
    },
  });
  await server.start();
  const app = express();

  app.use('/frontview', express.static('./frontview'));
  app.use('/sideview', express.static('./sideview'));
  app.use('/cards', express.static('./cards'));
  app.use(cors(corsOptions));

  server.applyMiddleware({ app });

  await new Promise<void>(r => app.listen({ port: 7000 }, r));

  console.log(`🚀 Server ready at http://localhost:7000`);
}

init();
