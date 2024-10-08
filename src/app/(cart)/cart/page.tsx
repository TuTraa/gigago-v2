import ProgressTracker from '@/components/progress-tracker'
import React from 'react'

const CartPage = () => {
  return (
    <div className='max-w-xl w-full mx-auto px-[15px]'>
      <div className='grid grid-cols-12'>
        <div className='col-span-12'>
          <div className='pt-[40px]'>
            <ProgressTracker />
          </div>
        </div>
        <div className='col-span-12'></div>
      </div>
    </div>
  )
}

export default CartPage
