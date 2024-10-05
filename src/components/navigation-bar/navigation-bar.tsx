'use client'
import React from 'react'
import { IAreaMobile, INavItem } from '@/types'
import Image from 'next/image'
import { IoIosMenu } from 'react-icons/io'
import NavigationItem from './navigation-item'
import NavigationSubList from './navigation-sub-list'
import Link from 'next/link'
import SearchBoxNavigation from './search-box-navigation'
import ViewCartNavigation from '../view-cart-navigation'
import { Search } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import NavigationDropTabDesktop from './navigation-droptab-desktop'
import NavigationDropListMobile from './navigation-droplist-mobile'
import NavigationDropListMultiLevelMobile from './navigation-droplist-multi-level-mobile'
const areasData: IAreaMobile[] = [
  {
    text: 'Most popular',
    childrens: [
      { text: 'Thailand eSIM', href: '#' },
      { text: 'Korea eSIM', href: '#' },
      { text: 'Japan eSIM', href: '#' },
      { text: 'China eSIM', href: '#' },
      { text: 'Taiwan eSIM', href: '#' },
      { text: 'eSIM for Asia', href: '#' },
      { text: 'eSIM for Europe', href: '#' },
    ],
  },
  {
    text: 'International eSIM',
    childrens: [
      { text: 'Asia eSIM', href: '#' },
      { text: 'Europe eSIM', href: '#' },
      { text: 'Americas eSIM', href: '#' },
      { text: 'Oceania eSIM', href: '#' },
      { text: 'Africa eSIM', href: '#' },
    ],
  },
]
interface IProps {
  items: INavItem[]
}

const NavigationBar = ({ items }: IProps) => {
  const itemsMarkup = items?.map((item, idx) => {
    const isHaveSubListMenu = item.subListMenu.length > 0
    const isHaveSubTabMenu = item.isSubTabMenu
    return (
      <li
        key={idx}
        className={`navigation__item flex items-center justify-center ${isHaveSubListMenu ? 'relative' : ''}`}
      >
        <NavigationItem singleMenuItem={item} />
        {isHaveSubTabMenu && <NavigationDropTabDesktop />}
        {isHaveSubListMenu && (
          <NavigationSubList menuSubList={item.subListMenu} />
        )}
      </li>
    )
  })
  const itemsMarkupMobile = () => {
    return (
      <Accordion type='single' collapsible className='w-full flex flex-col'>
        {items?.map((item, idx) => {
          const isHaveSubListMenu = item.subListMenu.length > 0
          const isHaveSubTabMenu = item.isSubTabMenu
          return (
            <AccordionItem
              key={idx}
              value={item.text}
              className='border-b-[1px] border-gray-100 duration-300 '
            >
              <AccordionTrigger
                className={`menu-mobile__item flex items-center justify-between [&[data-state=open]>span>div>a]:text-primary [&[data-state=open]>svg]:text-primary [&>svg]:size-[28px] ${!isHaveSubListMenu && !isHaveSubTabMenu ? '[&[data-state]>svg]:hidden' : ''}`}
              >
                <div
                  className={`w-full h-full px-0  py-[15px] inline-flex items-center justify-between font-medium text-[20px] text-[#404963]`}
                >
                  <Link href={item.href || '#'} className='block flex-1'>
                    {item.text}
                  </Link>
                </div>
              </AccordionTrigger>

              {isHaveSubListMenu && (
                <AccordionContent className='pb-[35px] text-[18px] duration-300'>
                  <NavigationDropListMobile items={item.subListMenu} />
                </AccordionContent>
              )}
              {isHaveSubTabMenu && (
                <AccordionContent className='pb-[35px] text-[18px] duration-300'>
                  <NavigationDropListMultiLevelMobile items={areasData} />
                </AccordionContent>
              )}
            </AccordionItem>
          )
        })}
      </Accordion>
    )
  }
  return (
    <>
      <div className='bg-white sticky top-0 left-0 z-[20] border-b-[1px] border-gray-100 shadow-md'>
        <div className='relative bg-white z-[22] w-full max-w-xl h-[64px] mx-auto flex items-stretch justify-between px-[15px] '>
          <Link href='/' className='flex items-center  '>
            <Image
              src='/assets/images/gigago-logo.svg'
              width={139}
              height={38}
              alt='gagigo logo'
              className=''
            />
          </Link>
          <div className='flex h-full justify-end items-stretch'>
            <ul className='navigation__list hidden md:flex items-stretch  space-x-4'>
              {itemsMarkup}
            </ul>
            <div className='relative flex md:gap-2 items-center justify-end'>
              <div className='mr-2 ml-2 md:mr-0'>
                <SearchBoxNavigation />
              </div>
              <div className='mr-2 ml-2 sm:mr-0'>
                <ViewCartNavigation />
              </div>
              <div className='md:hidden mx-2'>
                <IoIosMenu className='burger size-[26px]' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='menu-mobile w-full'>
        <div className='relative'>
          <Search
            className={`size-[22px] text-gray-600 absolute top-1/2 left-[14px] -translate-y-1/2 duration-100 cursor-pointer`}
          />
          <input
            placeholder='Where do you want to travel next?'
            className={`flex-1 w-full md:w-[330px] p-[12px_45px_12px_45px] leading-[20px] text-[15px] duration-700 md:duration-500 outline-none border-[1px] border-gray-200 rounded-lg placeholder:text-black/80 placeholder:text-[14px] focus:outline focus:outline-gray-500 focus:outline-offset-0`}
          />
        </div>
        <ul className='mt-[20px]'>{itemsMarkupMobile()}</ul>
      </div>
    </>
  )
}

export default NavigationBar
