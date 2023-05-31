import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Products } from "../pages";
import { ProductDetail } from '../pages/Products/ProductDetail';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>  
      <Route path="/products" element={<Products />}></Route>
      <Route path="/product/:id" element={<ProductDetail />}></Route>
    </Routes>
  )
}
