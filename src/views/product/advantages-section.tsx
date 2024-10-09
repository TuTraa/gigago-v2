import React from 'react'
import Image from 'next/image'
const AdvantagesSection = () => {
  return (
    <div className=''>
      <h3 className='text-[28px] sm:text-[34px] leading-[1.17] font-semibold text-center mb-[50px] sm:mb-[60px]'>
        Strengths of eSIM
      </h3>
      <div className='grid grid-cols-12 md:gap-x-[30px] gap-y-[30px]'>
        <div className='col-span-12 sm:col-span-4 flex flex-col items-center px-[10px]'>
          <Image
            src='/assets/images/easy-1.svg'
            width={60}
            height={60}
            alt='eSIM'
            className='mb-[16px]'
          />
          <h4 className='mb-[8px] text-[20px] text-center font-semibold'>
            Easy to use
          </h4>
          <p className='text-[16px] text-center'>
            100% online. Receive eSIM via email. Scan a QR code to install.
            Activate eSIM when you land and get connected instantly.
          </p>
        </div>
        <div className='col-span-12 sm:col-span-4 flex flex-col items-center px-[10px]'>
          <Image
            src='/assets/images/easy-2.svg'
            width={60}
            height={60}
            alt='eSIM'
            className='mb-[16px]'
          />
          <h4 className='mb-[8px] text-[20px] text-center font-semibold'>
            Free roaming charge
          </h4>
          <p className='text-[16px] text-center'>
            Save 100% on data roaming charges and comfortably make calls and
            texts via WhatsApp, Telegram, Facetime, etc.
          </p>
        </div>
        <div className='col-span-12 sm:col-span-4 flex flex-col items-center px-[10px]'>
          <Image
            src='/assets/images/easy-3.svg'
            width={60}
            height={60}
            alt='eSIM'
            className='mb-[16px]'
          />
          <h4 className='mb-[8px] text-[20px] text-center font-semibold'>
            Whole Taiwan coverage
          </h4>
          <p className='text-[16px] text-center'>
            Work in all destinations in Taiwan. Stay connected anytime,
            anywhere.
          </p>
        </div>
        <div className='col-span-12 sm:col-span-4 flex flex-col items-center px-[10px]'>
          <Image
            src='/assets/images/easy-4.svg'
            width={60}
            height={60}
            alt='eSIM'
            className='mb-[16px]'
          />
          <h4 className='mb-[8px] text-[20px] text-center font-semibold'>
            24/7 support
          </h4>
          <p className='text-[16px] text-center'>
            Answer questions and provide 24/7 technical support via chat or
            email.
          </p>
        </div>
        <div className='col-span-12 sm:col-span-4 flex flex-col items-center px-[10px]'>
          <Image
            src='/assets/images/easy-5.svg'
            width={60}
            height={60}
            alt='eSIM'
            className='mb-[16px]'
          />
          <h4 className='mb-[8px] text-[20px] text-center font-semibold'>
            Instant delivery
          </h4>
          <p className='text-[16px] text-center'>
            eSIM profile details delivered via email. No waiting for shipping,
            no removal, no risk of loss.
          </p>
        </div>
        <div className='col-span-12 sm:col-span-4 flex flex-col items-center px-[10px]'>
          <Image
            src='/assets/images/easy-6.svg'
            width={60}
            height={60}
            alt='eSIM'
            className='mb-[16px]'
          />
          <h4 className='mb-[8px] text-[20px] text-center font-semibold'>
            Keep original SIM
          </h4>
          <p className='text-[16px] text-center'>
            eSIM is digital, so it‘s no need to remove your original sim cards,
            but still receive calls, SMS if any.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AdvantagesSection
