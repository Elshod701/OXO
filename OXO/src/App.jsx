import React from "react";
import { Route, Routes } from "react-router-dom";
// pages
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Filter from "./pages/filter/filter";
import Product_detail from "./pages/product-detail/product_detail";
import Create_product from "./pages/create-product/create_product";
import Login from "./pages/login/login";
import UseScroll from "./hooks/useScrollTop";
// layout
import Layout from "./layouts/main-layout/layout";

const App = () => {
  return (
    <>
      <UseScroll />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="filter/:category" element={<Filter />} />
          <Route path="product-detail" element={<Product_detail />} />
          <Route path="login/" element={<Login />}>
            <Route index element={<Profile />} />
            <Route path="create-product" element={<Create_product />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
