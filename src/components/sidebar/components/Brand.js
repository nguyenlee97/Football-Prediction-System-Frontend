import React from "react";
import { HSeparator } from "components/separator/Separator";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";
var logo = require('../../../assets/img/logo/logo.png')
// Custom components

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <img src={logo} alt="Logo" />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
