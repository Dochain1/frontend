import React from 'react';
import { MdPlace, MdRemoveRedEye, MdCheckCircle } from 'react-icons/md';
import { BsUnlockFill } from 'react-icons/bs';
import { FaUserAlt, FaUserTie, FaUsers } from 'react-icons/fa';
import Link from 'next/link';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Flex,
  Icon,
  List,
  ListItem,
  ListIcon,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import useTruncatedAddress from '../../hooks/useTruncatedAddress';
import AssignedToCase from '../AssignedToCase';

// eslint-disable-next-line no-unused-vars
const CaseCard = ({ item }) => {
  let bg = useColorModeValue('gray.50', 'gray.900');
  let secondaryBg = useColorModeValue('gray.50', 'whiteAlpha.100');
  let mainText = useColorModeValue('gray.800', 'white');

  return (
    <Flex
      display={'inline-flex'}
      p={2}
      pb={4}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        borderRadius="20px"
        h="auto"
        w={{ base: '315px', md: '345px' }}
        direction="column"
        boxShadow="dark-lg"
        bg={bg}
      >
        <Box p="20px">
          <Box w="100%">
            <Text
              textTransform="uppercase"
              textAlign="center"
              bg={useColorModeValue('#171923', 'whiteAlpha.100')}
              px={5}
              color={useColorModeValue('gray.50', 'gray.300')}
              fontSize="xl"
              fontWeight="600"
              rounded="2xl"
              w="100%"
            >
              {`CBBA500${item.case_id}`}
            </Text>
          </Box>
          <Box mb="auto">
            <Text
              textAlign="center"
              color={mainText}
              w="100%"
              fontSize="l"
              pt="10px"
            >
              {item.typeComplaint.toUpperCase()}
            </Text>
          </Box>
        </Box>

        <Flex
          bg={secondaryBg}
          w="100%"
          p="20px"
          height="auto"
          direction="column"
        >
          <Flex>
            <Icon
              as={BsUnlockFill}
              w="20px"
              h="20px"
              me="6px"
              mt="6px"
              color={mainText}
            />
            <Box mb="auto">
              <Text color="green.400" fontSize="sm" my="auto" fontWeight="500">
                Abierto
              </Text>
              <Text
                color="gray.500"
                fontSize="sm"
                my="auto"
                fontWeight="500"
                lineHeight="24px"
                mt="-5px"
              >
                Estado
              </Text>
            </Box>
          </Flex>

          <Flex mt="10px">
            <Icon
              as={FaUserAlt}
              w="20px"
              h="20px"
              me="6px"
              mt="6px"
              color={mainText}
            />
            <Box mb="auto">
              <Text color={mainText} fontSize="sm" my="auto" fontWeight="500">
                Nombre
              </Text>
              <Text
                color="gray.500"
                fontSize="sm"
                my="auto"
                fontWeight="500"
                lineHeight="24px"
              >
                {item.name_of_plaintiff}
              </Text>
            </Box>
          </Flex>

          <Flex mt="10px">
            <Icon
              as={FaUserTie}
              w="20px"
              h="20px"
              me="6px"
              mt="6px"
              color={mainText}
            />
            <Box mb="auto">
              <Text
                color="gray.500"
                fontSize="sm"
                my="auto"
                fontWeight="500"
                lineHeight="24px"
                mt="-5px"
              >
                {item.plaintiffs_attorney}
              </Text>
              <Text
                color="gray.500"
                fontSize="sm"
                my="auto"
                fontWeight="500"
                lineHeight="24px"
                mt="-5px"
              >
                Abogado/a Demandante
              </Text>
            </Box>
          </Flex>

          <Flex mt="10px">
            <Icon
              as={FaUserAlt}
              w="20px"
              h="20px"
              me="6px"
              mt="6px"
              color={mainText}
            />
            <Box mb="auto">
              <Text color={mainText} fontSize="sm" my="auto" fontWeight="500">
                Nombre
              </Text>
              <Text
                color="gray.500"
                fontSize="sm"
                my="auto"
                fontWeight="500"
                lineHeight="24px"
              >
                {item.name_of_defendant}
              </Text>
            </Box>
          </Flex>

          <Flex mt="10px">
            <Icon
              as={FaUserTie}
              w="20px"
              h="20px"
              me="6px"
              mt="6px"
              color={mainText}
            />
            <Box mb="auto">
              <Text
                color="gray.500"
                fontSize="sm"
                my="auto"
                fontWeight="500"
                lineHeight="24px"
              >
                {item.plaintiffs_attorney}
              </Text>
              <Text
                color="gray.500"
                fontSize="sm"
                my="auto"
                fontWeight="500"
                lineHeight="24px"
              >
                Abogado/a Demandado
              </Text>
            </Box>
          </Flex>

          <Flex mt="10px">
            <Icon
              as={MdPlace}
              w="20px"
              h="20px"
              me="6px"
              mt="6px"
              color={mainText}
            />
            <Box mb="auto">
              <Text color={mainText} fontSize="sm" my="auto" fontWeight="500">
                {item.place_of_case}
              </Text>
              <Text
                color="gray.500"
                fontSize="sm"
                my="auto"
                fontWeight="500"
                lineHeight="24px"
              >
                Lugar del caso
              </Text>
            </Box>
          </Flex>

          <Flex mt="10px">
            <Icon
              as={FaUsers}
              w="20px"
              h="20px"
              me="6px"
              mt="6px"
              color={mainText}
            />
            <Box w="100%">
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton pl={1}>
                      <Box flex="1" textAlign="left">
                        <Text
                          color={mainText}
                          fontSize="sm"
                          my="auto"
                          fontWeight="500"
                        >
                          Involucrados/as asignados/as
                        </Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <List spacing={3}>
                      {truncatedAddressAssignes.map((item, index) => {
                        return (
                          <ListItem key={index}>
                            <ListIcon as={MdCheckCircle} color="green.500" />
                            {item.truncatedAddressAssigne}
                          </ListItem>
                        );
                      })}
                    </List>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Flex>
        </Flex>

        <Box p="20px">
          <Flex w="100%" mb="10px">
            <Spacer />
            <AssignedToCase />
            <Link href={'/cases/' + item}>
              <Button
                variant={'solid'}
                colorScheme={'green'}
                size={'sm'}
                ml={2}
                leftIcon={<MdRemoveRedEye />}
              >
                Abrir
              </Button>
            </Link>
          </Flex>

          <Box p="20px">
            <Flex w="100%" mb="10px">
              <Spacer />
              <Link href={`/cases/${item.case_id}`}>
                <Button
                  variant={'solid'}
                  colorScheme={'green'}
                  size={'sm'}
                  leftIcon={<MdRemoveRedEye />}
                >
                  Abrir
                </Button>
              </Link>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default CaseCard;
