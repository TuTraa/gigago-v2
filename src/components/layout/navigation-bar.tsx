'use client'
import React from 'react'
import { INavItem } from '@/types'
import Image from 'next/image'
import NavigationItem from './navigation-item'
import NavigationSubTab from './navigation-sub-tab'
import NavigationSubList from './navigation-sub-list'
import Link from 'next/link'
import SearchBoxNavigation from '../search-box-navigation'
import ViewCartNavigation from '../view-cart-navigation'
interface IProps {
  items: INavItem[]
}
const NavigationBar = ({ items }: IProps) => {
  const renderItems = items?.map((item, idx) => {
    const isHaveSubListMenu = item.subListMenu.length > 0
    return (
      <li
        key={idx}
        className={`navigation__item flex items-center justify-center ${isHaveSubListMenu ? 'relative' : ''}`}
      >
        <NavigationItem singleMenuItem={item} />
        {!!item.isSubTabMenu && <NavigationSubTab />}
        {isHaveSubListMenu && (
          <NavigationSubList menuSubList={item.subListMenu} />
        )}
      </li>
    )
  })
  return (
    <>
      <div className='bg-white sticky top-0 left-0 z-[20] shadow-sm'>
        <div className='relative w-full max-w-xl h-[64px] mx-auto flex items-center justify-between px-[15px] '>
          <Link href='/'>
            <Image
              src='/assets/images/gigago-logo.svg'
              width={139}
              height={38}
              alt='gagigo logo'
            />
          </Link>
          <div className='flex h-full w-full justify-end items-stretch'>
            <ul className='navigation__list flex items-stretch  space-x-4'>
              {renderItems}
            </ul>
            <div className='relative flex gap-2 items-center'>
              <div className='mx-2'>
                <SearchBoxNavigation />
              </div>
              <ViewCartNavigation />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavigationBar
