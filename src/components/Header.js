import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header>
        <div className="w-11/12 max-w-screen-xl mx-auto py-2 flex justify-between items-center border-b-2">
            <Link to="/" className="flex items-center">
                <img className="w-12" src={Logo} alt="code book logo" />
                <span className="text-2xl font-bold">CodeBook</span>
            </Link>
            <div className="flex gap-4">
                <i className="bi bi-moon-stars-fill text-2xl hover:text-neutral-600 hover:cursor-pointer"></i>
                <i className="bi bi-search text-2xl hover:text-neutral-600 hover:cursor-pointer"></i>
                <Link to="/cart" className="relative">
                    <i className="bi bi-cart-fill text-2xl hover:text-neutral-600 hover:cursor-pointer"></i>
                    <div className="w-4 h-4 absolute -top-1 -right-1.5 text-xs text-slate-200 text-center bg-red-500 rounded-full">3</div>
                </Link>
                <i className="bi bi-person-circle text-2xl hover:text-neutral-600 hover:cursor-pointer"></i>
            </div>
        </div>
    </header>
  )
}
