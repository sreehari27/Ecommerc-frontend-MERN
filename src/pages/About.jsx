import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title title1={'ABOUT'} title2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi iure numquam amet libero voluptate, obcaecati incidunt, quis natus nesciunt dignissimos possimus aliquid explicabo debitis quaerat optio excepturi! Modi magnam officiis totam sapiente! Ipsa libero rem porro et corporis aliquid, exercitationem pariatur esse ullam quidem at qui sint laboriosam explicabo voluptatibus?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique nemo mollitia fuga, provident magni molestias modi praesentium, quisquam explicabo possimus laboriosam ex quae nostrum, assumenda obcaecati ab sapiente asperiores nisi eum! Pariatur cum aspernatur, natus tenetur soluta provident error totam consequuntur eligendi nostrum quos corrupti exercitationem facere nihil hic distinctio?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To provide high-quality, sustainable products that enhance the lives of our customers while promoting environmental responsibility and ethical business practices.</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title title1={'WHY'} title2={'CHOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>All our products are rigorously tested to ensure they meet the highest standards of quality and safety.</p>
        </div>
        <div className='px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>We make shopping easy and accessible for everyone, with fast delivery and a seamless online experience.</p>
        </div>
        <div className='px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>We are committed to providing outstanding customer service, ensuring every interaction is positive and helpful.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
