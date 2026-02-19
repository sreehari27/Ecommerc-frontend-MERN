import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/* Left Section */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>OUR BEST SELLER</p>
                </div>
                <h1 className='roboto-slab-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>SHOPE NOW</p>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>

                </div>
            </div>

        </div>

        {/* Right Section */}
        <div className='w-full sm:w-1/2'>
            <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="hero" className='w-full h-full object-cover' />
        </div>
      
    </div>
  )
}

export default Hero
