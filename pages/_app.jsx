import React from 'react';
import Layout from '../components/Layout/Layout';
import './styles.css';

import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from '../config/web3';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3ReactProvider>
  );
};

export default MyApp;
