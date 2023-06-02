import React from 'react'
import { Link } from 'react-router-dom'

export function DropdownLoggedIn() {
  
  function handleLogout() {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("id")
  }
  
  return (
    <ul className="w-48 flex flex-col absolute top-[3.75rem] right-4 z-50 bg-white dark:bg-slate-800 rounded-lg shadow shadow-slate-400/90 dark:shadow-slate-200/30 overflow-hidden">
        <div className="px-4 py-3 hover:bg-slate-300 dark:hover:bg-slate-700">example@mail.com</div>
        <Link to="/products" className="px-4 py-3 border-t hover:bg-slate-300 dark:hover:bg-slate-700">All eBooks</Link>
        <Link to="/dashboard" className="px-4 py-3 border-b hover:bg-slate-300 dark:hover:bg-slate-700">Dashboard</Link>
        <Link to="/" onClick={handleLogout} className="px-4 py-3 hover:bg-slate-300 dark:hover:bg-slate-700">Log out</Link>
    </ul>
  )
}
