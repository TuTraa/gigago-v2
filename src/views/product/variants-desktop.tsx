'use client'
import React from 'react'
import Variant from './variant'
import { X } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string'
const VariantsDesktop = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const isHaveSearchParams = searchParams.size > 0

  const clearParams = () => {
    const url = qs.stringifyUrl({
      url: pathname,
      query: {},
    })
    router.push(url, { scroll: false })
  }
  return (
    <div className='relative flex flex-col gap-y-[24px]'>
      {
        <button
          onClick={clearParams}
          className={`absolute top-[5px] right-[85px] w-fit h-auto flex items-center hover:underline ${isHaveSearchParams ? 'animate-drop-in' : 'scale-0 opacity-0'} duration-300`}
        >
          <X className='size-[20px] text-gray-400 mr-[4px]' />
          <span className='text-primary font-semibold'>Clear</span>
        </button>
      }
      <Variant
        valueKey='dayId'
        name='Service days'
        data={[
          {
            id: '1',
            name: '5',
            value: '5',
          },
          {
            id: '2',
            name: '7',
            value: '7',
          },
          {
            id: '3',
            name: '15',
            value: '15',
          },
        ]}
      />
      <Variant
        valueKey='dataId'
        name='Data'
        data={[
          {
            id: '1',
            name: '1GB/day',
            value: '1',
          },
          {
            id: '2',
            name: '2GB/day',
            value: '2',
          },
          {
            id: '3',
            name: '3GB/day',
            value: '3',
          },
        ]}
      />
    </div>
  )
}

export default VariantsDesktop
