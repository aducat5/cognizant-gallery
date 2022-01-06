import { useEffect, useState } from "react";

import WarehouseService from "../api/WarehouseService";
import Warehouse from "../components/Warehouse";
import { Text, Accordion } from "@chakra-ui/react";

const Cars = () => {
  const [warehouseData, setWarehouseData] = useState([]);

  useEffect(() => {
    WarehouseService.getAll().then(function (result) {
      const { data } = result;
      setWarehouseData(data);
    });
  }, []);

  return (
    <div>
      <Text fontSize={"4xl"}>Warehouses</Text>
      <hr />
      <Accordion>
        {warehouseData.length > 0 &&
          warehouseData.map((warehouse) => (
            <Warehouse data={warehouse} key={warehouse.id} />
          ))}
      </Accordion>
    </div>
  );
};

export default Cars;
