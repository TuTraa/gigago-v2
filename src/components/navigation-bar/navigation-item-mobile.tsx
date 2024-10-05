'use client'
import { INavItem } from '@/types'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavigationItemMobile = ({
  singleMenuItem,
}: {
  singleMenuItem: INavItem
}) => {
  const isCouldExpand =
    singleMenuItem.subListMenu.length > 0 || singleMenuItem.isSubTabMenu

  return (
    <div
      className={`relative w-full h-full px-0  py-[15px] inline-flex items-center justify-between font-medium text-[20px] text-[#404963]`}
    >
      <Link href={singleMenuItem.href || '#'} className='block flex-1'>
        {singleMenuItem.text}
      </Link>
      {isCouldExpand && (
        <div className='size-[32px] flex items-center justify-center'>
          <ChevronDown className='ml-[2px] size-[26px]  text-[#404963]  rotate-[-90deg]' />
        </div>
      )}
    </div>
  )
}

export default NavigationItemMobile
