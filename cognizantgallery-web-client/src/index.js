import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//some modern styling
import { ChakraProvider } from "@chakra-ui/react";
//context includes
import { CartProvider } from "./context/cart-context";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
