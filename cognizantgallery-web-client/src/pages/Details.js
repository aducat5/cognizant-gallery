//raect imports
import { useState, useEffect, useContext } from "react";

//3rd party imports
import { useParams, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Badge,
  Link,
  SkeletonText,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

//in-project imports
import { CartContext } from "../context/CartContext";
import VehicleService from "../api/VehicleService";

const Details = () => {
  const { warehouseId } = useParams();
  const { vehicleId } = useParams();
  const [vehicleData, setVehicleData] = useState({});
  const [cart, setCart] = useContext(CartContext);
  let placeholderImage = require("../images/no-image.png");

  useEffect(() => {
    VehicleService.getVehicle(warehouseId, vehicleId).then((response) => {
      const { data } = response;
      setVehicleData(data.result);
    });
  }, []);

  const addToCart = (item) => {
    item.warehouseId = warehouseId;
    setCart([...cart, item]);
  };

  return (
    <Container maxW={"7xl"}>
      <Button marginLeft={"-120%"} marginTop={"2%"}>
        <Link as={RouterLink} to={"/cars"}>
          <ChevronLeftIcon /> Back
        </Link>
      </Button>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={placeholderImage}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {vehicleData.make || <SkeletonText noOfLines={2} />} -{" "}
              {vehicleData.model || <SkeletonText noOfLines={2} />}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              $
              {vehicleData.price || (
                <SkeletonText noOfLines={1} maxW={"50px"} />
              )}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </Text>
              <Text fontSize={"lg"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                maxime modi nam officiis porro, quae, quisquam quos
                reprehenderit velit? Natus, totam.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Year Model</ListItem>
                  <ListItem>{vehicleData.yearModel}</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Licence Status</ListItem>
                  <ListItem>
                    {vehicleData.isLicenced && (
                      <Badge
                        borderRadius="full"
                        px="2"
                        colorScheme="teal"
                        marginLeft={"5px"}
                      >
                        Licenced
                      </Badge>
                    )}
                  </ListItem>
                </List>
              </SimpleGrid>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={() => {
              addToCart(vehicleData);
            }}
          >
            Add to cart
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default Details;
