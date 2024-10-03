import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { TabType } from './tabs'
import { localAreasData, multiCountryAreasData } from '@/data/tempData'
import { IArea, ICountry } from '@/types'
const CountryOption = ({ singleCountry }: { singleCountry: ICountry }) => {
  return (
    <div className='col-span-6 sm:col-span-4 xl:col-span-3'>
      <Link
        href='#'
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
const AreaOptions = ({ title, countries }: IArea) => {
  return (
    <div>
      <div className='flex items-center mb-[16px]'>
        <h5 className='text-[24px] font-semibold'>{title}</h5>
        <Link
          href='#'
          className='block ml-[24px] font-medium text-normal text-primary'
        >
          View all
        </Link>
      </div>
      <div className='grid grid-cols-12 gap-[24px]'>
        {countries &&
          countries.map((singleCountry, idx) => {
            return <CountryOption key={idx} singleCountry={singleCountry} />
          })}
      </div>
    </div>
  )
}
const TabsContent = ({ typeESIM }: { typeESIM: TabType }) => {
  const data = typeESIM === 'local' ? localAreasData : multiCountryAreasData
  return (
    <div className='flex flex-col gap-y-8'>
      {data.map((area, idx) => {
        return (
          <AreaOptions
            key={idx}
            title={area.title}
            countries={area.countries}
          />
        )
      })}
    </div>
  )
}

export default TabsContent
