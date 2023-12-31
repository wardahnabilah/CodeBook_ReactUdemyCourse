function getSession() {
    const userId = sessionStorage.getItem("id")
    const userToken = sessionStorage.getItem("token")

    return { userId, userToken}
}


// Get logged in user data
export async function getUserData() {
    const { userId, userToken } = getSession()

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`
        }
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${userId}`, options)
    
    if(!response.ok) {
        throw new Error()
      }

    const data = await response.json()

    return data
}

// Create order
export async function createOrder(cartList, totalPrice, userData) {
    const { userToken } = getSession()
    
    const newOrder = {
        products: cartList,
        amount_paid: totalPrice,
        quantity: cartList.length,
        user: {
            id: userData.id,
            name: userData.name,
            email: userData.email
        }
    }
    
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(newOrder)
    }
    
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, options)
    
    if(!response.ok) {
        throw new Error()
    }

    const data = await response.json()

    return data
}

// Get user orders
export async function getUserOrders() {
    const { userId, userToken } = getSession()
    
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`
        }
    }
    
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${userId}`, options)
    
    if(!response.ok) {
        throw new Error()
    }
    
    const data = await response.json()

    return data
}