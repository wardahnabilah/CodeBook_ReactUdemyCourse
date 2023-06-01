import React from 'react'

export function DropdownLoggedOut() {
  return (
    <ul className="w-48 px-4 absolute top-[3.75rem] right-4 z-50 bg-white dark:bg-slate-800 rounded-lg shadow shadow-slate-400/90 dark:shadow-slate-200/30">
        <li className="my-3">All eBooks</li>
        <li className="my-3">Login</li>
        <li className="my-3">Register</li>
    </ul>
  )
}
