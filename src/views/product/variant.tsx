'use client'
import Button from '@/components/ui/button'
import { Data, Day } from '@/types'
import { cn } from '@/utils/cn'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import qs from 'query-string'
interface VariantProps {
  data: (Day | Data)[]
  name: string
  valueKey: string
}
const Variant: React.FC<VariantProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const selectedValue = searchParams.get(valueKey)

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString())
    const query = {
      ...current,
      [valueKey]: id,
    }

    if (current[valueKey] === id) {
      query[valueKey] = null
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    )

    router.push(url, { scroll: false })
  }
  return (
    <div className=''>
      <h3 className='mb-[12px] font-semibold text-[18px]'>{name}</h3>
      <div className='flex flex-wrap gap-[8px]'>
        {data.map((filter, idx) => (
          <div key={idx} className=''>
            <Button
              className={cn(
                'px-[16px] py-[8px] text-normal text-black/90 font-normal bg-white border-[2px] border-gray-200 hover:border-primary hover:bg-[linear-gradient(238.61deg,_rgba(174,_125,_255,_0.1)_28.53%,_rgba(174,_125,_255,_0.1)_70.5%)] duration-300 rounded-[8px]',
                selectedValue === filter.id &&
                  'border-primary bg-[linear-gradient(238.61deg,_rgba(174,_125,_255,_0.1)_28.53%,_rgba(174,_125,_255,_0.1)_70.5%)]',
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Variant
