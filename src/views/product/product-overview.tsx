import React from 'react'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
interface ProductOverviewProps {
  informations: Record<string, string>
}
const ProductOverview = ({ informations }: ProductOverviewProps) => {
  return (
    <div className='p-[20px_15px] sm:p-[30px] rounded-[12px] sm:rounded-[24px] bg-[rgb(248,_248,_248)]'>
      <ul className='flex flex-col gap-y-[20px] sm:gap-y-[22.5px]'>
        {Object.entries(informations).map(([key, value], idx) => {
          return (
            <li key={idx} className='flex items-start'>
              <IoCheckmarkCircleSharp className='size-[20px] sm:size-[24px] text-secondary mt-[4px]' />
              <p className='flex-1 pl-[8px] sm:pl-[16px] text-[16px]'>
                <span className='text-[15px] sm:text-normal font-bold capitalize'>
                  {key + ':'}
                </span>{' '}
                <span className='text-[15px] sm:text-normal'>{value}</span>
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProductOverview
