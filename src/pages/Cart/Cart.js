import React from 'react'
import { CartEmpty } from './components/CartEmpty'
import { CartList } from './components/CartList'
import { useCartContext } from '../../context'
import { useDocTitle } from '../../hooks'

export function Cart() {
  const { cartList } = useCartContext()
  
  useDocTitle(`Your Cart (${cartList.length}) - CodeBook`)

  return (
    <main>
        {cartList.length !== 0 ? <CartList /> : <CartEmpty />}
    </main>
  )
}
