import { IChilNavItem } from '@/types'
import Link from 'next/link'
import React from 'react'
interface IProps {
  items: IChilNavItem[]
}
const NavigationDropListMobile = ({ items }: IProps) => {
  return (
    <ul className='flex flex-col space-y-[18px] p-[15px_0_10px_15px]'>
      {items.map((item, idx) => {
        return (
          <li key={idx} className={`text-[18px] font-normal`}>
            <Link href='#'>{item.text}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavigationDropListMobile
