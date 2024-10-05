import CountryCard from '@/components/country-card'
import { IArea } from '@/types'
import React from 'react'
interface GridSectionProps {
  title: string
  items: IArea[]
  className?: string
}
const GridSection = ({ items, title, className }: GridSectionProps) => {
  return (
    <div className={className}>
      <h3 className='text-center text-[26px] font-semibold leading-[32px] mb-[24px]'>
        {title}
      </h3>
      <div className='flex flex-col space-y-[40px]'>
        {items.map((item, idx) => {
          return (
            <div key={idx}>
              <h4 className='text-left text-[20px] leading-[26px] font-semibold mb-[16px]'>
                {item.title}
              </h4>
              <div className='grid grid-cols-12 gap-x-[24px] gap-y-[24px]'>
                {item.countries.map((country, childIdx) => {
                  return <CountryCard singleCountry={country} key={childIdx} />
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GridSection
{
  /* <CountryCard  /> */
}
