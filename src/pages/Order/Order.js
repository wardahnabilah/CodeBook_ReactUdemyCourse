import React from 'react'
import { OrderSuccess } from './components/OrderSuccess'
import OrderFail from './components/OrderFail'
import { useLocation } from 'react-router-dom'

export function Order() {
  const { state }  = useLocation()
  console.log(state.data.id);
  return (
    <main>
      {state.status === true ? <OrderSuccess orderDetail={state.data} /> : <OrderFail />}
    </main>
  )
}
