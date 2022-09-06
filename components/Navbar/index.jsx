import React from 'react';
import Link from 'next/link';
import LoginButton from '../LoginButton';
import ColorModeSwitch from '../ColorModeSwitch';
import {
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  Link as DefaultLink, 
  useColorModeValue
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useWeb3React } from "@web3-react/core";

const LinksForConected = [
  {
    name: "Inicio",
    to: "/",
  },
  {
    name: "Casos",
    to: "/cases",
  },
  {
    name: "Team",
    to: "/team",
  }
];

const LinksForNotConected = [
  {
    name: "Inicio",
    to: "/",
  },,
  {
    name: "Team",
    to: "/team",
  }
];

const renderLinks = (active) => {
  let renderLinksResult = active === true ? LinksForConected : LinksForNotConected; 
  return renderLinksResult.map(({ name, to }) => (
    <Link href={to} passHref key={name}>
      <DefaultLink
        px={2}
        py={1}
        as={Link}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
      >
        {name}
      </DefaultLink>
    </Link>
  ))
};


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // eslint-disable-next-line no-unused-vars
  const { active, account, library } = useWeb3React();

  return (
    <>
      <Box
        mx="auto"
        maxW={"7xl"}
        width="100%"
        bg={useColorModeValue('gray.50', 'gray.900')}
      >
        <Flex
        bg={useColorModeValue('gray.50', 'gray.900')}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Flex alignItems="center">
              <Image src="./images/logo.png" width="80px" />
            </Flex>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {renderLinks(active)}
            </HStack>
          </HStack>
          <HStack
            as={"nav"}
            spacing={4}
          >
            <ColorModeSwitch/>
            <Center height='50px'>
              <Divider orientation='vertical' />
            </Center>
            <LoginButton/>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {renderLinks(active)}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
