import React from 'react'
import {
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
      <>
        <SunIcon/>
        <Switch 
            onChange={toggleColorMode}
            isChecked={colorModeDarkIsChecked()}
        />        
        <MoonIcon/>
      </>
    );
  };
  
  export default ColorModeSwitch;
  