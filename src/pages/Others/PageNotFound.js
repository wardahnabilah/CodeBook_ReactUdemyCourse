import React from 'react'
import PageNotFoundImg from '../../assets/page-not-found.png'
import { Link } from 'react-router-dom'
import { useDocTitle } from '../../hooks'

export function PageNotFound() {
  
    useDocTitle("Page Not Found")

    return (
    <main className="w-11/12 py-12 max-w-screen-xl mx-auto text-center lg:text-left flex flex-col gap-12 items-center justify-center">
        <img src={PageNotFoundImg} alt="page not found" />
        <Link to="/" className="px-4 py-2.5 text-xl text-white rounded-lg bg-blue-700 hover:bg-blue-900 block">Back to Home</Link>
    </main>
  )
}
