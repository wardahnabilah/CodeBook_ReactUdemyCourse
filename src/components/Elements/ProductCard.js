import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Rating } from './Rating'
import { useCartContext } from '../../context'

export function ProductCard({ product }) {
  const { addItem, cartList, removeItem } = useCartContext()
  const [isInCart, setIsInCart] = useState(false)

  useEffect(()=>{
    const productInCart = cartList.find(cartListProduct => cartListProduct.id === product.id )
  
    if(productInCart) {
      setIsInCart(true)
    } else {
      setIsInCart(false)
    }

  },[cartList, product.id]) 
  
  return (
    <div className="w-[23rem] mx-auto mb-12 shadow-2xl rounded-xl overflow-hidden dark:bg-slate-800">
      <Link to={`/product/${product.id}`} className="relative h-[16rem] block">
        <img className="w-full h-full object-cover" src={product.image_local} alt={product.name} />
        {product.best_seller && <div className="absolute top-4 left-4 px-2 py-1 text-lg text-white bg-orange-500 rounded-lg">Best Seller</div>}
      </Link>
      <div className="p-4 text-left flex flex-col gap-2.5">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-lg text-neutral-500">{product.overview}</p>
        <div className="flex gap-1.5">
          <Rating rating={product.rating}/>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-3xl">${product.price}</span>
          {
            // If out of stock, show 'out of stock' button
            !product.in_stock ? <button className="px-2 py-1.5 text-gray-300 rounded-lg bg-gray-500" disabled>Out of Stock</button> :
            // If in stock, show 'add item' or 'remove button'
            (isInCart ? <button onClick={()=>{removeItem(product)}} className="px-2 py-1.5 text-white rounded-lg bg-red-700 hover:bg-red-900">Remove Item <i className="bi bi-trash text-sm"></i></button> :
                        <button onClick={()=>{addItem(product)}} className="px-2 py-1.5 text-white rounded-lg bg-blue-700 hover:bg-blue-900">Add To Cart +</button>)
          }
        </div>
      </div>
    </div>
  )
}
