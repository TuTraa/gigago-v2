'use client'
import { cn } from '@/utils/cn'
import React, { useRef, useState } from 'react'
import TabsContent from './tabs-content'
export type TabType = 'local' | 'multi-country'
interface IOption {
  label: string
  value: TabType
}
const tabBtnsData: IOption[] = [
  { label: 'Local eSIM', value: 'local' },
  { label: 'Multicountry eSIM', value: 'multi-country' },
]
const Tabs = () => {
  const [activeTab, setActiveTab] = useState<TabType>('local')
  const tabContentRef = useRef<HTMLDivElement | null>(null)
  // useEffect(() => {

  // }, [activeTab])
  const scrollToTabContent = () => {
    if (tabContentRef.current) {
      window.scrollBy({
        top: tabContentRef.current.getBoundingClientRect().top - 100,
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
          `tabBtn__mobile text-nowrap w-fit py-[12px] font-medium text-black/70 hover:text-primary cursor-pointer`,
          activeClass,
        )}
      >
        <span>{singleBtn.label}</span>
      </div>
    )
  })
  return (
    <div ref={tabContentRef}>
      <div className='flex flex-col md:flex-row w-full'>
        <div className='hidden md:block sticky top-[150px] w-[205px] h-fit'>
          {renderTabButtons}
        </div>
        <div className='groupTab__mobile flex md:hidden gap-x-[18px] w-full h-fit mb-[20px]'>
          {renderTabButtonsMobile}
        </div>
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
