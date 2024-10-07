import TabsHorizontal from '@/components/tabs/tabs-horizontal'
import React from 'react'

const DeviceCompatibilitySection = () => {
  return (
    <div className='bg-background-device bg-no-repeat bg-top bg-cover'>
      <div className='max-w-xl w-full mx-auto px-[15px]'>
        <h3 className='text-[28px] sm:text-[34px] max-w-[490px] text-left font-semibold leading-[1.17] mb-[8px]'>
          <span className='text-primary'>Check the compatibility</span> of your
          device
        </h3>
        <p className='text-[18px] text-left mb-[30px] sm:mb-[50px]'>
          More than 200+ devices support eSIM. Look up if your device is
          compatible with Gigago eSIM or not.
        </p>
        <TabsHorizontal />
      </div>
    </div>
  )
}

export default DeviceCompatibilitySection
