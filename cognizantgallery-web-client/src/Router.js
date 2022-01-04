import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Custom imports
import Checkout from "./pages/Checkout";
import Details from "./pages/Details";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";

export default function Router() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="detail" element={<Details />} />
        <Route path="cars" element={<Cars />} />
      </Routes>
    </BrowserRouter>
  );
}
