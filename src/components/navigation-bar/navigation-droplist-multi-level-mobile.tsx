'use client'
import { IAreaMobile, IChildAreaMobile } from '@/types'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const SingleChildMultiLevelItem = ({ item }: { item: IChildAreaMobile }) => (
  <li>
    <Link href={item.href} className='text-[16px]'>
      {item.text}
    </Link>
  </li>
)

const ToggleButton = ({
  isOpen,
  onToggle,
}: {
  isOpen: boolean
  onToggle: () => void
}) => (
  <ChevronDown
    className={`${isOpen ? 'rotate-[180deg] text-primary' : 'rotate-0'} duration-200`}
    onClick={onToggle}
  />
)

const SingleMultiLevelItem = ({ item }: { item: IAreaMobile }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onToggle = () => setIsOpen((prev) => !prev)

  return (
    <div className='relative p-[15px_0_10px_15px] border-b-[1px] border-gray-100'>
      <div className='flex justify-between items-start'>
        <p
          className={`text-[18px] py-[10px] font-medium ${isOpen ? 'text-primary font-medium' : ''}`}
        >
          {item.text}
        </p>
        <div className='mt-[10px]'>
          <ToggleButton isOpen={isOpen} onToggle={onToggle} />
        </div>
      </div>
      <div
        className={`pt-[10px] flex overflow-hidden ${isOpen ? 'h-fit' : 'h-0'} duration-300`}
      >
        <div className='w-1/2'>
          <ChildItemsList childrens={item.childrens.slice(0, 5)} />
        </div>
        <div className='w-1/2'>
          <ChildItemsList childrens={item.childrens.slice(5)} />
        </div>
      </div>
    </div>
  )
}

const ChildItemsList = ({ childrens }: { childrens: IChildAreaMobile[] }) => (
  <ul className='flex flex-col space-y-[18px]'>
    {childrens.map((child, idx) => (
      <SingleChildMultiLevelItem item={child} key={idx} />
    ))}
  </ul>
)

// Main Dropdown List Component
const NavigationDropListMultiLevelMobile = ({
  items,
}: {
  items: IAreaMobile[]
}) => (
  <>
    {items.map((item, idx) => (
      <SingleMultiLevelItem item={item} key={idx} />
    ))}
    <Link
      href='/buy-esim'
      className='mt-[30px] block w-full px-[20px] py-[16px] text-[16px] bg-[#f5f5f8] text-primary text-center font-semibold rounded-[24px]'
    >
      See all destinations
    </Link>
  </>
)

export default NavigationDropListMultiLevelMobile
