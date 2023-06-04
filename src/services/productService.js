// Get all products
export async function getProducts(keyword) {
    const response = await fetch(`http://localhost:8000/products?name_like=${keyword ? keyword : ''}`)
    
    if(!response.ok) {
      throw new Error("Error")
    }
    
    const data = await response.json()

    return data
}

// Get product detail
export async function getProduct(id) {
    const response = await fetch(`http://localhost:8000/products/${id}`)
    
    if(!response.ok) {
      throw new Error("Error")
    }
    
    const data = await response.json()

    return data
}

// Get featured products
export async function getFeaturedProduct() {
  const response = await fetch("http://localhost:8000/featured_products")
  
  if(!response.ok) {
    throw new Error("Error")
  }
  
  const data = await response.json()

  return data
}