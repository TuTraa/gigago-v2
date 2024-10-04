import Link from 'next/link'
import React from 'react'
import { localAreasData, multiCountryAreasData } from '@/data/tempData'
import { IArea } from '@/types'
import CountryCard from '@/components/country-card'
type TabType = 'local' | 'multi-country'
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
            return <CountryCard key={idx} singleCountry={singleCountry} />
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
