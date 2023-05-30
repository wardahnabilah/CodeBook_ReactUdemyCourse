import React from 'react'

export function ProductCard() {
  return (
    <div className="w-[23rem] mx-auto mb-12 shadow-2xl rounded-xl overflow-hidden">
      <div>
        <img src="/assets/images/10001.avif" alt="" />
      </div>
      <div className="p-4 text-left flex flex-col gap-2.5">
        <h1 className="text-2xl font-bold">The Complete Guide to Backend Development</h1>
        <p className="text-lg text-neutral-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.</p>
        <div className="text-xl text-yellow-500 flex gap-1.5 ">
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star"></i>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-3xl">$99</span>
          <button className="px-2 py-1.5 text-white rounded-lg bg-blue-700">Add To Cart +</button>
        </div>
      </div>
    </div>
  )
}
