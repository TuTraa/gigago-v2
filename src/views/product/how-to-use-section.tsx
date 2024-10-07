import React from 'react'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa6'
import Link from 'next/link'
const HowToUseSection = () => {
  return (
    <div className=''>
      <h3 className='text-[28px] sm:text-[34px] leading-[1.17] font-semibold text-center mb-[60px]'>
        How to use Taiwan eSIM
      </h3>
      <div className='grid grid-cols-12 md:gap-x-[30px] md:gap-y-[30px]'>
        <div className='col-span-4 flex flex-col items-center px-[10px]'>
          <Image
            src='/assets/images/use-1.svg'
            width={60}
            height={60}
            alt='eSIM'
            className='mb-[16px]'
          />
          <h4 className='mb-[8px] text-[20px] font-semibold text-center'>
            Check if your phone is eSIM-compatible
          </h4>
          <p className='text-[16px] text-center'>
            Taiwan eSIM only works on unlocked eSIM-compatible phones, including
            iPhone, Samsung, Google Pixel, etc.
          </p>
          <Link href='#' className='text-primary text-center underline'>
            Check if your phone works with eSIM
          </Link>
        </div>
        <div className='col-span-4 flex flex-col items-center px-[10px]'>
          <Image
            src='/assets/images/use-2.svg'
            width={60}
            height={60}
            alt='eSIM'
            className='mb-[16px]'
          />
          <h4 className='mb-[8px] text-[20px] font-semibold text-center'>
            Buy online a day before departure
          </h4>
          <p className='text-[16px] text-center'>
            Taiwan eSIM will be activated automatically when connected to a
            cellular network. So, you can buy and install it before departure.
          </p>
        </div>
        <div className='col-span-4 flex flex-col items-center px-[10px]'>
          <Image
            src='/assets/images/use-3.svg'
            width={60}
            height={60}
            alt='eSIM'
            className='mb-[16px]'
          />
          <h4 className='mb-[8px] text-[20px] font-semibold text-center'>
            Scan the QR code
          </h4>
          <p className='text-[16px] text-center'>
            Scan the eSIM QR code sent to your valid email address and turn on
            the data roaming in Settings to browse the web easily.
          </p>
        </div>
      </div>
      <Link
        href='#'
        className='mt-[25px] w-fit mx-auto px-[55px] h-[50px] flex items-center rounded-[16px] bg-primary text-white'
      >
        <FaPlay className='size-[16px] mr-[6px]' />
        What tutorial video
      </Link>
    </div>
  )
}

export default HowToUseSection
