import React, { useRef } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useDocTitle } from '../../hooks'


export function Login() {
  const email = useRef()
  const password = useRef()
  const navigate = useNavigate()

  async function handleLogin(event) {
    event.preventDefault()
    const loginData = {
      email: email.current.value,
      password: password.current.value
    }

    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(loginData)
    })

    const data = await response.json()

    if(data.accessToken) {
      sessionStorage.setItem("token", data.accessToken)
      sessionStorage.setItem("id", data.user.id)

      navigate("/products")
    } else {
      toast.error(data)
    }
  }

  useDocTitle("Login - CodeBook")

  return (
    <section className="w-11/12 py-12 max-w-screen-xl mx-auto">
        <h1 className="mb-12 text-3xl text-center font-semibold dark:font-normal underline underline-offset-8">Login</h1>
        <form onSubmit={handleLogin} className="w-11/12 mx-auto text-lg">
            <div className="my-3 flex flex-col">
                <label className="mb-1" htmlFor="#loginEmail">Email</label>
                <input ref={email} className="pl-3 py-1 text-lg border-2 bg-slate-50 border-neutral-300 focus:outline-blue-700 rounded-lg dark:bg-gray-700" type="text" id="loginEmail" placeholder="Your email" />
            </div>
            <div className="mb-9 my-2 flex flex-col">
                <label className="mb-1" htmlFor="#loginPassword">Password</label>
                <input ref={password} className="pl-3 py-1 text-lg border-2 bg-slate-50 border-neutral-300 focus:outline-blue-700 rounded-lg dark:bg-gray-700" type="password" id="loginPassword" placeholder="Your password" />
            </div>
            <button className="max-sm:w-full px-4 py-2.5 text-xl text-white rounded-lg bg-blue-700 hover:bg-blue-900">Log In</button>
            {/* <button className="max-sm:w-full px-4 py-2.5 text-xl text-white rounded-lg bg-blue-700 hover:bg-blue-900s">Login As Guest</button> */}
        </form>
    </section>
  )
}