import React from 'react'

// Register
export async function register(registerData) {
    const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(registerData)
      })
      const data = await response.json()

      return data
}

// Login
export async function login(loginData) {
    const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(loginData)
      })
  
    const data = await response.json()

    if(data.accessToken) {
        sessionStorage.setItem("token", data.accessToken)
        sessionStorage.setItem("id", data.user.id)
    } 

    return data
}

// Logout
export function logout() {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("id")
}