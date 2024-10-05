'use client'
import { cn } from '@/utils/cn'
import React, { useRef, useState } from 'react'
import TabsHorizontalContent from './tabs-horizontal-content'

type TabDevice = 'apple' | 'samsung' | 'google-pixel' | 'others'
interface ITabBtnDevice {
  label: string
  value: TabDevice
}
const tabBtnsData: ITabBtnDevice[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Samsung', value: 'samsung' },
  { label: 'Google Pixel', value: 'google-pixel' },
  { label: 'Others', value: 'others' },
]
const TabsHorizontal = () => {
  const [activeTab, setActiveTab] = useState<TabDevice>('apple')
  const tabSectionRef = useRef<HTMLDivElement | null>(null)
  const renderTabButtons = tabBtnsData.map((singleBtn, idx) => {
    const onClick = () => {
      setActiveTab(singleBtn.value)
    }
    const activeClass = singleBtn.value === activeTab ? 'active' : ''
    return (
      <div
        key={idx}
        onClick={onClick}
        className={cn(
          `tabBtnDevice w-fit py-[14px] text-[18px] md:text-[24px] leading-[1.17] font-semibold text-black/85 hover:text-black text-nowrap cursor-pointer`,
          activeClass,
        )}
      >
        <span>{singleBtn.label}</span>
      </div>
    )
  })
  return (
    <div ref={tabSectionRef}>
      <div className='flex flex-col w-full'>
        <div className='groupTabDevice__desktop'>{renderTabButtons}</div>
        <div className='pt-[16px] '>
          {activeTab === 'apple' && <TabsHorizontalContent brand={'apple'} />}
          {activeTab === 'samsung' && (
            <TabsHorizontalContent brand={'samsung'} />
          )}
          {activeTab === 'google-pixel' && (
            <TabsHorizontalContent brand={'google-pixel'} />
          )}
          {activeTab === 'others' && <TabsHorizontalContent brand={'others'} />}

          {/* {activeTab === 'samsung' && (
            <TabsHorizontalContent typeESIM={'samsung'} />
          )} */}
        </div>
      </div>
    </div>
  )
}

export default TabsHorizontal
