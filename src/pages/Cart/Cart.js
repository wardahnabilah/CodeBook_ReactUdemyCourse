import React from 'react'
import { CartEmpty } from './components/CartEmpty'
import { CartList } from './components/CartList'
import { useCartContext } from '../../context'

export function Cart() {
  const { cartList } = useCartContext()
  
  return (
    <main>
        {cartList.length !== 0 ? <CartList /> : <CartEmpty />}
    </main>
  )
}
