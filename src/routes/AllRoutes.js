import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Products } from "../pages";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>  
      <Route path="/products" element={<Products />}></Route>
    </Routes>
  )
}
