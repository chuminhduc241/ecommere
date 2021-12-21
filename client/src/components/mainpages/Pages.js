import React from "react";
import { Routes, Route } from "react-router-dom";

import Products from "./products/Products";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Cart from "./cart/Cart";
import NotFound from "./utils/NotFound/NotFound";
import DetailProduct from "./detailProduct/DetailProduct";
import Categories from "../mainpages/categories/Categories";
import CreateProduct from "./createProduct/CreateProduct";
const Pages = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Products />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/register" exact element={<Register />} />
      <Route path="/cart" exact element={<Cart />} />
      <Route path="/category" exact element={<Categories />} />
      <Route path="/create_product" exact element={<CreateProduct />} />
      <Route path="/create_product/:id" exact element={<CreateProduct />} />
      <Route path="/detail/:id" exact element={<DetailProduct />} />
      <Route path="*" exact element={<NotFound />} />
    </Routes>
  );
};

export default Pages;
