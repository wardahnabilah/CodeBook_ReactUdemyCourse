import React from 'react'
import { Link } from 'react-router-dom'

export function OrderSuccess({orderDetail}) {
  return (
    <section className="w-11/12 py-12 max-w-screen-xl mx-auto my-20 text-center border">
        <div className="bi bi-check-circle mb-8 text-8xl text-green-600 dark:text-green-400"></div>
        <p className="text-lg">Thank you for the order!</p>
        <p className="text-lg">Your Order ID: {orderDetail.id}</p>
        <p className="text-lg">Your order is confirmed.</p>
        <p className="text-lg">Please check your email ({orderDetail.user.email}) for the eBook.</p>
        <p className="text-lg">Payment ID: xyz_123456789</p>
        <Link to="/products" className="w-[16rem] mt-8 mx-auto px-4 py-2.5 text-xl text-white rounded-lg bg-blue-700 hover:bg-blue-900 block"> Continue Shopping <i className="bi bi-cart"></i></Link>
    </section>
  )
}