import React from 'react'
import { OrderItem } from './OrderItem'

export function DashboardCard({product}) {
    return (
        <div className="px-4 py-2 border">
            <div className="flex justify-between font-bold">
                <div>Order Id: {product.id}</div>
                <div>Total: ${product.amount_paid}</div>
            </div>
            <div>
                {product.products.map((item, index) => {
                    return <OrderItem 
                                key={index}
                                name={item.name}
                                price={item.price}
                                image={item.poster}
                            />
                })}
            </div>
        </div>
  )
}
