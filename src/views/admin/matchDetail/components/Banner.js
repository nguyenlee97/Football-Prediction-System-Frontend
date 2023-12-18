import React from "react";

// Chakra imports
import { Button, Flex, Link, Text } from "@chakra-ui/react";

// Assets
import banner from "assets/img/auth/banner.png";


export default function Banner(props) {
  const {  homeTeam, predictHomeScore, awayTeam, predictAwayScore } = props;

  // Chakra Color Mode
  return (
    <Flex
      direction='column'
      bgImage={banner}
      bgSize='cover'
      py={{ base: "30px", md: "56px" }}
      px={{ base: "30px", md: "64px" }}
      borderRadius='30px'
      alignItems='center' // Align the content in the center horizontally
    >
      <Text
        fontSize='md'
        color='#E3DAFF'
        maxW={{
          base: "100%",
          md: "64%",
          lg: "40%",
          xl: "56%",
          "2xl": "46%",
          "3xl": "34%",
        }}
        fontWeight='500'
        mb='40px'
        lineHeight='28px'
        textAlign='center' // Center align the text
      >
        Prediction Result
      </Text>
      <Text
        fontSize={{ base: "24px", md: "34px" }}
        color='white'
        mb='14px'
        fontWeight='700'
        lineHeight={{ base: "32px", md: "42px" }}
      >
        {homeTeam}&nbsp;<span style={{ fontWeight: 'bold' }}>{predictHomeScore}</span>
      </Text>
      <Text
        fontSize={{ base: "24px", md: "34px" }}
        color='white'
        mb='14px'
        fontWeight='700'
        lineHeight={{ base: "32px", md: "42px" }}
      >
        VS
      </Text>
      <Text
        fontSize={{ base: "24px", md: "34px" }}
        color='white'
        mb='14px'
        fontWeight='700'
        lineHeight={{ base: "32px", md: "42px" }}
      >
        {awayTeam}&nbsp;<span style={{ fontWeight: 'bold' }}>{predictAwayScore}</span>
      </Text>
    </Flex>
  );
}