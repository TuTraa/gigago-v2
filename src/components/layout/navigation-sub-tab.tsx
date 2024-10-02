'use client'
import { cn } from '@/utils/cn'
import React, { useState } from 'react'
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
    const classActive =
      area.value === activeTab
        ? 'tabBtn__active text-primary font-semibold'
        : ''
    return (
      <div
        key={idx}
        onClick={onClick}
        className={cn(
          `w-full px-[16px] py-[14px] font-medium text-black/70 hover:text-primary cursor-pointer`,
          classActive,
        )}
      >
        <span className=''>{area.label}</span>
      </div>
    )
  })
  return (
    <div className={cn('navigation__subTab absolute top-full left-0 flex')}>
      <div className='w-[25%] h-fit border-r-[1px]'>{renderTabButtons}</div>
      <div className='flex-1 '>
        {
          <div
            className={` ${activeTab === 1 ? 'animation-tab-content' : 'opacity-0 h-0 overflow-hidden'} p-[20px] h-full`}
          >
            1
          </div>
        }
        {
          <div
            className={` ${activeTab === 2 ? 'animation-tab-content' : 'opacity-0  h-0 overflow-hidden'} p-[20px] h-full`}
          >
            2
          </div>
        }
        {
          <div
            className={` ${activeTab === 3 ? 'animation-tab-content' : 'opacity-0  h-0 overflow-hidden'} p-[20px] h-full`}
          >
            3
          </div>
        }
        {
          <div
            className={` ${activeTab === 4 ? 'animation-tab-content' : 'opacity-0  h-0 overflow-hidden'} p-[20px] h-full`}
          >
            4
          </div>
        }
        {
          <div
            className={` ${activeTab === 5 ? 'animation-tab-content' : 'opacity-0  h-0 overflow-hidden'} p-[20px] h-full`}
          >
            5
          </div>
        }
        {
          <div
            className={` ${activeTab === 6 ? 'animation-tab-content' : 'opacity-0  h-0 overflow-hidden'} p-[20px] h-full`}
          >
            6
          </div>
        }
      </div>
    </div>
  )
}

export default NavigationSubTab
