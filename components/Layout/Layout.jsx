import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import {
  Box,
  Flex
} from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Flex minH="100vh" direction="column">
      <Navbar />
      <Box mx="auto" flex={1} p={4} maxW={"7xl"} width="100%">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
