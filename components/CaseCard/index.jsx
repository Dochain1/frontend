import React from 'react';
import { MdPlace, MdRemoveRedEye } from 'react-icons/md';
import { BsUnlockFill } from 'react-icons/bs';
import { FaUserAlt, FaUserTie } from "react-icons/fa";
import Link from 'next/link';

import {
  Box,
  Flex,
  Button,
  Icon,
  Text,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";


// eslint-disable-next-line no-unused-vars
const CaseCard = ({ item }) => {
  let boxBg = useColorModeValue("white !important", "#111c44 !important");
  let secondaryBg = useColorModeValue("gray.50", "whiteAlpha.100");
  let mainText = useColorModeValue("gray.800", "white");
  let iconBox = useColorModeValue("green.400", "whiteAlpha.200");
  let iconColor = useColorModeValue("brand.200", "white");
  
  return <Box
    borderRadius='20px'
    bg={boxBg}
    h='auto'
    w={{ base: "315px", md: "345px" }}
    direction='column'
    boxShadow='dark-lg'>

    <Box p='20px'>
      <Box w='100%'>
        <Text
          textTransform="uppercase"
          textAlign="center"
          bg={useColorModeValue("#111c44", "whiteAlpha.100")}
          px={5}
          color={useColorModeValue('gray.50', 'gray.300')}
          fontSize="xl"
          fontWeight="600"
          rounded="2xl"
          w='100%'>
          CBBA5001
        </Text> 
      </Box>
      <Box mb='auto'>
        <Text textAlign="center" color={mainText} w='100%' fontSize='l' pt='10px'>
          PORTAFOLIO
        </Text>
      </Box>
    </Box>

    <Flex
      bg={secondaryBg}
      w='100%'
      p='20px'
      height='auto'
      direction='column'>
        <Flex>
          <Icon 
            as={BsUnlockFill} 
            w='20px' 
            h='20px'
            me='6px'
            mt='6px'
            color={mainText} 
          />
          <Box mb='auto'>
            <Text color='green.400' fontSize='sm' my='auto' fontWeight='500'>
              Abierto
            </Text>
            <Text color='gray.500' fontSize='sm' my='auto' fontWeight='500' lineHeight='24px' mt='-5px'>
              Estado
            </Text>
          </Box>
        </Flex>

        <Flex mt='10px'>
          <Icon
            as={FaUserAlt}
            w='20px'
            h='20px'
            me='6px'
            mt='6px'
            color={mainText}
          />
          <Box mb='auto'>
            <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
              Nombre
            </Text>
            <Text color='gray.500' fontSize='sm' my='auto' fontWeight='500' lineHeight='24px' >
              Demandante
            </Text>
          </Box>
        </Flex>

        <Flex mt='10px'>
          <Icon
            as={FaUserTie}
            w='20px'
            h='20px'
            me='6px'
            mt='6px'
            color={mainText}
          />
          <Box mb='auto'>
            <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
              Nombre            
            </Text>
            <Text color='gray.500' fontSize='sm' my='auto' fontWeight='500' lineHeight='24px' mt='-5px'>
              Abogado Demandante
            </Text>
          </Box>
        </Flex>

        <Flex mt='10px'>
          <Icon
            as={FaUserAlt}
            w='20px'
            h='20px'
            me='6px'
            mt='6px'
            color={mainText}
          />
          <Box mb='auto'>
            <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
              Nombre
            </Text>
            <Text color='gray.500' fontSize='sm' my='auto' fontWeight='500' lineHeight='24px' >
              Demandado
            </Text>
          </Box>
        </Flex>

        <Flex mt='10px'>
          <Icon
            as={FaUserTie}
            w='20px'
            h='20px'
            me='6px'
            mt='6px'
            color={mainText}
          />
          <Box mb='auto'>
            <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
              Nombre
            </Text>
            <Text color='gray.500' fontSize='sm' my='auto' fontWeight='500' lineHeight='24px' >
              Abogado Demandado
            </Text>
          </Box>
        </Flex>

        <Flex mt='10px'>
          <Icon
            as={MdPlace}
            w='20px'
            h='20px'
            me='6px'
            mt='6px'
            color={mainText}
          />
          <Box mb='auto'>
            <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
              Cochabamba, Bolivia
            </Text>
            <Text color='gray.500' fontSize='sm' my='auto' fontWeight='500' lineHeight='24px' >
              Lugar del caso
            </Text>
          </Box>
        </Flex>

    </Flex>

    <Box p='20px'>
      <Flex w='100%' mb='10px'>
        <Spacer/>
        <Link href={'/cases/' + item}>
          <Button
            w='auto'
            h='30px'
            align='center'
            justify='center'
            borderRadius='12px'
            me='12px'
            bg='green.400'>
            <Icon
              w='l'
              h='l'
              as={MdRemoveRedEye}
              color={iconColor}
            />
            <Text textAlign="center" color={mainText} w='100%' fontSize='m'pl='4px'>
              VER
            </Text>
          </Button>
        </Link>
      </Flex>
    </Box>  
  </Box>
};

export default CaseCard;
