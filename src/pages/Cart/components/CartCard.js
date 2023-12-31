import React from 'react'
import { useCartContext } from '../../../context'

export function CartCard({ product }) {
  const { removeItem } = useCartContext()
  
  return (
    <div className="h-24 mt-8 pb-4 border-b flex gap-6">
        <img className="h-full rounded-lg shadow-lg" src={product.poster} alt={product.name} />
        <div className="mr-auto text-left">
            <p className="text-lg">{product.name}</p>
            <p onClick={()=>{removeItem(product)}} className="font-bold text-red-600 hover:cursor-pointer hover:text-red-800">Remove</p>
        </div>
        <div className="text-xl pt-2">${product.price}</div>
    </div>
  )
}
