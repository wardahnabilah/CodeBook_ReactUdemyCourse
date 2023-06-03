import React from 'react'
import { Link } from 'react-router-dom'

export default function OrderFail() {
  return (
    <section className="w-11/12 py-12 max-w-screen-xl mx-auto my-20 text-center border">
        <div className="bi bi-exclamation-circle mb-8 text-8xl text-red-600 dark:text-red-400"></div>
        <p className="text-lg">Payment failed, please try again!</p>
        <p className="text-lg">Your order is not confirmed</p>
        <p className="text-lg">Contact support@codebook.com for further information</p>
        <Link to="/cart" className="w-[16rem] mt-8 mx-auto px-4 py-2.5 text-xl text-white rounded-lg bg-blue-700 hover:bg-blue-900 block"> Check Cart Again <i className="bi bi-cart"></i></Link>
    </section>
  )
}
