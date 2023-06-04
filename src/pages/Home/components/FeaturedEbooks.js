import React, { useEffect, useState } from 'react'
import { ErrorMessage, ProductCard } from '../../../components'
import { getFeaturedProduct } from '../../../services'

export function FeaturedEbooks() {
  const [products, setProducts] = useState([])
  const [isError, setIsError] = useState(false)

  useEffect(()=>{
    async function featuredProducts() {
      try {
        const data = await getFeaturedProduct()
        setProducts(data)

        setIsError(false)
      } 
      catch {
          setIsError(true)
      }
    }

    featuredProducts()
  }, [])
  
  return (
    <section className="w-11/12 py-12 max-w-screen-xl mx-auto text-center">
        <h1 className="mb-12 text-3xl font-semibold underline underline-offset-4">Featured eBooks</h1>
        <div className="flex flex-wrap">
            {isError ? <ErrorMessage /> : products.map(product => {
                                              return <ProductCard 
                                                        key={product.id}
                                                        product={product}
                                                      />
            })}
        </div>
    </section>
  )
}
