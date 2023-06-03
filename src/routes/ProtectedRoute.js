import React from 'react'
import { Login } from '../pages'

export function ProtectedRoute({ children }) {
  const hasToken = sessionStorage.getItem("token")
  
  return (
    <>
      {hasToken ? children : <Login />}
    </>
  )
}
