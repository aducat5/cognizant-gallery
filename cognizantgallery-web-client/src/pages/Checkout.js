import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cart-context";
import PurchaseService from "../api/PurchaseService";

import { Box, Center, Flex, Text, Button, Image } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const Checkout = () => {
  const [cart, setCart] = useContext(CartContext);
  let navigate = useNavigate();
  let placeholderImage = require("../images/no-image.png");
  let totalPrice = 0;
  cart.length > 0 &&
    cart.forEach((item) => {
      totalPrice += item.price;
    });

  const checkout = () => {
    //send cart to api
    //if purchase successful clear cart
    PurchaseService.checkout(cart).then((result) => {
      const { data } = result;
      if (data.isSuccessful) {
        clearCart();
        navigate("../success", { replace: true });
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (warehouseId, vehicleId) => {
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      if (item.warehouseId == warehouseId && item.id == vehicleId) {
        console.log("found", item);
        const newCart = cart.filter((element) => element != item);
        setCart(newCart);
        return;
      }
    }
  };

  return (
    <Center>
      {cart.length > 0 && (
        <Flex direction="row">
          <Flex direction="column" textAlign={"left"}>
            {cart.map((item) => (
              <CartListItem
                key={item.id}
                data={item}
                image={placeholderImage}
                removeHandler={removeFromCart}
              />
            ))}
          </Flex>
          <Flex direction="column" marginLeft="250px" textAlign="left">
            <SummaryItem title={"Total Price:"} text={"$" + totalPrice} />
            <SummaryItem
              title={"Adress:"}
              text={"lorem ipsum dolor sit amet"}
            />
            <SummaryItem title={"Payment:"} text={"(VISA) TR993xxxxxxxxxxxx"} />
            <RoundedButton text={"Checkout"} onClick={checkout} color="green" />
            <RoundedButton text={"Clear"} onClick={clearCart} color="red" />
          </Flex>
        </Flex>
      )}
    </Center>
  );
};

const SummaryItem = (props) => {
  return (
    <Box p="10px" my="22px" borderRadius="12px">
      <Flex justify="space-between" w="100%">
        <Flex direction="column" paddingTop="0px">
          <Text fontSize="md" fontWeight="bold" mb="10px">
            {props.title}
          </Text>
          <Text color="gray.400" fontSize="lg" fontWeight="semibold">
            <Text as="span" color="gray.500">
              {props.text}
            </Text>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

const CartListItem = (props) => {
  const { data } = props;
  const { image } = props;
  const { removeHandler } = props;
  return (
    <Box p="10px" my="22px" borderRadius="12px" key={data.id} borderWidth="1px">
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
            onClick={() => {
              removeHandler(data.warehouseId, data.id);
            }}
          >
            <Flex color="red.500" cursor="pointer" align="center" p="12px">
              <DeleteIcon></DeleteIcon>
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

const RoundedButton = (props) => {
  const color = props.color || "white";
  return (
    <Button
      colorScheme={"green"}
      bg={color + ".400"}
      rounded={"full"}
      px={6}
      _hover={{
        bg: color + ".500",
      }}
      marginTop={"10px"}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
};

export default Checkout;
