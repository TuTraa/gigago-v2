'use client'
import { cn } from '@/utils/cn'
import React, { useRef, useState } from 'react'
import TabsContent from './tabs-mix-content'
export type TabTypeArea = 'local' | 'multi-country'
interface ITabBtnArea {
  label: string
  value: TabTypeArea
}
const tabBtnsData: ITabBtnArea[] = [
  { label: 'Local eSIM', value: 'local' },
  { label: 'Multicountry eSIM', value: 'multi-country' },
]
const Tabs = () => {
  const [activeTab, setActiveTab] = useState<TabTypeArea>('local')
  const tabSectionRef = useRef<HTMLDivElement | null>(null)
  const scrollToTabContent = () => {
    if (tabSectionRef.current) {
      window.scrollBy({
        top: tabSectionRef.current.getBoundingClientRect().top - 100,
        left: 0,
        behavior: 'smooth',
      })
    }
  }
  const renderTabButtons = tabBtnsData.map((singleBtn, idx) => {
    const onClick = () => {
      scrollToTabContent()
      setActiveTab(singleBtn.value)
    }
    const activeClass = singleBtn.value === activeTab ? 'active' : ''
    return (
      <div
        key={idx}
        onClick={onClick}
        className={cn(
          `tabBtn w-full px-[20px] py-[12px] font-medium text-black/70 hover:text-primary cursor-pointer`,
          activeClass,
        )}
      >
        <span>{singleBtn.label}</span>
      </div>
    )
  })
  const renderTabButtonsMobile = tabBtnsData.map((singleBtn, idx) => {
    const onClick = () => {
      setActiveTab(singleBtn.value)
    }
    const activeClass = singleBtn.value === activeTab ? 'active' : ''
    return (
      <div
        key={idx}
        onClick={onClick}
        className={cn(
          `tabBtn__mobile w-fit py-[12px] font-medium text-black/70 hover:text-primary text-nowrap cursor-pointer`,
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
        <div className='groupTab__desktop'>{renderTabButtons}</div>
        <div className='groupTab__mobile'>{renderTabButtonsMobile}</div>
        <div className='flex-1'>
          {activeTab === 'local' && <TabsContent typeESIM={'local'} />}
          {activeTab === 'multi-country' && (
            <TabsContent typeESIM={'multi-country'} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Tabs
