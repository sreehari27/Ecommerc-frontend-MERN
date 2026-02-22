import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

function Collection() {

  const {products} = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);




  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-1 pt-10 border-t'>
      <div className='min-w-60'>
        <p onClick={()=>setShowFilters(!showFilters)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img src={assets.dropdown_icon} alt="filter icon" className={`h-3 sm:hidden ${showFilters ? 'rotate-90' : ''}`}/>
          </p>

        {/*category filter// */}
        
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-lighttext-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" name="category" id="men" className='w-3 ' value={'Men'} />Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" name="category" id="women" className='w-3 ' value={'Women'} />Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" name="category" id="kids" className='w-3 ' value={'Kids'} />Kids
            </p>
          </div>
        </div>

        {/* sub category */}

        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-lighttext-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" name="category" id="topwear" className='w-3 ' value={'topwear'} />Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" name="category" id="bottomwear" className='w-3 ' value={'bottomwear'} />Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" name="category" id="winterwear" className='w-3 ' value={'winterwear'} />Winterwear
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Collection
