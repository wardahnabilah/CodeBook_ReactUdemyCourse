// Register
export async function register(registerData) {
    const response = await fetch(`${process.env.REACT_APP_HOST}/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(registerData)
      })

    if(!response.ok) {
        throw new Error()
    }

    const data = await response.json()

    return data
}

// Login
export async function login(loginData) {
    const response = await fetch(`${process.env.REACT_APP_HOST}/login`, {
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