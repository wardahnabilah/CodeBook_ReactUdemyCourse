import React from 'react'

export function Checkout() {
  return (
    <div className="w-11/12 max-w-[24rem] mx-auto p-4 bg-white dark:bg-slate-800 rounded-lg shadow shadow-slate-400/90 dark:shadow-slate-200/30">
        <div className="flex justify-between items-center">
            <div className="text-xl"><i className="bi bi-credit-card mr-2"></i>CARD PAYMENT</div>
            <i className="bi bi-x text-2xl"></i>
        </div>
        <form>
            <div className="my-4 flex flex-col">
                <label className="mb-1" htmlFor="namePayment">Name</label>
                <input className="pl-3 py-1 border-[.11rem] bg-slate-200 border-neutral-300 focus:outline-blue-700 rounded-lg dark:bg-gray-700" type="text" id="namePayment" value="Anna Chia" disabled />
            </div>
            <div className="my-4 flex flex-col">
                <label className="mb-1" htmlFor="emailPayment">Email</label>
                <input className="pl-3 py-1 border-[.11rem] bg-slate-200 border-neutral-300 focus:outline-blue-700 rounded-lg dark:bg-gray-700" type="text" id="emailPayment" value="guest@mail.com" disabled />
            </div>
            <div className="my-4 flex flex-col">
                <label className="mb-1" htmlFor="cardnumberPayment">Card Number</label>
                <input className="pl-3 py-1 border-[.11rem] bg-slate-200 border-neutral-300 focus:outline-blue-700 rounded-lg dark:bg-gray-700" type="text" id="cardnumberPayment" value="123456789" disabled />
            </div>
            <div className="my-4 flex flex-col">
                <label className="mb-1">Expire Date</label>
                <div className="flex gap-4">
                    <input className="w-[4rem] pl-3 py-1 border-[.11rem] bg-slate-200 border-neutral-300 focus:outline-blue-700 rounded-lg dark:bg-gray-700" type="text" name="expirePayment" value="05" disabled />
                    <input className="w-[4rem] pl-3 py-1 border-[.11rem] bg-slate-200 border-neutral-300 focus:outline-blue-700 rounded-lg dark:bg-gray-700" type="text" name="expirePayment" value="28" disabled />
                </div>    
            </div>
            <div className="my-4 flex flex-col">
                <label className="mb-1" htmlFor="cardnumberPayment">Security Code</label>
                <input className="pl-3 py-1 border-[.11rem] bg-slate-200 border-neutral-300 focus:outline-blue-700 rounded-lg dark:bg-gray-700" type="text" id="securityPayment" value="789" disabled />
            </div>
        </form>
        <div className="py-2 text-3xl text-center text-green-500 font-bold">$58</div>
        <button className="w-full mt-4 px-4 py-2.5 text-lg text-white rounded-lg bg-blue-700 hover:bg-blue-900"><i className="bi bi-lock-fill "></i> PAY NOW </button>
    </div>
  )
}
