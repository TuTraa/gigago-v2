'use client'
import { cn } from '@/utils/cn'
import React, { useRef, useState } from 'react'
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
          `tabBtnDevice__mobile w-fit py-[12px] text-[24px] font-semibold text-black/85 hover:text-black text-nowrap cursor-pointer`,
          activeClass,
        )}
      >
        <span>{singleBtn.label}</span>
      </div>
    )
  })
  return (
    <div ref={tabSectionRef}>
      <div className='flex flex-col md:flex-row w-full'>
        <div className='groupTabDevice__desktop'>{renderTabButtons}</div>
        <div className='flex-1'>
          {/* {activeTab === 'apple' && <TabsContent typeESIM={'local'} />}
          {activeTab === 'Samsung' && (
            <TabsContent typeESIM={'multi-country'} />
          )} */}
        </div>
      </div>
    </div>
  )
}

export default TabsHorizontal
