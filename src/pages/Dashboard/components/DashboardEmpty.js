import React from 'react'
import { Link } from 'react-router-dom'

export function DashboardEmpty() {
  return (
    <section>
        <div className="bi bi-receipt mb-8 text-8xl text-gray-500 dark:text-gray-300"></div>
        <p className="text-lg">Oops! Your dashboard looks empty!</p>
        <p className="text-lg">Add eBooks to your cart from our store collection.</p>
        <Link to="/products" className="w-[14rem] mt-8 mx-auto px-4 py-2.5 text-xl text-white rounded-lg bg-blue-700 hover:bg-blue-900 block"> Continue Shopping <i className="bi bi-cart"></i></Link>
    </section>
  )
}