// Chakra imports
import {
  Box,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import React, { useState, useEffect } from "react";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import WeeklyAccuracy from "views/admin/default/components/WeeklyAccuracy";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  
  const [tableDataCheck, setTableDataCheck] = useState([]);
  const [tableDataComplex, setTableDataComplex] = useState([]);

  useEffect(() => {
    // Fetch tableDataCheck from API
    fetch("http://localhost:5000/matchFixture")
      .then((response) => response.json())
      .then((data) => setTableDataCheck(data))
      .catch((error) => {
        console.error("Error fetching tableDataCheck:", error);
      });

    // Fetch tableDataComplex from API
    fetch("http://localhost:5000/pastMatch")
      .then((response) => response.json())
      .then((data) => setTableDataComplex(data))
      .catch((error) => {
        console.error("Error fetching tableDataComplex:", error);
      });
  }, []);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <WeeklyAccuracy />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
          <DailyTraffic />
          <MiniCalendar h="100%" minW="100%" selectRange={false} />
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </SimpleGrid>
    </Box>
  );
}