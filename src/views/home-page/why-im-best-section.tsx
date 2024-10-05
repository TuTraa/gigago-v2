import React from 'react'
import Image from 'next/image'
const WhyImBestSection = () => {
  return (
    <div className='pt-[80px]'>
      <div className='max-w-xl md:max-w-[1230px] w-full mx-auto px-[15px] bg-[linear-gradient(to_bottom,_#FAF3FF_40%,_#B0A1FC)] md:bg-[rgb(245,_245,_248)]  rounded-xl'>
        <div className='px-[15px] py-[70px]'>
          <div className='flex flex-col md:flex-row items-center gap-x-[30px]'>
            <div className='w-full md:w-1/2 '>
              <h2 className='text-[34px] text-center md:text-left font-semibold mb-[16px] md:max-w-[490px] leading-[1.17]'>
                <span className='text-primary'>Why Gigago</span> is the best
                service for eSIM?
              </h2>
              <p className='text-[18px] mb-[10px] text-center md:text-left'>
                We offer high speed data plans, 24/7/365 support with guidance
                from engineers by email, Hotline or WhatsApp. Forget about
                roaming, get a prepaid data plan at local rates. You can keep
                your primary SIM to receive calls and texts, no more swapping
                SIMs at the airport.{' '}
              </p>
            </div>
            <div className='w-full md:w-1/2'>
              <div className='pt-[20px] md:pt-0 relative flex items-center justify-center'>
                <Image
                  src='/assets/images/why-choose.webp'
                  width={587}
                  height={351}
                  alt='block w-full'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyImBestSection
