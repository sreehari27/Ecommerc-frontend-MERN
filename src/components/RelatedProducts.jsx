import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({category,subCategory}) => {

    const {products} = useContext(ShopContext);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        
        if(products.length > 0) {
            let productsCopy =products.slice();

            productsCopy = productsCopy.filter((item) => item.category === category && item.subCategory === subCategory);  
            setRelatedProducts(productsCopy.slice(0, 5));
        }

    }, [])



  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title title1="SIMILAR " title2="PRODUCTS"/>

        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
            {
                relatedProducts.map((item,index) => (
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                ))
            }
        </div>
      
    </div>
  )
}

export default RelatedProducts
