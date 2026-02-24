import React, { use, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

function Cart() {

  const { cartItems, currency, products } = useContext(ShopContext);

  const [cartData, setCartData] = React.useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          })
        }

      }
    }
    setCartData(tempData);
  }, [cartItems])


  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title title1="MY" title2="CART" />
      </div>

      <div className=''>
        {
          cartData.map((item, index) => {
            const product = products.find((product) => product._id === item._id);

            return(
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5frsm:grid-cols[6fr_2fr_0.5fr] item-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img className='w-15 sm:w-20' src={productData.image[0]} alt="" />
                </div>
                
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Cart
