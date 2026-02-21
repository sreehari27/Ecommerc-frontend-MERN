import React from 'react'
import {assets} from '../assets/assets'

function OurPolicy() {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
     
      <div>
        <img src={assets.exchange_icon} alt="our policy" className='w-12 m-auto mb-5' />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle-free exchanges within 30 days of purchase.</p>
      </div>

      <div>
        <img src={assets.quality_icon} alt="our policy" className='w-12 m-auto mb-5' />
        <p className='font-semibold'>Quality Guaranteed</p>
        <p className='text-gray-400'>We ensure all products meet our high-quality standards.</p>
      </div>

      <div>
        <img src={assets.support_img} alt="our policy" className='w-12 m-auto mb-5' />
        <p className='font-semibold'>24/7 Support</p>
        <p className='text-gray-400'>Our dedicated support team is available around the clock to assist you.</p>
      </div>

    </div>
  )
}

export default OurPolicy
