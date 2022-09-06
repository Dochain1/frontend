import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { useEffect } from 'react';
import useTruncatedAddress from '../../hooks/useTruncatedAddress';
import { connector } from '../../config/web3';
import { useCallback } from 'react';
import {
  Badge,
  Flex,
  Button,
  Tag,
  TagLabel,
  TagCloseButton,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";


const LoginButton = () => {
  const { account, activate, active, balance, deactivate, error } = useWeb3React();
  const isUnsupportedChain = error instanceof UnsupportedChainIdError;

  const connect = useCallback(() => {
    activate(connector);
    localStorage.setItem('previouslyConnected', 'true');
  }, [activate]);

  const disconnect = () => {
    deactivate();
    localStorage.removeItem('previouslyConnected');
  };

  //Do not disconnect when browser is refresh
  useEffect(() => {
    if (localStorage.getItem('previouslyConnected') === 'true') connect();
  }, [connect]);

  const truncatedAddress = useTruncatedAddress(account);

  return (
    <Flex alignItems={"center"}>
      {active ? (
        <Tag colorScheme="green" borderRadius="full">
          <TagLabel>{truncatedAddress}
          </TagLabel>
          <Badge
            d={{
              base: "none",
              md: "block",
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
          variant={"solid"}
          colorScheme={"green"}
          size={"sm"}
          leftIcon={<AddIcon />}
          onClick={connect}
          disabled={isUnsupportedChain}
        >
          {isUnsupportedChain ? "Red no soportada" : "Conectar wallet"}
        </Button>
      )}
    </Flex>
  );
};

export default LoginButton;
