// Chakra imports
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Card from "components/card/Card.js";
import BarChart from "components/charts/BarChart";
import { barChartOptionsConsumption } from "variables/charts";

export default function WeeklyAccuracy(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Make API call to fetch the chart data
    fetch("http://localhost:5000/accuracy")
      .then((response) => response.json())
      .then((data) => {
        const accuracyData = data.accuracy
        barChartOptionsConsumption.xaxis.categories = data.week
        setChartData(accuracyData)})
      .catch((error) => console.log(error));
  }, []);

  return (
    <Card align='center' direction='column' w='203%' {...rest}>
      <Flex align='center' w='100%' px='15px' py='10px'>
        <Text
          me='auto'
          color={textColor}
          fontSize='xl'
          fontWeight='700'
          lineHeight='100%'>
          Weekly Accuracy
        </Text>
      </Flex>

      <Box h='240px' mt='auto'>
        {chartData.length > 0 ? (
          <BarChart chartData={chartData} chartOptions={barChartOptionsConsumption} />
        ) : (
          <p>Loading chart data...</p>
        )}
      </Box>
    </Card>
  );
}