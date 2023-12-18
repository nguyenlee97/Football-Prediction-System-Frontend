import React from "react";
// Chakra imports
import { Flex, Icon, Image, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
// Assets

export default function NFT(props) {
  const {  homeTeam, homeScore, awayTeam, awayScore, date } = props;
  // Chakra Color Mode
  const textColor = useColorModeValue("brands.900", "white");
  const bgItem = useColorModeValue(
    { bg: "white", boxShadow: "0px 40px 58px -20px rgba(112, 144, 176, 0.12)" },
    { bg: "navy.700", boxShadow: "unset" }
  );
  const textColorDate = useColorModeValue("secondaryGray.600", "white");
  return (
    <Card
      _hover={bgItem}
      bg='transparent'
      boxShadow='unset'
      px='24px'
      py='21px'
      transition='0.2s linear'>
      <Flex direction={{ base: "column" }} justify='center'>
        <Flex position='relative' align='center'>
          <Flex
            direction='column'
            w={{ base: "70%", md: "100%" }}
            me={{ base: "4px", md: "32px", xl: "10px", "3xl": "32px" }}>
            <Text
              color={Number(homeScore) >= Number(awayScore) ? 'brands.900' : 'secondaryGray.600'}
              fontSize={{
                base:  Number(homeScore) >= Number(awayScore) ? 'md' : 'sm',
              }}
              mb='5px'
              fontWeight={Number(homeScore) >= Number(awayScore) ? 'bold' : '400'}
              me='14px'>
              {homeTeam}          {homeScore}
            </Text>
            <Text
              color= {Number(awayScore) >= Number(homeScore) ? 'brands.900' : 'secondaryGray.600'}
              fontSize={{
                base: Number(awayScore) >= Number(homeScore) ? 'md' : 'sm',
              }}
              fontWeight={Number(awayScore) >= Number(homeScore) ? 'bold' : '400'}
              me='14px'>
              {awayTeam}          {awayScore}
            </Text>
          </Flex>
          <Flex
            me={{ base: "4px", md: "32px", xl: "10px", "3xl": "32px" }}
            align='center'>
            <Text fontWeight='700' fontSize='md' color={textColor}>
              {date}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
