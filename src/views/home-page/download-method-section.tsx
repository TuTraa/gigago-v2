import React from 'react'
import Image from 'next/image'
const DownloadMethodSection = () => {
  return (
    <div className='max-w-xl md:max-w-[1230px] w-full min-h-[388px] mx-auto px-[15px] flex items-center bg-background-download bg-[50%_50%] rounded-xl'>
      <div className='w-full'>
        <div className='max-w-[790px] mx-auto'>
          <h2 className='text-[28px] sm:text-[34px] leading-[1.1765] text-center font-semibold mb-[8px]'>
            <span className='text-primary'>eSIMs</span> on the go
          </h2>
          <p className='mb-[54px] text-[18px] text-center text-[rgb(64,_73,_99)]'>
            Wanna mobily purchase and monitor eSim on the go? Download the
            Gigago app to purchase, manage, and top up your eSIMs anytime,
            anywhere!
          </p>
        </div>
        <div className='flex gap-x-[16px]'>
          <div className='max-w-1/2 w-full flex flex-col items-end justify-between'>
            <Image
              alt=''
              src='/assets/images/download-ggplay.webp'
              width={486}
              height={180}
              className='w-[162px] h-auto'
            />
            <Image
              alt=''
              src='/assets/images/download-appstore.webp'
              width={486}
              height={180}
              className='w-[162px] h-auto'
            />
          </div>
          <div className='max-w-1/2 w-full flex flex-col'>
            <Image
              alt=''
              src='/assets/images/download-qr.webp'
              width={348}
              height={390}
              className='w-[116px] h-auto'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadMethodSection
