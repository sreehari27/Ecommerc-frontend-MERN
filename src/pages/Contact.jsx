import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title title1={'CONTACT'} title2={'US'} />
      </div>

      <div className='my-10 flex flx-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>123 Main Street</p>
          <p className='text-gray-500'>New York, NY 10001</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@ourstore.com</p>
        </div>
      </div>
      <NewsletterBox/>
      
    </div>
  )
}

export default Contact
