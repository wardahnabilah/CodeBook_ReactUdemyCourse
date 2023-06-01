import React from 'react'

export function Rating({rating}) {
    let stars = [false, false, false, false, false]

    for(let i = 0; i < rating; i++) {
        stars[i] = true
    }

    return (
        <>
            {stars.map((star, index) => star === true ? <i key={index} className="bi bi-star-fill text-xl text-yellow-500"></i> : <i key={index} className="bi bi-star text-xl text-yellow-500"></i>)}
        </>
  )
}
