import { useEffect, useState } from "react";

import WarehouseService from "../api/WarehouseService";
import Warehouse from "../components/Warehouse";
import { Heading, Accordion } from "@chakra-ui/react";

export default function Cars() {
  const [warehouseData, setWarehouseData] = useState([]);

  useEffect(() => {
    WarehouseService.getAll().then(function (result) {
      setWarehouseData(result);
    });
  }, []);

  return (
    <div>
      <Heading>Warehouses</Heading>
      <hr />
      <Accordion>
        {warehouseData.map((warehouse) => (
          <Warehouse data={warehouse} key={warehouse.id} />
        ))}
      </Accordion>
    </div>
  );
}
