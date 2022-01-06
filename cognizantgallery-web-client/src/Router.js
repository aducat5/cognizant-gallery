import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Custom imports
import Checkout from "./pages/Checkout";
import Details from "./pages/Details";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import GlobalState from "./context/GlobalState";

export default function Router() {
  return (
    <GlobalState>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="detail/:warehouseId/:vehicleId" element={<Details />} />
          <Route path="cars" element={<Cars />} />
        </Routes>
      </BrowserRouter>
    </GlobalState>
  );
}
