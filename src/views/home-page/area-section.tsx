import React from 'react'
import Tabs from '../listing/tabs'

const ESIMOptionsSection = () => {
  return (
    <div className='pt-[120px]'>
      <div className='max-w-xl w-full mx-auto px-[15px]'>
        <h3 className='text-[28px] sm:text-[34px] font-semibold text-left mb-[8px]'>
          Many eSIMs in one place,{' '}
          <span className='text-primary'>find yours</span> here
        </h3>
        <p className='text-[18px] text-left mb-[60px]'>
          Our eSIMs are trusted by over 1,000,000 people worldwide
        </p>
        <Tabs />
      </div>
    </div>
  )
}

export default ESIMOptionsSection
