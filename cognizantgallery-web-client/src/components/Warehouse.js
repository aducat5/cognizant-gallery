import React from "react";
import {
  Box,
  Text,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  SimpleGrid,
} from "@chakra-ui/react";

import Vehicle from "./Vehicle";

const Warehouse = (props) => {
  let warehouseData = props.data;
  let vehicles = warehouseData.cars.vehicles || [];
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <Text align={"left"} fontSize="2xl">
              {warehouseData.name}
            </Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Text align={"left"} fontSize={"1x1"}>
          Location: {warehouseData.cars.location}
        </Text>
        <Text
          align={"right"}
        >{`lat: ${warehouseData.location.lat} | long: ${warehouseData.location.long}`}</Text>
        <hr />
        <SimpleGrid columns={4} spacing={10} p={8}>
          {vehicles.map((vehicle) => (
            <Vehicle
              key={vehicle.id}
              data={vehicle}
              warehouseId={warehouseData.id}
            ></Vehicle>
          ))}
        </SimpleGrid>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Warehouse;
