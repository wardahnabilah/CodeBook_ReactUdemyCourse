import React from 'react'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="w-11/12 py-12 max-w-screen-xl mx-auto text-center lg:text-left flex flex-col md:flex-row gap-16 items-center justify-center">
        <div className="md:basis-7/12 max-w-xl">
            <h1 className="mb-4 text-[3.3rem] font-bold">The Ultimate eBook Store</h1>
            <p className="mb-11 text-xl">CodeBook is the world's most popular and authoritative source for computer science ebooks. 
                Find ratings and access to the newest books digitally.
            </p>
            <Link href="/products" type="button" className="px-4 py-2.5 text-xl text-white rounded-lg bg-blue-700 hover:bg-blue-900">Explore eBooks</Link>
        </div>
        <div className="md:basis-5/12">
            <img className="rounded-xl" src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60" alt="" />
        </div>
    </section>
  )
}
