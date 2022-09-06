import React from 'react';
import Layout from '../components/Layout/Layout';
import './styles.css';
import theme from '../theme';

import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from '../config/web3';
import { ChakraProvider } from '@chakra-ui/react';
import GlobalContextProvider from '../contexts/GlobalContext';
const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <GlobalContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </GlobalContextProvider>
      </Web3ReactProvider>
    </ChakraProvider>
  );
};

export default MyApp;
