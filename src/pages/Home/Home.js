import React from 'react'
import { Hero } from './components/Hero'
import { FeaturedEbooks } from './components/FeaturedEbooks'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { useDocTitle } from '../../hooks/useDocTitle'

export function Home() {
  // Document title
  useDocTitle("CodeBook - Home")
  
  return (
    <>
        <Hero />
        <FeaturedEbooks />
        <Testimonials />
        <Faq />
    </>
  )
}
