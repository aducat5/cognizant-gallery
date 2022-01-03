import { useEffect } from "react";

import WarehouseService from "../api/WarehouseService";
import Warehouse from "../components/Warehouse";
import { Box } from "@chakra-ui/react";

export default function Cars() {
  console.log(WarehouseService.getAll());
  return (
    <Box>
      <h1>Cars</h1>
      <hr />
      {/* <Warehouse data={warehouses[0]}></Warehouse> */}
    </Box>
  );
}
