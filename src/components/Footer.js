import React from 'react'

export function Footer() {
    const date = new Date()
    const year = date.getFullYear()

    return (
    <div className="w-11/12 max-w-screen-xl mx-auto py-2 border-t-2">
        <p className="text-center">Copyright {year} CodeBook. All rights reserved.</p>
    </div>
  )
}
