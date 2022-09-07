import React from 'react';
import Link from 'next/link';
import LoginButton from '../LoginButton';
import ColorModeSwitch from '../ColorModeSwitch';
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  useColorModeValue
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useWeb3React } from "@web3-react/core";
import { GiInjustice } from 'react-icons/gi';
import { RiTeamFill } from 'react-icons/ri';
import { FaHome } from 'react-icons/fa';



const LinksForConected = [
  {
    name: "Inicio",
    to: "/",
    icon: <FaHome/>
  },
  {
    name: "Casos",
    to: "/cases",
    icon: <GiInjustice/>
  },
  {
    name: "Team",
    to: "/team",
    icon: <RiTeamFill/>
  }
];

const LinksForNotConected = [
  {
    name: "Inicio",
    to: "/",
    icon: <FaHome/>
  },
  {
    name: "Team",
    to: "/team",
    icon: <RiTeamFill/>
  }
];

const renderLinks = (active) => {
  let renderLinksResult = active === true ? LinksForConected : LinksForNotConected; 
  return renderLinksResult.map(({ name, to, icon }) => (
    <Link href={to} passHref key={name}>
      <Button
        variant={"ghost"}
        size={"sm"}
        leftIcon={icon}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }} 
      >
        {name}
      </Button>
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
