import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, DropdownLoggedOut, DropdownLoggedIn } from '../../components'
import { useCartContext } from '../../context'
import Logo from '../../assets/logo.png'

export function Header() {
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("dark")) || false)
    const [openSearch, setOpenSearch] = useState(false)
    const [openUser, setOpenUser] = useState(false)
    const isLoggedIn = sessionStorage.getItem("token")
    const { cartList } = useCartContext()

    useEffect(()=>{
        if(isDark) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("dark", true)
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("dark", false)
        }
    }, [isDark])

    function closeOtherMenu() {
        setOpenSearch(false)
        setOpenUser(false)
    }

    function handleDarkMode() {
        setIsDark(!isDark)
        closeOtherMenu()
    }

    function handleSearch() {
        setOpenSearch(!openSearch)
        setOpenUser(false)
    }

    function handleUserMenu() {
        setOpenUser(!openUser)
        setOpenSearch(false)
    }
  
    return (
    <header>
        <nav className="w-11/12 max-w-screen-xl mx-auto py-2 flex justify-between items-center border-b-2">
            <Link to="/" className="flex items-center">
                <img className="w-12" src={Logo} alt="code book logo" />
                <span className="text-2xl font-bold">CodeBook</span>
            </Link>
            <div className="flex gap-4 items-center">
                {isDark ? <i onClick={handleDarkMode} className="bi bi-brightness-low-fill text-4xl hover:text-neutral-600 dark:hover:text-cyan-500 hover:cursor-pointer"></i> : 
                          <i onClick={handleDarkMode} className={"bi bi-moon-stars-fill text-2xl hover:text-neutral-600 dark:hover:text-cyan-500 hover:cursor-pointer"}></i>}
                <i onClick={handleSearch} className="bi bi-search text-2xl hover:text-neutral-600 dark:hover:text-cyan-500 hover:cursor-pointer"></i>
                <Link to="/cart" onClick={closeOtherMenu} className="relative">
                    <i className="bi bi-cart-fill text-2xl hover:text-neutral-600 dark:hover:text-cyan-500 hover:cursor-pointer"></i>
                    <div className="w-4 h-4 absolute -top-1 -right-1.5 text-xs text-slate-200 text-center bg-red-500 rounded-full">{cartList.length}</div>
                </Link>
                <i onClick={handleUserMenu} className="bi bi-person-circle text-2xl hover:text-neutral-600 dark:hover:text-cyan-500 hover:cursor-pointer"></i>
            </div>
        </nav>
        {openSearch && <Search setOpenSearch={setOpenSearch}/>}
        {openUser && (isLoggedIn ? <DropdownLoggedIn setOpenUser={setOpenUser} /> : <DropdownLoggedOut setOpenUser={setOpenUser} />)}
    </header>
  )
}
