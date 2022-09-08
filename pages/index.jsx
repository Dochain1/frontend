import React from 'react';
import {
  chakra,
  Button,
  Stack,
  Flex,
  Heading,
  Text,
  Image
} from "@chakra-ui/react";
import { 
  AiFillGithub,
} from "react-icons/ai";
import Link from 'next/link';


const Home = () => {
  return <>
    <Stack
      align={"center"}
      spacing={{ base: 8, md: 10 }}
      py='7px'
      direction={{ base: "column", md: "row" }}
    >
      <Stack 
        flex={1} 
        spacing={{ base: 5, md: 10 }}
      >
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        >
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "blue.300",
              zIndex: -1,
            }}
          >
            DOCHAIN 
          </Text>
          <br />
        </Heading>
        
        <Text color={"gray.500"}>
          Los documentos legales de un folder fisico legal estan vulnerables en cuanto a su integridad a causa de acceso al mismo por parte de personas no relacionadas al caso, por lo tanto existe la posibilidad de alterar el mismo.
        </Text>
        
        <Text color={"blue.300"}>
          <chakra.span as='b'> DOCHAIN </chakra.span>es una dapp donde cada uno de los tipos de documentos legales se almacenan en un Blockchain y solo tengan acceso a cada portafolio las personas y/o entidades que solo deberian tener acceso (abogados, jueces y demás entidades involucrados en el caso).
        </Text>

        <Link href={"https://github.com/Dochain1"} passHref>
          <Button
            rounded={"full"}
            size={"lg"}
            fontWeight={"normal"}
            px={6}
            bg={"green.400"}
            leftIcon={<AiFillGithub/>}
            variant='solid'
            _hover={{ bg: "green.500" }}
          >
            Dochain
          </Button>
        </Link>
      </Stack>
      
      <Flex
        flex={1}
        direction="column"
        justify={"center"}
        align={"center"}
        position={"relative"}
        w={"full"}
      >
        <Image src={"./images/Ethereum_Flatline.png"} width="750px"/>
      </Flex>
    </Stack>
  </>;
};

export default Home;
