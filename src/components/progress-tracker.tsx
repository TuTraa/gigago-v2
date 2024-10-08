'use client'
import React from 'react'

const ProgressTracker = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex items-center'>
        <div className='size-[24px] rounded-full bg-black text-white flex items-center justify-center mr-[8px]'>
          1
        </div>
        <span className='text-[14px] font-semibold'> Shopping cart</span>
      </div>
      <span className='block mx-[16px] w-[80px] h-[2px] bg-gray-200'></span>
      <div className='flex items-center'>
        <div className='size-[24px] rounded-full bg-black text-white flex items-center justify-center mr-[8px]'>
          2
        </div>
        <span className='text-[14px] font-semibold'> Checkout details</span>
      </div>
      <span className='block mx-[16px] w-[80px] h-[2px] bg-gray-200'></span>
      <div className='flex items-center'>
        <div className='size-[24px] rounded-full bg-black text-white flex items-center justify-center mr-[8px]'>
          3
        </div>
        <span className='text-[14px] font-semibold'> Complete</span>
      </div>
    </div>
  )
}

export default ProgressTracker
