//react imports
import { useContext } from "react";

//3rd party imports
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, HStack, Link, useColorModeValue } from "@chakra-ui/react";

//in-project imports
import { CartContext } from "../context/CartContext";

const Links = [
  {
    id: 0,
    route: "/",
    text: "Home",
  },
  {
    id: 1,
    route: "/cars",
    text: "Cars",
  },
  {
    id: 2,
    route: "/checkout",
    text: "Checkout",
  },
];

const NavLink = ({ children }) => (
  <Link
    as={RouterLink}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    to={children.route}
  >
    {children.text}
  </Link>
);

const NavigationBar = () => {
  const [cart, setCart] = useContext(CartContext);

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link.id}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
        <Link>Cart ({cart.length})</Link>
      </Flex>
    </Box>
  );
};

export default NavigationBar;
