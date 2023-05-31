import { ProductCard } from '../../components'
import { FilterBar } from './components/FilterBar'
import { useFetch } from '../../hooks/useFetch'

export function Products() {
    
    const products = useFetch("http://localhost:8000/products")

    return (
    <section className="w-11/12 py-12 max-w-screen-xl mx-auto text-center lg:text-left"> 
        <div className="mb-12 flex justify-between items-center">
            <h1 className="text-3xl font-semibold">All eBooks ({products.length})</h1>
            <button className="bi bi-funnel-fill text-3xl px-4"></button>
        </div>
        <div className="flex flex-wrap">
            {products.map(product => {
                return <ProductCard 
                            key={product.id}
                            product={product}
                        />
            })}
        </div>
        <FilterBar />
    </section>
  )
}
