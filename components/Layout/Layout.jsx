import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import {
  Box,
  Flex
} from "@chakra-ui/react";
import Head from 'next/head';


const Layout = ({ children }) => {
  return (
    <>
    <Head>
      <title>DOCHAIN</title>
      <link rel="icon" href="./images/logo.png" />
    </Head>
    <Flex minH="100vh" direction="column">
      <Navbar />
      <Box 
        pt={'100px'}
        mx="auto" 
        flex={1} 
        px={4}
        pb={4} 
        maxW={"7xl"} 
        width="100%"
      >
        {children}
      </Box>
      <Footer />
    </Flex>
    </>
  );
};

export default Layout;
