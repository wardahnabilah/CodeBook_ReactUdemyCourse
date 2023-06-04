import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Login, Products, Register, Cart, ProductDetail, Order, Dashboard, PageNotFound } from "../pages";
import { ProtectedRoute } from './ProtectedRoute';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>  
      <Route path="/products" element={<Products />}></Route>
      <Route path="/product/:id" element={<ProductDetail />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>}></Route>
      <Route path="/order-summary" element={<ProtectedRoute><Order /></ProtectedRoute>}></Route>
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  )
}
