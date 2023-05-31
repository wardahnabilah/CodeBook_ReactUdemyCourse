import React from 'react'
import { ProductCard } from '../../../components'
import { useFetch } from '../../../hooks/useFetch'

export function FeaturedEbooks() {
  
  const products = useFetch("http://localhost:8000/featured_products")
  
  return (
    <section className="w-11/12 py-12 max-w-screen-xl mx-auto text-center">
        <h1 className="mb-12 text-3xl font-semibold underline underline-offset-4">Featured eBooks</h1>
        <div className="flex flex-wrap">
            {products.map(product => {
              return <ProductCard 
                        key={product.id}
                        product={product}
                      />
            })}
        </div>
    </section>
  )
}
