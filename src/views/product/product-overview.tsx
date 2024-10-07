import React from 'react'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
interface ProductOverviewProps {
  informations: Record<string, string>
}
const ProductOverview = ({ informations }: ProductOverviewProps) => {
  return (
    <div className='p-[30px] rounded-[24px] bg-[rgb(248,_248,_248)]'>
      <ul className='flex flex-col gap-y-[22.5px]'>
        {Object.entries(informations).map(([key, value], idx) => {
          return (
            <li key={idx} className='flex items-start'>
              <IoCheckmarkCircleSharp className='size-[24px] text-secondary' />
              <p className='flex-1 pl-[16px] text-[16px]'>
                <span className='font-bold capitalize'>{key + ':'}</span>{' '}
                <span>{value}</span>
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProductOverview
