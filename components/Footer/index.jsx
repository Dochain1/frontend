import React from 'react';
import {
  Box,
  Center,
  Divider,
  Heading,
  Image,
  Text,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

const Footer = () => {
  return <Box
  bg={useColorModeValue('gray.50', 'gray.900')}
  color={useColorModeValue('gray.700', 'gray.200')}>
  <Box py={10}>
    <Flex
      align={'center'}
      _before={{
        content: '""',
        borderBottom: '1px solid',
        borderColor: useColorModeValue('gray.200', 'gray.700'),
        flexGrow: 1,
        mr: 8,
      }}
      _after={{
        content: '""',
        borderBottom: '1px solid',
        borderColor: useColorModeValue('gray.200', 'gray.700'),
        flexGrow: 1,
        ml: 8,
      }}>
      <Image src="./images/logo.png" width="80px" />
      <Center height='50px' mx={5}>
        <Divider orientation='vertical' borderColor={useColorModeValue('gray.200', 'gray.700')}/>
      </Center>
      <Image src="./images/platzi.svg" width="80px"/>
      <Heading size="md" color="blue.200" mt={0.2} ml={1}>
        Project 
      </Heading>
    </Flex>
    <Text pt={6} fontSize={'sm'} textAlign={'center'}>
      © 2022 DOCHAIN Solution. All rights reserved
    </Text>
  </Box>
</Box>
};

export default Footer;
