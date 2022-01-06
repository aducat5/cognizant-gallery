import { useContext } from "react";
import { CartContext } from "../context/cart-context";

import { Box, Center, Flex, Text, Button, Icon, Image } from "@chakra-ui/react";

const Checkout = () => {
  const [cart, setCart] = useContext(CartContext);
  let placeholderImage = require("../images/no-image.png");

  return (
    <Center>
      <Flex direction="column" textAlign={"left"}>
        {cart.length > 0 &&
          cart.map((item) => (
            <CartListItem key={item.id} data={item} image={placeholderImage} />
          ))}
      </Flex>
    </Center>
  );
};

const CartListItem = (props) => {
  const { data } = props;
  const { image } = props;
  return (
    <Box p="24px" my="22px" borderRadius="12px" key={data.id}>
      <Flex justify="space-between" w="100%">
        <Flex>
          <Image src={image} width={"150px"} />
        </Flex>
        <Flex direction="column" maxWidth="70%" paddingTop="20px">
          <Text fontSize="md" fontWeight="bold" mb="10px">
            {data.make} - {data.model}
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Year Model:{" "}
            <Text as="span" color="gray.500">
              {data.yearModel}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Price:{" "}
            <Text as="span" color="gray.500">
              ${data.price}
            </Text>
          </Text>
        </Flex>
        <Flex
          direction={{ sm: "column", md: "row" }}
          align="flex-start"
          p={{ md: "24px" }}
        >
          <Button
            p="0px"
            bg="transparent"
            mb={{ sm: "10px", md: "0px" }}
            me={{ md: "12px" }}
          >
            <Flex color="red.500" cursor="pointer" align="center" p="12px">
              {/* <Icon as={FaTrashAlt} me="4px" /> */}
              <Text fontSize="sm" fontWeight="semibold">
                DELETE
              </Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Checkout;
