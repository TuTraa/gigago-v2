import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[rgb(245,245,248)]'>
      <div className='max-w-xl w-full mx-auto pt-[40px] pb-[18px]'>
        <div className='mx-auto grid gap-y-8 grid-cols-4 sm:gap-y-8 sm:grid-cols-8 md:gap-y-0 md:grid-cols-12'>
          <div className='col-span-4 px-[15px]'>
            <div className='pr-[30px]'>
              <h3 className='text-lg font-semibold  mb-[10px]'>Contact Info</h3>
              <p className='font-bold italic mb-[10px]'>GIGAGO Limited</p>
              <div className='mb-[10px]'>
                <Image
                  src='/assets/images/cursor-dark.svg'
                  width={14}
                  height={14}
                  alt=''
                  className='inline-block mr-[4px]'
                />
                Unit 205, Unit C, 2/F, Kwong On Bank Mongkok Branch Building,
                728-730, Nathan Road, Mong Kok, Hong Kong
              </div>
              <div className='mb-[10px]'>
                {' '}
                <Image
                  src='/assets/images/phone-dark.svg'
                  width={14}
                  height={14}
                  alt=''
                  className='inline-block mr-[4px]'
                />
                Mobile: <span className='text-secondary'>+1 657-571-1199</span>{' '}
                (WhatsApp)
              </div>
              <div>
                {' '}
                <Image
                  src='/assets/images/envelope-dark.svg'
                  width={14}
                  height={14}
                  alt=''
                  className='inline-block mr-[4px]'
                />
                Email: <span className='text-secondary'>hello@gigago.com</span>
              </div>
            </div>
          </div>
          <div className='col-span-4 md:col-span-2 px-[15px]'>
            <h3 className='text-lg font-semibold  mb-[10px]'>Gigago</h3>
            <ul>
              <li>
                <Link
                  href='#'
                  className='block py-[5px] h-[2.5em] hover:text-primary '
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='block py-[5px] h-[2.5em] hover:text-primary'
                >
                  Partnership
                </Link>
              </li>

              <li>
                <Link
                  href='#'
                  className='block py-[5px] h-[2.5em] hover:text-primary'
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-4 md:col-span-3 px-[15px]'>
            <h3 className='text-lg font-semibold mb-[10px]'>
              Legal Information
            </h3>
            <ul>
              <li>
                <Link
                  href='#'
                  className='block py-[5px] h-[2.5em] hover:text-primary'
                >
                  Terms of use
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='block py-[5px] h-[2.5em] hover:text-primary'
                >
                  Cancellation & Refund
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='block py-[5px] h-[2.5em] hover:text-primary'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='block py-[5px] h-[2.5em] hover:text-primary'
                >
                  Delivery Policy
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='block py-[5px] h-[2.5em] hover:text-primary'
                >
                  Payment Guideline
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-3 px-[15px]'>
            <h3 className='text-lg font-semibold  mb-[10px]'>Get Started</h3>
            <ul>
              <li>
                <Link
                  href='#'
                  className='block py-[5px] h-[2.5em] text-nowrap hover:text-primary'
                >
                  eSIM compatible devices
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='block py-[5px] h-[2.5em] text-nowrap hover:text-primary'
                >
                  How to set up your eSIM
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='block py-[5px] h-[2.5em] hover:text-primary'
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='block py-[5px] h-[2.5em] hover:text-primary'
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='mt-8 border-t-[1px] border-gray-200'>
        <div className='max-w-xl w-full px-[15px] mx-auto py-[15px] flex flex-col-reverse md:flex-row justify-between items-center'>
          <p className='text-[14.4px] leading-[38px]'>
            ©{new Date().getFullYear()} GIGAGO All rights reserved
          </p>
          <div className='flex space-x-4 py-[7.5px]  md:mt-0'>
            <Image
              src='/assets/images/payment.webp'
              alt='Visa'
              width={303}
              height={24}
              className=''
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
