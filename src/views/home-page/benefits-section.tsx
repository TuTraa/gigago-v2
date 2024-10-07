import React from 'react'
import Image from 'next/image'
import { Wifi } from 'lucide-react'
import { FaGlobeAmericas } from 'react-icons/fa'
import { IoSettings, IoShareSocial } from 'react-icons/io5'
import Link from 'next/link'
const BenefitsSection = () => {
  return (
    <div className='bg-background-benefit bg-center bg-cover'>
      <div className='max-w-xl w-full mx-auto px-[15px]'>
        <div className='flex flex-col md:flex-row gap-y-[40px] md:gap-y-0 items-center md:items-end'>
          <div className='w-full md:w-1/2 pr-0 md:pr-[30px]'>
            <div className='relative flex items-end justify-center size-full'>
              <Image
                src='/assets/images/benefit.webp'
                width={960}
                height={1024}
                className='object-contain'
                alt='benefit'
              />
            </div>
          </div>
          <div className='w-full md:w-1/2 pl-[15px]'>
            <div className='relative pb-[40px]'>
              <h2 className='text-[34px] font-semibold mb-[50px] text-center max-w-full md:max-w-[490px] leading-[1.17]'>
                How Gigago.com{' '}
                <span className='text-primary'>benefits you</span>
              </h2>
              <div className='flex flex-col space-y-[24px] mb-[40px]'>
                <div className='flex items-start'>
                  <div className='size-[56px] flex items-center justify-center rounded-full bg-[#00DFFF] mr-[18px]'>
                    <Wifi className='size-[28px] text-white' />
                  </div>
                  <div className='flex-1'>
                    <p className='text-[20px] font-semibold mb-[8px]'>
                      It is digital
                    </p>
                    <p className='text-[18px] text-[#404963]'>
                      No need to swap your physical sim card when traveling.
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='size-[56px] flex items-center justify-center rounded-full bg-[#FF6EFD] mr-[18px]'>
                    <FaGlobeAmericas className='size-[28px] text-white' />
                  </div>
                  <div className='flex-1'>
                    <p className='text-[20px] font-semibold mb-[8px]'>
                      Instant delivery
                    </p>
                    <p className='text-[18px] text-[#404963]'>
                      Buy local, regional and global eSIM from anywhere,
                      anytime. Receive the eSIM to your email in minutes.
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='size-[56px] flex items-center justify-center rounded-full bg-[#4600B9] mr-[18px]'>
                    <IoSettings className='size-[28px] text-white' />
                  </div>
                  <div className='flex-1'>
                    <p className='text-[20px] font-semibold mb-[8px]'>
                      Easy activation
                    </p>
                    <p className='text-[18px] text-[#404963]'>
                      Scan a QR code and you stay connected with the best local
                      network at once.
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='size-[56px] flex items-center justify-center rounded-full bg-[#0094FD] mr-[18px]'>
                    <IoShareSocial className='size-[28px] text-white' />
                  </div>
                  <div className='flex-1'>
                    <p className='text-[20px] font-semibold mb-[8px]'>
                      Save roaming fees
                    </p>
                    <p className='text-[18px] text-[#404963]'>
                      Waste no more on pricey roaming data.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href='#'
                className='block md:inline-block mx-auto w-fit text-primary underline'
              >
                Learn more about installing an eSIM
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitsSection
