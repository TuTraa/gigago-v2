import React from 'react'
import Image from 'next/image'
import { FaCircleCheck } from 'react-icons/fa6'
const TutorialGetInfoSection = () => {
  return (
    <div className='min-h-[616px] flex items-center'>
      <div className='flex flex-col md:flex-row items-center gap-x-[30px] align-middle'>
        <div className='w-full md:max-w-1/2'>
          <h2 className='text-[34px] text-center md:text-left font-semibold mb-[50px] md:max-w-[490px] leading-[1.17]'>
            Receive eSIM information by email
          </h2>
          <p className='text-normal mb-[10px] text-center md:text-left'>
            As soon as your order is placed, you will receive the Taiwan eSIM
            details via email.
          </p>
          <p className='flex items-center mb-[8px]'>
            <FaCircleCheck className='size-[16px]  text-secondary' />
            <span className='pl-[16px] font-semibold'>A QR code</span>
          </p>
          <p className='flex items-center mb-[8px]'>
            <FaCircleCheck className='size-[16px] text-secondary' />
            <span className='pl-[16px] font-semibold'>User’s Guide</span>
          </p>
          <div className='mb-[35px]'>
            <div className='font-semibold mb-[10px]'>Notes:</div>
            <ul className='pl-[21px] space-y-[10px]'>
              <li className='list-disc'>
                You should install eSIM before departure to stay connected right
                after landing.
              </li>
              <li className='list-disc'>
                If having trouble during installation,{' '}
                <span className='font-bold'>DON’T DELETE the eSIM</span> and
                contact us right away.
              </li>
            </ul>
          </div>
        </div>
        <div className='w-full md:max-w-1/2 '>
          <Image
            src='/assets/images/tutorial.webp'
            width={498}
            height={498}
            alt=''
            className='block size-full'
          />
        </div>
      </div>
    </div>
  )
}

export default TutorialGetInfoSection
