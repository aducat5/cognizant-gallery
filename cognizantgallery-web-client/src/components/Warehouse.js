//react imports
import React from "react";

//3rd party imports
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
  const { data } = props;
  const vehicles = data.cars.vehicles || [];
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <Text align={"left"} fontSize="2xl">
              {data.name}
            </Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Text align={"left"} fontSize={"1x1"}>
          Location: {data.cars.location}
        </Text>
        <Text
          align={"right"}
        >{`lat: ${data.location.lat} | long: ${data.location.long}`}</Text>
        <hr />
        <SimpleGrid columns={4} spacing={10} p={8}>
          {vehicles.map((vehicle) => (
            <Vehicle
              key={vehicle.id}
              data={vehicle}
              warehouseId={data.id}
            ></Vehicle>
          ))}
        </SimpleGrid>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Warehouse;
