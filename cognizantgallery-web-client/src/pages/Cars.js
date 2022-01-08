//react imports
import { useEffect, useState } from "react";

//3rd party imports
import { Text, Accordion, Spinner, Box } from "@chakra-ui/react";

//in-project imports
import WarehouseService from "../api/WarehouseService";
import Warehouse from "../components/Warehouse";

const Cars = () => {
  const [warehouseData, setWarehouseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    WarehouseService.getAll().then(function (result) {
      const { data } = result;
      setWarehouseData(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        marginTop={"15%"}
      />
    );
  else
    return (
      <Box px={"5%"} paddingTop={"1%"}>
        <Text fontSize={"4xl"} marginBottom={"15px"}>
          Warehouses
        </Text>
        <hr />
        <Accordion>
          {warehouseData.length > 0 &&
            warehouseData.map((warehouse) => (
              <Warehouse data={warehouse} key={warehouse.id} />
            ))}
        </Accordion>
      </Box>
    );
};

export default Cars;
