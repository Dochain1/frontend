import React, { useState } from 'react';
import CaseCard from '../../components/CaseCard';
import {
  Box,
  Flex,
  Heading
} from "@chakra-ui/react";
import ComplaintDialog from '../../components/ComplaintDialog';

const Cases = () => {
  // eslint-disable-next-line no-unused-vars
  const [cases, setCases] = useState(Array(6).fill());
  
  return (
    <>
      <Heading as="h1" fontSize="4xl" textAlign='center' p='0px'>
        Casos
      </Heading>

      <Box textAlign='right' pr='120px' my='10px'>
        <ComplaintDialog/>
      </Box>

      <Box minH={'100vh'} >
        <Flex maxW={'100%'} wrap={'wrap'} alignItems='center'justifyContent={'center'} mb={4} gap='2'>
          {cases.map((_, index) => {
            return <CaseCard item={index} key={index} />
          })}
        </Flex> 
      </Box>
    </>
  );
};

export default Cases;
