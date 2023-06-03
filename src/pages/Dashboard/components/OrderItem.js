import React from 'react'

export function OrderItem() {
  return (
    <div className="h-24 mt-8 pb-4 flex gap-6">
        <img className="h-full rounded-lg shadow-lg" src="/assets/images/10001.avif" alt="" />
        <div className="mr-auto text-left">
            <p className="text-lg">Basics To Advanced In React</p>
            <p className="text-xl pt-2">$29</p>
        </div>
    </div>
  )
}
