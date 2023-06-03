import React from 'react'

export function DashboardEmpty() {
  return (
    <section>
        <div className="bi bi-receipt mb-8 text-8xl text-gray-500 dark:text-gray-300"></div>
        <p className="text-lg">Oops! Your dashboard looks empty!</p>
        <p className="text-lg">Add eBooks to your cart from our store collection.</p>
        <button className="mt-8 px-4 py-2.5 text-xl text-white rounded-lg bg-blue-700 hover:bg-blue-900"> Continue Shopping <i className="bi bi-cart"></i></button>
    </section>
  )
}