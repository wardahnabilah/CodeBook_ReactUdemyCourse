import React from 'react'
import { Rating } from '../../components/Products/Rating'
import { useParams } from 'react-router-dom'
import { useFetch, useDocTitle } from '../../hooks'

export function ProductDetail() {
  // Get the product id
  const id = useParams().id

  // Get the product detail
  const product = useFetch(`http://localhost:8000/products/${id}`)
  
  // Document title
  useDocTitle(`${product.name} - CodeBook`)

  return (
    <section className="w-11/12 py-12 max-w-screen-xl mx-auto text-center lg:text-left">
        <h1 className="mb-4 text-4xl text-center font-bold">{product.name}</h1>
        <p className="text-lg text-center mb-6 lg:mb-14">{product.overview}</p>
        <div className="flex flex-col gap-12 lg:flex-row lg:flex-auto">
          <div className="relative basis-1/2 rounded-lg overflow-hidden shadow-lg">
            <img src={product.poster} alt={product.name} />
            {product.best_seller && <div className="absolute top-6 left-6 px-2 py-1 text-lg text-white bg-orange-500 rounded-lg">Best Seller</div>}
          </div>
          <div className="basis-1/2 flex flex-col gap-4 text-left">
              <p className="text-4xl font-bold">${product.price}</p>
              <div className="flex gap-1.5">
                <Rating rating={product.rating}/>
              </div>
              <div className="flex gap-2">
                {product.best_seller && <div className="px-3 py-1 rounded-xl border-[1px] bg-amber-50 text-amber-500 uppercase font-bold">Best Seller</div>}
                {product.in_stock && <div className="px-3 py-1 rounded-xl border-[1px]  bg-green-50 text-green-600 uppercase font-bold">Instock</div>}
                {!product.in_stock && <div className="px-3 py-1 rounded-xl border-[1px]  bg-red-50 text-red-600 uppercase font-bold">Out of Stock</div>}
                <div className="px-3 py-1 rounded-xl border-[1px] bg-blue-50 text-blue-600 uppercase font-bold">{product.size} MB</div>
              </div>
              <button className="w-40 my-3 py-2 text-xl text-white rounded-lg bg-blue-700 hover:bg-blue-900">Add To Cart +</button>
              <p className="text-lg">{product.long_description}</p>
          </div>
        </div>
    </section>
  )
}
