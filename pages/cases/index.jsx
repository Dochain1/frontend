import React, { useEffect, useState } from 'react';
import CaseCard from '../../components/CaseCard';
import { Box, Flex, Heading } from '@chakra-ui/react';
import ComplaintDialog from '../../components/ComplaintDialog';
import useApi from '../../hooks/useApi';
import { useWeb3React } from '@web3-react/core';

const Cases = () => {
  // eslint-disable-next-line no-unused-vars
  const [briefcase, setBriefcases] = useState([]);
  const { active, account } = useWeb3React();
  const { getBriefcasesByAddress, loading, error } = useApi();

  const fetchData = async () => {
    const res = await getBriefcasesByAddress(account);
    console.log(error);
    setBriefcases(res);
  };

  useEffect(() => {
    console.log('active', active);
    if (active) {
      fetchData();
    }
  }, [active, account]);

  return (
    <>
      <Heading as="h1" fontSize="4xl" textAlign="center" p="0px">
        Casos
      </Heading>

      <Box textAlign="right" pr="120px" my="10px">
        <ComplaintDialog />
      </Box>

      <Box minH={'100vh'}>
        <Flex
          maxW={'100%'}
          wrap={'wrap'}
          alignItems="center"
          justifyContent={'center'}
          mb={4}
          gap="2"
        >
          {!loading
            ? !error
              ? briefcase?.map((item) => (
                  <CaseCard key={`case-${item.case_id}`} item={item} />
                ))
              : 'Ocurrió un error, no se preocupe, no ha sido su culpa'
            : 'Cargando...'}
        </Flex>
      </Box>
    </>
  );
};

export default Cases;
