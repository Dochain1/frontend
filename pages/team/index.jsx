import React from 'react';
import {
  chakra,
  Box,
  Flex,
  Heading,
  Text
} from "@chakra-ui/react";
import TeamMemberCard from '../../components/TeamMemberCard';

const Team = () => {
  const team = [
    {
      name: "Alberto Silva",
      role: "Computer systems student / Full stack developer",
      place: "México, CDMX",
      photo: "https://avatars.githubusercontent.com/u/23264797?v=4",
      gitHubUserName: "Alberto-SC",
      linkedInUserName: "alberto-silva-358955175",
      twitterUserName: "luisbeto9806",
      platziUserName: "albertosilva"
    },
    {
      name: "Bárbaro Javier Valmaseda",
      role: "Computer Science Engineer / Full Stack Blockchain Developer",
      place: "Cuba",
      photo: "https://avatars.githubusercontent.com/u/41394649?v=4",
      gitHubUserName: "bjvalmaseda-dev",      
      linkedInUserName: "bjvalmaseda",
      twitterUserName: "bjvalmaseda",
      platziUserName: "bjvalmaseda.g"
    },
    {
      name: "Ivy Saskia Sejas Rocabado",
      role: "System Engineer Student / Full Stack Blockchain Developer",
      place: "Cochabamba, Bolivia",
      photo: "https://avatars.githubusercontent.com/u/41027286?v=4",
      gitHubUserName: "IvySaskia",      
      linkedInUserName: "ivy-rocabado",
      twitterUserName: "IvySaskia",
      platziUserName: "IvySaskia"
    },
    {
      name: "José Piña",
      role: "Smart Contract Engineer",
      place: "Venezuela",
      photo: "https://avatars.githubusercontent.com/u/32434364?v=4",
      gitHubUserName: "pinajmr",      
      linkedInUserName: "pinajmr",
      twitterUserName: "pinajmr",
      platziUserName: "pinajmr"
    },
    {
      name: "Rodrigo Ramos",
      role: "Computer Systems Engineer student / Fullstack js dev / Blockchain dev",
      place: "CDMX",
      photo: "https://avatars.githubusercontent.com/u/57158796?v=4",
      gitHubUserName: "rdr-x",      
      linkedInUserName: "rodrx20",
      twitterUserName: "rdrx",
      platziUserName: "rdrx"
    },
    {
      name: "Sergio Valadez",
      role: "Product Owner",
      place: "México",
      photo: "https://avatars.githubusercontent.com/u/67393791?v=4",
      gitHubUserName: "sergiogval",
      linkedInUserName: "sergio-valadez-rivera",
      twitterUserName: "sgvldz",
      platziUserName: "sergioval"
    },
  ];

  return ( 
    <>
      <Heading as="h1" fontSize="2xl" textAlign='center' position={"relative"} pb='0px'>
        TEAM       
      </Heading>
      
      <Heading as="h1" fontSize="4xl" textAlign='center' pb='0px' position={"relative"} color="blue.200" mt='0px'>
        DOCHAIN
      </Heading>

      <Text fontSize="xl" textAlign='center' mt='15px' mb='50px'>
        Conoce al equipo que esta integrado por participantes de <br/> <chakra.span color="green.500" as='b'> ETHEREUM DEVELOPER PROGRAM </chakra.span> de <chakra.span color="green.500" as='b'> Platzi </chakra.span>
      </Text>

      <Box minH={'100vh'} >
        <Flex maxW={'100%'} wrap={'wrap'} alignItems='center' justifyContent={'center'} mb={4} gap='10'>
          {team.map((t, index) => {
            return <TeamMemberCard member={t} key={index}/>
          })}
        </Flex> 
      </Box>
    </>
  );
};
export default Team;