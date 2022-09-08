import React from 'react'
import {
  Box,
  Switch,
  useColorMode
} from "@chakra-ui/react";
import { 
  MoonIcon, 
  SunIcon
} from '@chakra-ui/icons'

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  const colorModeDarkIsChecked = () => {
      return colorMode === "dark"
  }
  return (
    <Box>
      <SunIcon/>
      <Switch 
        onChange={toggleColorMode}
        isChecked={colorModeDarkIsChecked()}
        colorScheme={"green"}
        sx={{ 'span.chakra-switch__track:not([data-checked])': { backgroundColor: 'yellow.300' } }}
        ml={1}
      />        
      <MoonIcon ml={1}/>
    </Box>
  );
};

export default ColorModeSwitch;
  