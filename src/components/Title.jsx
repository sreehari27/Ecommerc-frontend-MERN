import React from 'react'

const Title = ({title1, title2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-gray-500'>{title1} <span className='text-black font-medium'>{ title2}</span></p>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-black'></p>
      
    </div>
  )
}

export default Title
