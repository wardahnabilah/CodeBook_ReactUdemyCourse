import React from 'react'
import { CartCard } from './CartCard'

export function CartList() {
  return (
    <section className="w-11/12 md:w-8/12 py-12 max-w-screen-xl mx-auto text-center">
        <h1 className="mb-12 text-3xl font-semibold underline underline-offset-[.6rem]">My Cart (1)</h1>
        <div>
            <CartCard />
        </div>
        <div className="mt-8 flex justify-between">
            <p className="text-xl font-bold">Total Amount:</p>
            <p className="text-xl font-bold">$58</p>
        </div>
        <button className="block mt-12 ml-auto px-4 py-2.5 text-lg text-white rounded-lg bg-blue-700 hover:bg-blue-900 uppercase">PLACE ORDER <i className="bi bi-arrow-right"></i></button>
    </section>
  )
}
