import { cn } from '@/utils/cn'
import React from 'react'
import Image from 'next/image'
import SearchBoxHero from '@/components/search-box-hero'
import Link from 'next/link'
const HeroSection = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'w-full py-[60px] bg-[linear-gradient(to_bottom,_#ffffff,_#ede6ff)]  sm:bg-background-hero bg-cover bg-left sm:bg-center',
        className,
      )}
    >
      <div className='max-w-xl mx-auto py-[90px] sm:py-0 flex justify-between items-center'>
        <div className='max-w-[100%] sm:max-w-[50%] w-full px-[15px]'>
          <h1 className='max-w-[515px] mb-[20px] text-[27px] sm:text-[35px] md:text-[43px] leading-snug font-semibold text-wrap'>
            <span>Stay Connected Anytime and Anywhere</span>
          </h1>
          <SearchBoxHero />
          <Link href='' className='block mt-[20px] underline text-primary'>
            Can my phone use eSIM?
          </Link>
        </div>
        <div className='hidden sm:block max-w-[50%] w-full px-[15px]'>
          <div>
            <Image
              src='/assets/images/hero.webp'
              width={761}
              height={537}
              alt='hero'
              className='w-[500px]'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
