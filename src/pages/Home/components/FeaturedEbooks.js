import React from 'react'
import { ProductCard } from '../../../components'

export function FeaturedEbooks() {
  return (
    <section className="w-11/12 py-12 max-w-screen-xl mx-auto text-center">
        <h1 className="mb-12 text-3xl font-semibold underline underline-offset-4">Featured eBooks</h1>
        <div className="mx-auto lg:flex lg:flex-wrap gap-7 justify-center">
            <ProductCard />
        </div>
    </section>
  )
}
