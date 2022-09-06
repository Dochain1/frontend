import React from 'react';
import {
  Box,
  Flex,
  Heading
} from "@chakra-ui/react";
import TeamMemberCard from '../../components/TeamMemberCard';

const Team = () => {
  const team = [
    {
      name: "Alberto Silva",
      role: "",
      place: "",
      photo: "https://avatars.githubusercontent.com/u/23264797?v=4",
      gitHubUserName: "Alberto-SC"
    },
    {
      name: "Bárbaro Javier Valmaseda",
      role: "",
      place: "Cuba",
      photo: "https://avatars.githubusercontent.com/u/41394649?v=4",
      gitHubUserName: "bjvalmaseda-dev",      
      linkedInUserName: {
        name: "Bárbaro Javaier Valmaseda",
        url: "bjvalmaseda"
      },
      twitterUserName: "bjvalmaseda"
    },
    {
      name: "Ivy Saskia Sejas Rocabado",
      role: "System Engineer Student",
      place: "Bolivia",
      photo: "https://media-exp1.licdn.com/dms/image/C5603AQEB-h0Ci5PYeg/profile-displayphoto-shrink_800_800/0/1536500960836?e=1668038400&v=beta&t=DzQLFJGLIELpAZoLa9JaI8wFUrnsKtZNHDMqiIJrVWQ",
      gitHubUserName: "IvySaskia",      
      linkedInUserName: {
        name: "Ivy Rocabado",
        url: "ivy-rocabado"
      },
      twitterUserName: "IvySaskia"
    },
    {
      name: "José Piña",
      role: "",
      place: "Buenos Aires",
      photo: "https://avatars.githubusercontent.com/u/32434364?v=4",
      gitHubUserName: "pinajmr",      
      linkedInUserName: {
        name: "José Piña",
        url: "pinajmr"
      },
      twitterUserName: "pinajmr"
    },
    {
      name: "Rodrigo Ramos",
      role: "",
      place: "CDMX",
      photo: "https://avatars.githubusercontent.com/u/57158796?v=4",
      gitHubUserName: "rdr-x",      
      linkedInUserName: {
        name: "Rodrigo Ramos",
        url: "rodrx20"
      },
      twitterUserName: "rdr-x"
    },
    {
      name: "Sergio Valadez",
      role: "",
      place: "México",
      photo: "https://avatars.githubusercontent.com/u/67393791?v=4",
      gitHubUserName: "sergiogval",      
      twitterUserName: "sgvldz"
    },
  ];

  return ( 
    <>
      <Heading as="h1" fontSize="2xl" textAlign='center' position={"relative"} pb='0px'>
        TEAM       
      </Heading>
      
      <Heading as="h1" fontSize="4xl" textAlign='center' pb='10px' position={"relative"} color="cyan" mt='0px'>
        DOCHAIN
      </Heading>

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