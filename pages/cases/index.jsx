import React, { useState } from 'react';
import CaseCard from '../../components/CaseCard';
import {
  Flex,
  Heading
} from "@chakra-ui/react";

const Cases = () => {
  // eslint-disable-next-line no-unused-vars
  const [cases, setCases] = useState(Array(3).fill());
  
  return (
    <>
      <Heading as="h1" fontSize="4xl" textAlign='center' p='0px'>
        Casos
      </Heading>
      <Flex
        direction={{ base: "column", xl: "row" }}
        mx='auto'
        p="20px"
        rowGap='20px'
        columnGap='40px'>
        {cases.map((_, index) => {
          return <CaseCard item={index} key={index} />
        })}
      </Flex>
    </>
  );
};

export default Cases;
