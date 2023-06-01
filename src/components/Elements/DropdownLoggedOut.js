import React from 'react'
import { Link } from 'react-router-dom'

export function DropdownLoggedOut() {
  return (
    <ul className="w-48 flex flex-col absolute top-[3.75rem] right-4 z-50 bg-white dark:bg-slate-800 rounded-lg shadow shadow-slate-400/90 dark:shadow-slate-200/30 overflow-hidden">
        <Link to="/products" className="px-4 py-3 hover:bg-slate-300 dark:hover:bg-slate-700">All eBooks</Link>
        <Link to="/login" className="px-4 py-3 hover:bg-slate-300 dark:hover:bg-slate-700">Login</Link>
        <Link to="/register" className="px-4 py-3 hover:bg-slate-300 dark:hover:bg-slate-700">Register</Link>
    </ul>
  )
}
