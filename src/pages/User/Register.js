import React, { useState } from 'react'
import { useDocTitle } from '../../hooks'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { register, login } from '../../services'

export function Register() {
  const navigate= useNavigate()
  const [isError, setIsError] = useState(false)

  useDocTitle("Register - CodeBook")
  
  async function handleRegister(event) {
      event.preventDefault()

      const registerData = {
        name: event.target.registerName.value,
        email: event.target.registerEmail.value,
        password: event.target.registerPassword.value
      }

      try {
        const data = await register(registerData)

        if(data.accessToken) {
          login(registerData)
          navigate("/products")
        } else {
          toast.error(data)
        }

        setIsError(false)
      } 
      catch(error) {
        setIsError(true)
      }
  }

  return (
    <section className="w-11/12 py-12 max-w-screen-xl mx-auto">
        <h1 className="mb-12 text-3xl text-center font-semibold dark:font-normal underline underline-offset-8">Register</h1>
        <form onSubmit={handleRegister} className="w-11/12 mx-auto text-lg">
          <div className="my-3 flex flex-col">
                <label className="mb-1" htmlFor="registerName">Name</label>
                <input className="pl-3 py-1 text-lg border-2 bg-slate-50 border-neutral-300 focus:outline-blue-700 rounded-lg dark:bg-gray-700" type="text" name="registerName" id="registerName" placeholder="Your name" />
            </div>
            <div className="my-3 flex flex-col">
                <label className="mb-1" htmlFor="registerEmail">Email</label>
                <input className="pl-3 py-1 text-lg border-2 bg-slate-50 border-neutral-300 focus:outline-blue-700 rounded-lg dark:bg-gray-700" type="text" name="registerEmail" id="registerEmail" placeholder="Your email" />
            </div>
            <div className="mb-9 my-2 flex flex-col">
                <label className="mb-1" htmlFor="registerPassword">Password</label>
                <input className="pl-3 py-1 text-lg border-2 bg-slate-50 border-neutral-300 focus:outline-blue-700 rounded-lg dark:bg-gray-700" type="password" name="registerPassword" id="registerPassword" placeholder="Your Password"/>
            </div>
            <button className="max-sm:w-full px-4 py-2.5 text-xl text-white rounded-lg bg-blue-700 hover:bg-blue-900">Register</button>
        </form>
        {/* {isError && <ServerError />} */}
    </section>
  )
}
