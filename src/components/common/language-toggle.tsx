'use client'
import { useState } from 'react'
// import i18n from 'i18next'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { IoMdArrowDropdown } from 'react-icons/io'
import Image from 'next/image'

interface MultiLanguage {
  code: string
  title: string
  img: string
}

const listMultiLanguage: MultiLanguage[] = [
  {
    code: 'vi',
    title: 'Việt Nam',
    img: '/assets/images/flag-vi.webp',
  },
  {
    code: 'en',
    title: 'English',
    img: '/assets/images/flag-en.webp',
  },
]

// interface P {
//   type?: string
// }
export default function LanguageToggleNotAuth() {
  const findObjectLangauge = (code: string): MultiLanguage => {
    return listMultiLanguage.find((item) => item.code == code) as MultiLanguage
  }

  const [currentLanguage, setCurrentLanguage] = useState<MultiLanguage>(
    // findObjectLangauge(i18n.language),
    findObjectLangauge('vi'),
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='flex items-center justify-center cursor-pointer'>
          <div className='relative h-6 w-6 rounded-full cursor-pointer duration-300 ease-in-out hover:shadow-2xl'>
            <Avatar className='h-6 w-6 cursor-pointer'>
              <AvatarImage src={currentLanguage?.img} alt='' />
              <AvatarFallback>...</AvatarFallback>
            </Avatar>
          </div>
          <p className='text-md font-medium ms-2 group-hover:text-textColorP duration-300 ease-in-out'>
            {currentLanguage?.title}
          </p>
          <IoMdArrowDropdown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`w-auto z-[100]`}>
        {listMultiLanguage.map((item: MultiLanguage, index) => {
          return (
            <DropdownMenuItem
              key={index}
              onClick={() => {
                setCurrentLanguage(findObjectLangauge(item.code))
                // i18n.changeLanguage(item.code)
                // currentLanguage.code === 'vi' ? 'en' : 'vi'
              }}
              className='group cursor-pointer flex items-center hover:text-textColorP text-textColorBase'
            >
              <Image
                height={24}
                width={24}
                className='w-6 h-6 rounded-full object-cover'
                src={item.img}
                alt='curent language'
              />
              <p
                id='isLang'
                className='text-md font-medium ms-3 group-hover:text-textColorP duration-300 ease-in-out'
              >
                {item.title}
              </p>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
