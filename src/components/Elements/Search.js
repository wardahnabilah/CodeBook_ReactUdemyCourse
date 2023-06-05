import { useNavigate } from 'react-router-dom'

export function Search({ setOpenSearch }) {
    const navigate = useNavigate()
  
    function handleSubmit(event) {
        event.preventDefault()
        const inputValue = event.target.search.value

        setOpenSearch(false)

        navigate(`/products?q=${inputValue}`)
    }

    return (
    <div className="w-11/12 max-w-screen-xl mx-auto my-4 flex justify-between items-center">
        <form onSubmit={handleSubmit} className="w-full px-2 flex items-center gap-4">
            <input className="w-full pl-4 py-2 text-lg border-2 border-gray-500  focus:outline-blue-700 rounded-lg dark:bg-gray-700" placeholder="Search" name="search" type="text" autoComplete="off"/>
            <button type="submit"><i className="bi bi-search text-xl"></i></button>
        </form>
    </div>
  )
}
