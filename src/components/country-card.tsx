import { ICountry } from '@/types'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const CountryCard = ({ singleCountry }: { singleCountry: ICountry }) => {
  return (
    <div className='col-span-6 sm:col-span-4 xl:col-span-3'>
      <Link
        href={`/esim/${singleCountry.country}`}
        className='w-full px-[18px] py-[24px] border-[1px] rounded-xl shadow-sm flex flex-col md:flex-row items-start md:items-center outline-none outline-offset-0 hover:outline hover:outline-primary hover:outline-[2px]  transition-outline duration-300'
      >
        <div className='size-[40px] rounded-full border-[1px] overflow-hidden mr-3'>
          <Image
            src='/assets/images/vn.webp'
            width={40}
            height={40}
            alt='flag'
            className=''
          />
        </div>
        <div className='mt-2 md:mt-0'>
          <p className='font-semibold'>{singleCountry.country}</p>
          <p>
            From <span className='text-primary'>{singleCountry.price}</span>
          </p>
        </div>
      </Link>
    </div>
  )
}

export default CountryCard
