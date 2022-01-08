import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//in-project imports
import Checkout from "./pages/Checkout";
import Details from "./pages/Details";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import Success from "./pages/Success";
import NavigationBar from "./components/NavigationBar";
import { CartProvider } from "./context/CartContext";

const Router = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="detail/:warehouseId/:vehicleId" element={<Details />} />
          <Route path="cars" element={<Cars />} />
          <Route path="success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default Router;
