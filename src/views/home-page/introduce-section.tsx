import React from 'react'
import Image from 'next/image'
const IntroduceSection = () => {
  return (
    <div className='pt-[120px]'>
      <div className='max-w-xl w-full mx-auto px-[15px]'>
        <h3 className='text-[28px] sm:text-[34px] font-semibold text-center mb-[24px]'>
          What <span className='text-primary'>eSIM</span> is
        </h3>
        <p className='text-[18px] text-center'>
          A form of SIM card embedded directly into a mobile device that allows
          you to activate a cellular plan from any carrier without having to use
          a physical SIM card.
        </p>
        <div className='flex flex-col md:flex-row'>
          <div className='flex flex-col items-center pt-[50px] px-[15px]'>
            <Image
              src='/assets/images/home1.svg'
              width={200}
              height={200}
              alt='eSIM'
              className='mb-[18px]'
            />
            <h4 className='mb-[8px] text-[24px] font-semibold'>
              A digital SIM Card
            </h4>
            <p className='text-[18px] text-center'>
              Buy a virtual SIM card from anywhere, anytime
            </p>
          </div>{' '}
          <div className='flex flex-col items-center pt-[50px] px-[15px]'>
            <Image
              src='/assets/images/home2.svg'
              width={200}
              height={200}
              alt='eSIM'
              className='mb-[18px]'
            />
            <h4 className='mb-[8px] text-[24px] font-semibold'>
              Immediate delivery
            </h4>
            <p className='text-[18px] text-center'>
              Receive the eSIM directly to your email in minutes
            </p>
          </div>
          <div className='flex flex-col items-center pt-[50px] px-[15px]'>
            <Image
              src='/assets/images/home3.svg'
              width={200}
              height={200}
              alt='eSIM'
              className='mb-[18px]'
            />
            <h4 className='mb-[8px] text-[24px] font-semibold'>
              Easy activation
            </h4>
            <p className='text-[18px] text-center'>
              Scan the QR code and you’re connected
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroduceSection
