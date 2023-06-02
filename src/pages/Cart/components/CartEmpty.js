import React from 'react'

export function CartEmpty() {
  return (
    <section className="w-11/12 py-12 max-w-screen-xl mx-auto my-20 text-center border">
        <div className="bi bi-cart mb-8 text-8xl text-gray-500 dark:text-gray-300"></div>
        <p className="text-lg">Oops! Your cart looks empty!</p>
        <p className="text-lg">Add eBooks to your cart from our store collection.</p>
        <button className="mt-8 px-4 py-2.5 text-xl text-white rounded-lg bg-blue-700 hover:bg-blue-900"> Continue Shopping <i className="bi bi-cart"></i></button>
    </section>
  )
}
