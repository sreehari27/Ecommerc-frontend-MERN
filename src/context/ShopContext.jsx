import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency= '₹';
    const deliveryCharge = 50;
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId, sizes) => {

      if(!sizes) {
        toast.error('Please select a size');
        return;
      }


      let cartData= structuredClone(cartItems);

      if(cartData[itemId]) {
        if(cartData[itemId][sizes]) {
          cartData[itemId][sizes] += 1;
        }else{
          cartData[itemId][sizes] = 1;
        }
      }else{
        cartData[itemId] = {};
        cartData[itemId][sizes] = 1;
      }
      
      setCartItems(cartData);
    }

    useEffect(() => {
      let cartData = localStorage.getItem('cartData');
      if(cartData) {
        setCartItems(JSON.parse(cartData));
      }

    }, [])

    useEffect(() => {
      localStorage.setItem('cartData', JSON.stringify(cartItems));
    }, [cartItems])

    const updateQuantity = async (itemId, size, quantity) => {
      let cartData= structuredClone(cartItems);

      cartData[itemId][size] = quantity;
      
      setCartItems(cartData);

    }

    const getCartAmount = () => {
      let totalAmount = 0;

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const productData = products.find((product) => product._id === items);
            totalAmount += cartItems[items][item] * productData.price;
          }

        }
      }

      return totalAmount;
    }



  const value = {
    products,
    currency,
    deliveryCharge,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
