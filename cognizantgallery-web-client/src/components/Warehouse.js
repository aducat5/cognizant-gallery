import { Box } from "@chakra-ui/react";

export default function Warehouse(props) {
  let warehouseData = props.data;
  console.log(warehouseData);
  return (
    <Box>
      <h1>{warehouseData.name}</h1>
    </Box>
  );
}
