import BigCountryCard from '@/components/big-country-card'
import { ICountry } from '@/types'
import React from 'react'
interface SimilarProductsSectionProps {
  items: ICountry[]
}
const SimilarProductsSection = ({ items }: SimilarProductsSectionProps) => {
  return (
    <div>
      <div className='text-[20px] font-bold mb-[24px]'>
        You might want to buy these eSIMs too before arriving
      </div>
      <div className='grid grid-cols-6 gap-[24px]'>
        {items.map((item, idx) => (
          <BigCountryCard
            key={idx}
            singleCountry={item}
            className='col-span-3 md:col-span-2'
          />
        ))}
      </div>
    </div>
  )
}

export default SimilarProductsSection
