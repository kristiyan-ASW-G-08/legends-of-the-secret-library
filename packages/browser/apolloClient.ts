import { ApolloClient, HttpLink, InMemoryCache, makeVar } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
//@2
import { createUploadLink } from 'apollo-upload-client';

const apolloClient = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_SERVER_URL}/graphql`,
  headers: {
    authorization: `bearer ${
      typeof window !== 'undefined'
        ? //@ts-ignore
          JSON.parse(JSON.stringify(localStorage.getItem('token')))
        : ''
    }`,
  },
  cache: new InMemoryCache({}),
});

export default apolloClient;
