import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import {
  Box,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Box h='100vh' w='100%'>
      <Box
        mx="auto"
        maxW={'full'}
        width="100%"
        bg={useColorModeValue('gray.50', 'gray.900')}
        px={4}
      >
        <Navbar />
      </Box>

      <Flex
        flexDirection='column'
        maxW='90%'
        px='10px'
        my='30px'
        mx='auto'
        py='auto'
        borderRadius='20px'>
          {children}
      </Flex>     

      <Footer />
    </Box>
  );
};

export default Layout;
