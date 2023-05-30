import React from 'react'
import { Hero } from './components/Hero'
import { FeaturedEbooks } from './components/FeaturedEbooks'
import { Testimonials } from './components/Testimonials'

export function Home() {
  return (
    <>
        <Hero />
        <FeaturedEbooks />
        <Testimonials />
    </>
  )
}
