import React from 'react'
import { Hero } from './components/Hero'
import { FeaturedEbooks } from './components/FeaturedEbooks'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'

export function Home() {
  return (
    <>
        <Hero />
        <FeaturedEbooks />
        <Testimonials />
        <Faq />
    </>
  )
}
