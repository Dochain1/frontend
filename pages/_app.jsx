import React from 'react';
import Layout from '../components/Layout/Layout';
import './styles.css'
//import "semantic-ui-css/semantic.min.css"; include library if you need

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
