import React from 'react';
import {
  Flex,
  IconButton,
  Image,
  Text,
  useColorModeValue,
  useColorMode
} from "@chakra-ui/react";
import { 
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import Link from 'next/link';
import { MdPlace } from 'react-icons/md';


const TeamMemberCard = ({member}) => {
  const { name, role, place, photo, gitHubUserName, linkedInUserName, twitterUserName } = member;
  let boxBg = useColorModeValue('gray.50', 'gray.900');
  let mainText = useColorModeValue("gray.800", "white");
  let secondaryText = useColorModeValue("gray.400", "gray.400");
  const { colorMode } = useColorMode();

  return ( 
    <Flex
      borderRadius='20px'
      py='20px'
      h='auto'
      w={{ base: "500px", md: "580px" }}
      alignItems='center'
      direction='column'
      boxShadow='dark-lg'
      bg={boxBg}>
      <Flex flexDirection='column' mb='20px'>
        <Image
          borderRadius='full'
          boxSize='200px'
          src={photo}
          alt={name}
          mx='auto'
        />
        <Text
          fontWeight='600'
          color={mainText}
          textAlign='center'
          fontSize='xl'>
          {name}
        </Text>
        <Text
          color={secondaryText}
          textAlign='center'
          fontSize='sm'
          fontWeight='500'>
          {role}
        </Text>
        <Flex flexDirection='row' justify='center'>
          <MdPlace/>
          <Text
          color={secondaryText}
          textAlign='center'
          fontSize='sm'
          fontWeight='500'
          ml='5px'>
          {place}
          </Text>       
        </Flex>
      </Flex>

      <Flex justify='space-between' w='100%' px='36px'>
        {gitHubUserName ? <Link href={`https://github.com/${gitHubUserName}`} passHref>
          <Flex flexDirection='column' alignItems='center'>
            <IconButton
              variant={colorMode === 'dark' ? 'ghost' : 'solid'}
              aria-label='Github'
              fontSize='30px'
              size='sm'
              icon={<AiFillGithub />}
            />
            <Text color={secondaryText} fontWeight='500'>
              @{gitHubUserName}
            </Text>
          </Flex>
        </Link> : null }

        {linkedInUserName ? <Link href={`https://www.linkedin.com/in/${linkedInUserName.url}`} passHref>
          <Flex flexDirection='column' alignItems='center'>
            <IconButton
              variant={colorMode === 'dark' ? 'ghost' : 'solid'}
              aria-label='LinkedIn'
              fontSize='30px'
              size='sm'
              icon={<AiFillLinkedin />}
            />
            <Text color={secondaryText} fontWeight='500'>
              @{linkedInUserName.name}
            </Text>
          </Flex>
        </Link> : null }

        {twitterUserName ? <Link href={`https://twitter.com/${twitterUserName}`} passHref>
          <Flex flexDirection='column' alignItems='center'>
            <IconButton
              variant={colorMode === 'dark' ? 'ghost' : 'solid'}
              aria-label='LinkedIn'
              fontSize='30px'
              size='sm'
              icon={<AiFillTwitterSquare />}
            />
            <Text color={secondaryText} fontWeight='500'>
              @{twitterUserName}
            </Text>
          </Flex>
        </Link> : null }
      </Flex>
    </Flex>
  );
};
export default TeamMemberCard;