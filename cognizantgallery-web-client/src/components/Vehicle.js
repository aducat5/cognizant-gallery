import { Link as RouterLink } from "react-router-dom";
import { Box, Image, Badge, Button, Link } from "@chakra-ui/react";

const Vehicle = (props) => {
  let vehicle = props.data || {};
  let placeholderImage = require("../images/no-image.png");

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
      <Image src={placeholderImage} />
      <Box display="flex" alignItems="baseline">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h3"
          textAlign="left"
          lineHeight="tight"
          isTruncated
        >
          {vehicle.make} - {vehicle.model}
        </Box>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          {vehicle.yearModel}
        </Box>
        {vehicle.isLicenced && (
          <Badge
            borderRadius="full"
            px="2"
            colorScheme="teal"
            marginLeft={"5px"}
          >
            Licenced
          </Badge>
        )}
      </Box>

      <Box display={"flex"} mt="2">
        {vehicle.price} €
      </Box>

      <Box display={"flex"} mt="2">
        {vehicle.createdAt}
      </Box>

      {vehicle.isLicenced && (
        <Box display="flex" marginTop={"5px"}>
          <Link
            as={RouterLink}
            to={`/detail/${props.warehouseId}/${vehicle.id}`}
          >
            <Button colorScheme="blue" variant="outline" size={"sm"}>
              Go to details
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default Vehicle;
