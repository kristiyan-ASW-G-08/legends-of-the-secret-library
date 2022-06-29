import '../styles/globals.css';
import type { AppProps } from 'next/app';
import mixins from './mixins';
import theme from './theme';
import mediaQueries from './mediaQueries';
import { ThemeProvider } from 'styled-components';
import Navbar from '../components/Navbar/Navbar';
import { ApolloProvider } from '@apollo/client';
import apolloClient from 'apolloClient';
import { Provider } from 'react-redux';
import Store, { persistor } from '../store/';
import { PersistGate } from 'redux-persist/integration/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={Store}>
        <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
          <ThemeProvider theme={{ ...mixins, mediaQueries, ...theme }}>
            <Navbar />
            <Component {...pageProps} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
