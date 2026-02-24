import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';

function Cart() {

  const {cartItems, currency, products} = useContext(ShopContext);


  return (
    <div>
      
    </div>
  )
}

export default Cart
