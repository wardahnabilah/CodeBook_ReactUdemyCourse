import React from 'react'
import { OrderItem } from './OrderItem'

export function DashboardCard() {
  return (
        <div className="px-4 py-2 border">
            <div className="flex justify-between">
                <div>Order Id: 3</div>
                <div>Total: $66</div>
            </div>
            <div>
                <OrderItem />
            </div>
        </div>
  )
}
