import React from 'react'

export function OrderItem({name, price, image}) {
  return (
    <div className="h-24 mt-8 pb-4 flex gap-6">
        <img className="h-full rounded-lg shadow-lg" src={image} alt={name} />
        <div className="mr-auto text-left">
            <p className="text-lg">{name}</p>
            <p className="text-xl pt-2">${price}</p>
        </div>
    </div>
  )
}
