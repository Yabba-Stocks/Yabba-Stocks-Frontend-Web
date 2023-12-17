
import React from "react";
import { Routes, Route } from "react-router-dom";
import Indexed from "./Index/Indexed";
import ProductDetails from "./Pages/Product/ProductDetails";
import Cart from "./Pages/Cart/Cart";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Indexed />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default App;
