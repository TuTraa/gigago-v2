'use client'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react'
const areasData = [
  {
    label: 'Most popular',
    value: 1,
  },
  { label: 'Asia', value: 2 },
  { label: 'Europe', value: 3 },
  { label: 'Ameria', value: 4 },
  { label: 'Africa', value: 5 },
  { label: 'Oceania', value: 6 },
]
const NavigationSubTab = () => {
  const [activeTab, setActiveTab] = useState(1)
  const renderTabButtons = areasData.map((area, idx) => {
    const onClick = () => {
      setActiveTab(area.value)
    }
    const activeClass =
      area.value === activeTab ? 'navigation-tabBtn__active' : ''
    return (
      <div
        key={idx}
        onClick={onClick}
        className={cn(
          `w-full px-[16px] py-[14px] font-medium text-black/70 hover:text-primary cursor-pointer`,
          activeClass,
        )}
      >
        <span>{area.label}</span>
      </div>
    )
  })
  return (
    <div className='navigation__subTab'>
      <div className='flex w-full'>
        <div className='w-[25%] h-fit border-r-[1px]'>{renderTabButtons}</div>
        <div className='flex-1'>
          {activeTab === 1 && (
            <div className={`animation-tab-content p-[20px]`}>1</div>
          )}
          {activeTab === 2 && (
            <div className={`animation-tab-content p-[20px]`}>2</div>
          )}
          {activeTab === 3 && (
            <div className={`animation-tab-content p-[20px]`}>3</div>
          )}
          {activeTab === 4 && (
            <div className={`animation-tab-content p-[20px]`}>4</div>
          )}
          {activeTab === 5 && (
            <div className={`animation-tab-content p-[20px]`}>5</div>
          )}
          {activeTab === 6 && (
            <div className={`animation-tab-content p-[20px]`}>6</div>
          )}
        </div>
      </div>
      <>
        <Link
          href='/buy-esim'
          className='w-full inline-block bg-gray-100 text-center py-6  text-primary font-semibold'
        >
          See all destinations{' '}
          <ChevronRight className='size-[16px] inline-block ml-[2px] mb-[2px]' />{' '}
        </Link>
      </>
    </div>
  )
}

export default NavigationSubTab
