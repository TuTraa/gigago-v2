import Image from 'next/image'
import React from 'react'

const TrustPilot = () => {
  return (
    <div className='flex flex-col items-center text-center'>
      <div className='mb-1'>
        <a
          href='https://www.trustpilot.com/review/gigago.vn'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='dark mb-1'>
            <Image
              decoding='async'
              width='132'
              height='33'
              src='https://gigago.com/wp-content/uploads/2022/09/logo-white-1.svg'
              alt=''
              className='w-32'
            />
          </div>
        </a>
      </div>
      <div className='mb-1' id='image_1323000610'>
        <a
          href='https://www.trustpilot.com/review/gigago.vn'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='dark mb-1'>
            <Image
              decoding='async'
              width='230'
              height='38'
              src='https://gigago.com/wp-content/uploads/2022/09/trustpilot-Frame-12185.svg'
              alt=''
              className='w-56'
            />
          </div>
        </a>
      </div>
      <p className='mb-0 text-xs leading-4'>
        TrustScore <span className='text-black'>4.8 | 251 reviews</span>
      </p>
    </div>
  )
}

export default TrustPilot
