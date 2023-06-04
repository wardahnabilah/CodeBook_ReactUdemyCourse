const userId = sessionStorage.getItem("id")
const userToken = sessionStorage.getItem("token")

// Get logged in user data
export async function getUserData() {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`
        }
    }

    const response = await fetch(`http://localhost:8000/600/users/${userId}`, options)
    const data = await response.json()

    return data
}

// Create order
export async function createOrder(cartList, totalPrice, userData) {
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
    
    const response = await fetch(`http://localhost:8000/660/orders`, options)
    const data = await response.json()

    return data
}

// Get user orders
export async function getUserOrders() {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`
        }
    }
    
    const response = await fetch(`http://localhost:8000/660/orders?user.id=${userId}`, options)
    const data = await response.json()

    return data
}