import FeedbackCarousel from '@/components/carousels/feedback-carousel'
import TrustPilot from '@/components/trust-pilot'
import React from 'react'

const FeedbackSection = () => {
  return (
    <div className='max-w-xl w-full mx-auto px-[15px]'>
      <div className='grid grid-cols-12 gap-x-[30px]'>
        <div className='col-span-12'>
          <h2 className='text-[28px] sm:text-[34px] leading-[1.17] text-center font-semibold mb-[8px]'>
            What <span className='text-primary'>people talk </span> about us
          </h2>
          <p className='mb-[40px] text-[18px] text-center text-[rgb(64,_73,_99)]'>
            The most daring travelers have already tried Gigago.com. Will you?
          </p>
        </div>
        <div className='col-span-12 md:col-span-8'>
          <div className='md:pr-[30px] md:border-r-[1px] md:border-gray-200'>
            <FeedbackCarousel />
          </div>
        </div>
        <div className='col-span-12 md:col-span-4'>
          <div className='mt-5 md:mt-0 size-full flex items-center justify-center'>
            <TrustPilot />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackSection
