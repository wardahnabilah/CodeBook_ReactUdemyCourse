import React from 'react'

export function CartCard() {
  return (
    <div className="h-24 mt-8 pb-4 border-b flex gap-6">
        <img className="h-full rounded-lg shadow-lg" src="/assets/images/10001.avif" alt="" />
        <div className="mr-auto text-left">
            <p className="text-lg">The Future of Design Systems</p>
            <p className="text-red-600">Remove</p>
        </div>
        <div className="text-xl pt-2">$29</div>
    </div>
  )
}
