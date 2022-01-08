//react imports
import { useContext } from "react";

//3rd party imports
import { useNavigate } from "react-router-dom";
import { Center, Flex } from "@chakra-ui/react";

//in-project imports
import { CartContext } from "../context/CartContext";
import PurchaseService from "../api/PurchaseService";
import {
  SummaryItem,
  CartListItem,
  RoundedButton,
} from "../components/CheckoutComponents";

const Checkout = () => {
  const [cart, setCart] = useContext(CartContext);
  const navigate = useNavigate();
  const placeholderImage = require("../images/no-image.png");

  let totalPrice = 0;
  cart.length > 0 &&
    cart.forEach((item) => {
      totalPrice += item.price;
    });

  const checkout = () =>
    PurchaseService.checkout(cart).then((result) => {
      const { data } = result;
      if (data.isSuccessful) {
        clearCart();
        navigate("../success", { replace: true });
      }
    });

  const clearCart = () => setCart([]);

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

export default Checkout;
