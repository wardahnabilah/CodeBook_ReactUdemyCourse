import React from 'react'
import { useDocTitle } from '../../hooks'

export function Login() {
  
  useDocTitle("Login - CodeBook")

  return (
    <section className="w-11/12 py-12 max-w-screen-xl mx-auto">
        <h1 className="mb-12 text-3xl text-center font-semibold dark:font-normal underline underline-offset-8">Login</h1>
        <form className="w-11/12 mx-auto text-lg">
            <div className="my-3 flex flex-col">
                <label className="mb-1" htmlFor="#loginEmail">Your email</label>
                <input className="pl-3 py-1 text-lg border-2 bg-slate-50 border-neutral-300 focus:outline-blue-700 rounded-lg dark:bg-gray-700" type="text" id="loginEmail" placeholder="shubham@example.com" />
            </div>
            <div className="mb-9 my-2 flex flex-col">
                <label className="mb-1" htmlFor="#loginPassword">Your password</label>
                <input className="pl-3 py-1 text-lg border-2 bg-slate-50 border-neutral-300 focus:outline-blue-700 rounded-lg dark:bg-gray-700" type="text" id="loginPassword" />
            </div>
            <button className="max-sm:w-full px-4 py-2.5 text-xl text-white rounded-lg bg-blue-700 hover:bg-blue-900">Log In</button>
            {/* <button className="max-sm:w-full px-4 py-2.5 text-xl text-white rounded-lg bg-blue-700 hover:bg-blue-900s">Login As Guest</button> */}
        </form>
    </section>
  )
}
