import React from 'react'
import { Rating } from './Rating'
import { Link } from 'react-router-dom'

export function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="w-[23rem] mx-auto mb-12 shadow-2xl rounded-xl overflow-hidden">
      <div className="relative h-[16rem]">
        <img className="w-full h-full object-cover" src={product.image_local} alt={product.name} />
        {product.best_seller && <div className="absolute top-4 left-4 px-2 py-1 text-lg text-white bg-orange-500 rounded-lg">Best Seller</div>}
      </div>
      <div className="p-4 text-left flex flex-col gap-2.5">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-lg text-neutral-500">{product.overview}</p>
        <div className="flex gap-1.5">
          <Rating rating={product.rating}/>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-3xl">${product.price}</span>
          <button className="px-2 py-1.5 text-white rounded-lg bg-blue-700">Add To Cart +</button>
        </div>
      </div>
    </Link>
  )
}
