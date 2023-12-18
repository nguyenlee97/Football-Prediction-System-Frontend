import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/matchDetail/components/Banner";
import TableTopCreators from "views/admin/matchDetail/components/TableTopCreators";
import HistoryItem from "views/admin/matchDetail/components/HistoryItem";

// Assets
import { tableColumnsTopCreators } from "views/admin/matchDetail/variables/tableColumnsTopCreators";
import Card from "components/card/Card.js";

export default function MatchDetail() {
  const location = useLocation();
  const matchId = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");

  const [matchPrediction, setMatchPrediction] = useState([])
  const [pastMatchup, setPastMatchup] = useState([])
  const [historicalStatistic, setHistoricalStatistic] = useState([])
  useEffect(() => {
    // Fetch tableDataCheck from API
    fetch(`http://localhost:5000/matchDetail/${matchId}`)
      .then((response) => response.json())
      .then((data) => setMatchPrediction(data))
      .catch((error) => {
        console.error("Error fetching tableDataCheck:", error);
      });
    fetch(`http://localhost:5000/pastMatchup/${matchId}`)
    .then((response) => response.json())
    .then((data) => setPastMatchup(data))
    .catch((error) => {
      console.error("Error fetching tableDataCheck:", error);
    }); 
    fetch(`http://localhost:5000/historicalStatistic/${matchId}`)
    .then((response) => response.json())
    .then((data) => setHistoricalStatistic(data))
    .catch((error) => {
      console.error("Error fetching tableDataCheck:", error);
    }); 
  }, []);

  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb='20px'
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}>
          <Banner
          homeTeam={matchPrediction.homeTeam}
          predictHomeScore={matchPrediction.predictHomeScore}
          awayTeam={matchPrediction.awayTeam}
          predictAwayScore={matchPrediction.predictAwayScore}
             />
          <Flex direction='column'>
            <Flex
              mt='45px'
              mb='20px'
              justifyContent='space-between'
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}>
            </Flex>            
          </Flex>
        </Flex>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}>
            <Card px='0px' mb='20px'>
            <TableTopCreators
              tableData={historicalStatistic}
              columnsData={tableColumnsTopCreators}
            />
          </Card>
          <Card p='0px'>
            <Flex
              align={{ sm: "flex-start", lg: "center" }}
              justify='space-between'
              w='100%'
              px='22px'
              py='18px'>
              <Text color={textColor} fontSize='xl' fontWeight='600'>
                Past Matchups
              </Text>
              <Button variant='action'>See all</Button>
              </Flex>

                {pastMatchup.map((match, index) => (
                  <HistoryItem
                    key={index}
                    homeTeam={match.homeTeam}
                    homeScore={match.homeScore}
                    awayTeam={match.awayTeam}
                    awayScore={match.awayScore}
                    date={match.date}
                  />
                ))}
          </Card>
        </Flex>
      </Grid>
      {/* Delete Product */}
    </Box>
  );
}
