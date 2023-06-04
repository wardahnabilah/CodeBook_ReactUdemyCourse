import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFetch } from '../../../hooks'
import { useCartContext } from '../../../context'

export function Checkout({ totalPrice, setPlaceOrder }) {
    const { clearCart, cartList } = useCartContext()
    const userId = sessionStorage.getItem("id")
    const userToken = sessionStorage.getItem("token") 
    const navigate = useNavigate()

    const userData = useFetch(`http://localhost:8000/600/users/${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`
        }
    })

    async function handleOrder(event) {
        event.preventDefault()

        try {
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
            
            const response = await fetch(`http://localhost:8000/660/orders`, {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json",
                                                Authorization: `Bearer ${userToken}`,
                                            },
                                            body: JSON.stringify(newOrder)
                                        })
            const data = await response.json()
            console.log(data);
    
            clearCart()
            navigate("/order-summary", {state: {data: data, status: true}})
        } catch {
            navigate("/order-summary", {state: {status: false}})
        }

    }

    return (
     <>
        <div className="fixed inset-0 w-screen h-screen bg-slate-500 dark:bg-slate-900 opacity-70 dark:opacity-90"></div>
        <div className="w-11/12 absolute inset-0 max-w-[24rem] max-h-[37rem] mx-auto my-auto p-4 bg-white dark:bg-slate-800 opacity-100 rounded-lg shadow shadow-slate-400/90 dark:shadow-slate-200/30">
            <div className="flex justify-between items-center">
                <div className="text-xl"><i className="bi bi-credit-card mr-2"></i>CARD PAYMENT</div>
                <i onClick={()=>{setPlaceOrder(false)}} className="bi bi-x text-2xl cursor-pointer"></i>
            </div>
            <form onSubmit={handleOrder} className="text-left">
                <div className="my-4 flex flex-col">
                    <label className="mb-1" htmlFor="namePayment">Name</label>
                    <input className="pl-3 py-1 border-[.11rem] bg-slate-200 border-neutral-300 focus:outline-blue-700 rounded-lg dark:bg-gray-700 cursor-not-allowed" type="text" id="namePayment" value={userData.name || "-"} disabled />
                </div>
                <div className="my-4 flex flex-col">
                    <label className="mb-1" htmlFor="emailPayment">Email</label>
                    <input className="pl-3 py-1 border-[.11rem] bg-slate-200 border-neutral-300 focus:outline-blue-700 rounded-lg dark:bg-gray-700 cursor-not-allowed" type="text" id="emailPayment" value={userData.email || "-"} disabled />
                </div>
                <div className="my-4 flex flex-col">
                    <label className="mb-1" htmlFor="cardnumberPayment">Card Number</label>
                    <input className="pl-3 py-1 border-[.11rem] bg-slate-200 border-neutral-300 focus:outline-blue-700 rounded-lg dark:bg-gray-700 cursor-not-allowed" type="text" id="cardnumberPayment" value="3123666634568912" disabled />
                </div>
                <div className="my-4 flex flex-col">
                    <label className="mb-1">Expire Date</label>
                    <div className="flex gap-4">
                        <input className="w-[4rem] pl-3 py-1 border-[.11rem] bg-slate-200 border-neutral-300 focus:outline-blue-700 rounded-lg dark:bg-gray-700 cursor-not-allowed" type="text" name="expirePayment" value="05" disabled />
                        <input className="w-[4rem] pl-3 py-1 border-[.11rem] bg-slate-200 border-neutral-300 focus:outline-blue-700 rounded-lg dark:bg-gray-700 cursor-not-allowed" type="text" name="expirePayment" value="28" disabled />
                    </div>    
                </div>
                <div className="my-4 flex flex-col">
                    <label className="mb-1" htmlFor="cardnumberPayment">Security Code</label>
                    <input className="pl-3 py-1 border-[.11rem] bg-slate-200 border-neutral-300 focus:outline-blue-700 rounded-lg dark:bg-gray-700 cursor-not-allowed" type="text" id="securityPayment" value="789" disabled />
                </div>
                <div className="py-2 text-3xl text-center text-green-500 font-bold">${totalPrice}</div>
                <button type="submit" className="w-full mt-4 px-4 py-2.5 text-lg text-white rounded-lg bg-blue-700 hover:bg-blue-900 block"><i className="bi bi-lock-fill "></i> PAY NOW </button>
            </form>
        </div>
    </>
  )
}
