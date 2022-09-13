import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import React, { useEffect, useCallback, useState } from 'react';
import useTruncatedAddress from '../../hooks/useTruncatedAddress';
import { connector } from '../../config/web3';
import {
  Badge,
  Flex,
  Button,
  Tag,
  TagLabel,
  TagCloseButton,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { ethers } from 'ethers';
import useApi from '../../hooks/useApi';
import { getPublicKey } from '../../utils/encrypt';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useContext } from 'react';
const LoginButton = () => {
  const [balance, setBalance] = useState(0);
  const { storeData } = useContext(GlobalContext);
  const { account, activate, active, deactivate, error, library } =
    useWeb3React();
  const { registerCheck, register } = useApi();
  const isUnsupportedChain = error instanceof UnsupportedChainIdError;

  const connect = useCallback(() => {
    activate(connector);
    localStorage.setItem('previouslyConnected', 'true');
  }, [active, account]);

  const disconnect = () => {
    deactivate();
    localStorage.removeItem('previouslyConnected');
  };

  const getBalance = useCallback(async () => {
    let toSet = 0;
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
    toSet = await provider.getBalance(account);
    setBalance((toSet / 1e18).toFixed(2));
  }, [library?.ethers, account]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await registerCheck(account);
      let user = response.user;
      if (response?.message != 'Usuario registrado') {
        const publicKey = await getPublicKey(account);
        try {
          const res = await register(publicKey, account);
          user = {
            public_key: res,
            name: null,
            address: account,
          };
        } catch (e) {
          console.log(e);
        }
      }
      storeData(user);
    };

    if (active) {
      getBalance();
      fetchUser();
    }
  }, [active, getBalance, account]);

  //Do not disconnect when browser is refresh
  useEffect(() => {
    if (localStorage.getItem('previouslyConnected') === 'true') connect();
    console.log(localStorage.getItem('previouslyConnected'));
  }, []);

  const truncatedAddress = useTruncatedAddress(account);

  return (
    <Flex alignItems={'center'}>
      {active ? (
        <Tag colorScheme="green" borderRadius="full">
          <TagLabel>{truncatedAddress}</TagLabel>
          <Badge
            d={{
              base: 'none',
              md: 'block',
            }}
            variant="solid"
            fontSize="0.8rem"
            ml={1}
          >
            ~{balance} Ξ
          </Badge>
          <TagCloseButton onClick={disconnect} />
        </Tag>
      ) : (
        <Button
          variant={'solid'}
          colorScheme={'green'}
          size={'sm'}
          leftIcon={<AddIcon />}
          onClick={connect}
          disabled={isUnsupportedChain}
        >
          {isUnsupportedChain ? 'Red no soportada' : 'Conectar wallet'}
        </Button>
      )}
    </Flex>
  );
};

export default LoginButton;
