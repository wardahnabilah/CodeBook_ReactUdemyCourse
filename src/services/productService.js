// Get all products
export async function getProducts(keyword) {
    const response = await fetch(`${process.env.REACT_APP_HOST}/products?name_like=${keyword ? keyword : ''}`)
    const data = await response.json()

    return data
}

// Get product detail
export async function getProduct(id) {
    const response = await fetch(`${process.env.REACT_APP_HOST}/products/${id}`)
    const data = await response.json()

    return data
}

// Get featured products
export async function getFeaturedProduct() {
  const response = await fetch(`${process.env.REACT_APP_HOST}/featured_products`)
  const data = await response.json()

  return data
}