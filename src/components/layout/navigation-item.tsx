'use client'
import { INavItem } from '@/types'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavigationItem = ({ singleMenuItem }: { singleMenuItem: INavItem }) => {
  return (
    <Link
      href={singleMenuItem.href || '#'}
      className={`h-full px-2 inline-flex items-center font-medium`}
    >
      {singleMenuItem.text}
      {(singleMenuItem.subListMenu || singleMenuItem.isSubTabMenu) && (
        <i>
          <ChevronDown className='ml-[2px] size-[16px] text-black/60' />
        </i>
      )}
    </Link>
  )
}

export default NavigationItem
