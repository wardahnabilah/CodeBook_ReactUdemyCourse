import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useDocTitle } from '../../hooks'
import { login } from '../../services'
import { ErrorMessage } from '../../components'

export function Login() {
  const email = useRef()
  const password = useRef()
  const navigate = useNavigate()
  const [isError, setIsError] = useState(false)

  async function handleLogin(event) {
    event.preventDefault()
  
    try {
      const loginData = {
        email: email.current.value,
        password: password.current.value
      }
  
      const data = await login(loginData)
  
      if(data.accessToken) {
        navigate("/products")
      } else {
        toast.error(data)  
      }
      
      setIsError(false)
    } 
    catch {
      setIsError(true)
    }
  }

  useDocTitle("Login - CodeBook")

  return (
    <section className="w-11/12 py-12 max-w-screen-xl mx-auto">
        <h1 className="mb-12 text-3xl text-center font-semibold dark:font-normal underline underline-offset-8">Login</h1>
        {isError && <ErrorMessage />}
        <form onSubmit={handleLogin} className="w-11/12 mx-auto text-lg">
            <div className="my-3 flex flex-col">
                <label className="mb-1" htmlFor="loginEmail">Email</label>
                <input ref={email} className="pl-3 py-1 text-lg border-2 bg-slate-50 border-neutral-300 focus:outline-blue-700 rounded-lg dark:bg-gray-700" type="text" id="loginEmail" placeholder="Your email" />
            </div>
            <div className="mb-9 my-2 flex flex-col">
                <label className="mb-1" htmlFor="loginPassword">Password</label>
                <input ref={password} className="pl-3 py-1 text-lg border-2 bg-slate-50 border-neutral-300 focus:outline-blue-700 rounded-lg dark:bg-gray-700" type="password" id="loginPassword" placeholder="Your password" />
            </div>
            <button className="max-sm:w-full px-4 py-2.5 text-xl text-white rounded-lg bg-blue-700 hover:bg-blue-900">Log In</button>
            {/* <button className="max-sm:w-full px-4 py-2.5 text-xl text-white rounded-lg bg-blue-700 hover:bg-blue-900s">Login As Guest</button> */}
        </form>
    </section>
  )
}