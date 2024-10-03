import { IChilNavItem } from '@/types'
import Link from 'next/link'
import React from 'react'

const NavigationSubList = ({
  menuSubList,
}: {
  menuSubList: IChilNavItem[]
}) => {
  return (
    <ul className={'navigation__subList'}>
      {menuSubList.map((singleSubNavigation, idx) => {
        return (
          <li key={idx}>
            <Link
              href={singleSubNavigation.href || '#'}
              className='block p-[5px_30px_5px_0px] text-[14px] text-nowrap hover:text-primary'
            >
              <span>{singleSubNavigation.text}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavigationSubList
