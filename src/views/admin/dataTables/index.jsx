// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import CheckTable from "views/admin/dataTables/components/CheckTable";
import ComplexTable from "views/admin/dataTables/components/ComplexTable";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/dataTables/variables/columnsData";
import React, { useState, useEffect } from "react";

export default function Settings() {
  const [tableDataCheck, setTableDataCheck] = useState([]);
  const [tableDataComplex, setTableDataComplex] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/matchFixture")
      .then((response) => response.json())
      .then((data) => setTableDataCheck(data))
      .catch((error) => {
        console.error("Error fetching tableDataCheck:", error);
      });

    fetch("http://localhost:5000/pastMatch")
      .then((response) => response.json())
      .then((data) => setTableDataComplex(data))
      .catch((error) => {
        console.error("Error fetching tableDataComplex:", error);
      });
  }, []);

  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: "20px", xl: "20px" }}
      >
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </SimpleGrid>
    </Box>
  );
}