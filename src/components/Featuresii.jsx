

import React from 'react'
import frame1 from '../assets/images/Frame (1).png'
import frame2 from '../assets/images/Frame (2).png'
import frame3 from '../assets/images/Frame.png'

const Featuresii = () => {
  return (
    <section className='w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col justify-center items-center mb-10'>
      <div className='w-full'>
        <div className='flex flex-col md:flex-row gap-4 md:gap-[60px] p-2 md:p-5 justify-center'>
          <img 
            src={frame3} 
            alt="Feature 1" 
            className='w-full md:w-auto object-contain'
          />
          <img 
            src={frame1} 
            alt="Feature 2" 
            className='w-full md:w-auto object-contain'
          />
        </div>
        <div className='mt-4 md:mt-6 flex justify-center'>
          <img 
            src={frame2} 
            alt="Feature 3" 
            className='w-full max-w-lg lg:max-w-2xl xl:max-w-3xl object-contain'
          />
        </div>
      </div>
    </section>
  )
}

export default Featuresii