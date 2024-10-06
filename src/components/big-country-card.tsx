import { ICountry } from '@/types'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
interface BigCountryCardProps {
  singleCountry: ICountry
  className?: string
}
const BigCountryCard = ({ singleCountry, className }: BigCountryCardProps) => {
  return (
    <div className={className}>
      <Link
        href={`/esim/${singleCountry.country}`}
        className='w-full p-[24px] border-[1px] rounded-xl shadow-sm flex flex-col items-start outline-none outline-offset-0 hover:outline hover:outline-primary hover:outline-[2px]  transition-outline duration-300'
      >
        <div className='size-[40px] rounded-full border-[1px] overflow-hidden mb-[16px]'>
          <Image
            src='/assets/images/vn.webp'
            width={40}
            height={40}
            alt='flag'
            className=''
          />
        </div>
        <div className='mt-2 md:mt-0'>
          <p className='font-semibold text-[18px] mb-[4px]'>
            {singleCountry.country}
          </p>
          <p className='text-normal'>
            From <span className='text-primary'>{singleCountry.price}</span>
          </p>
        </div>
      </Link>
    </div>
  )
}

export default BigCountryCard
