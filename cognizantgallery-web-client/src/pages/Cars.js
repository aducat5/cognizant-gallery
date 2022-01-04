import { useEffect, useState } from "react";

import WarehouseService from "../api/WarehouseService";
import Warehouse from "../components/Warehouse";
import { Box } from "@chakra-ui/react";

export default function Cars() {
  const [warehouseData, setWarehouseData] = useState([]);

  useEffect(() => {
    WarehouseService.getAll().then(function (result) {
      setWarehouseData(result);
    });
  }, []);

  return (
    <Box>
      <h1>Warehouses</h1>
      <hr />
      {warehouseData.map((warehouse) => (
        <Warehouse data={warehouse} key={warehouse.id} />
      ))}
    </Box>
  );
}
