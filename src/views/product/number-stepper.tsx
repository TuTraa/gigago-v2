'use client'
import Button from '@/components/ui/button'
import useDebounce from '@/hooks/use-debounce'
import React, { useEffect } from 'react'
import qs from 'query-string'
import { useRouter, useSearchParams } from 'next/navigation'
const NumberStepper = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [debouncedQuantity, value, setValue] = useDebounce(1, 500)
  const increment = () => {
    setValue(value + 1)
  }
  const decrement = () => {
    if (value > 1) {
      setValue(value - 1)
    }
  }

  useEffect(() => {
    const onChangeAmount = () => {
      if (debouncedQuantity) {
        const current = qs.parse(searchParams.toString())
        const query = {
          ...current,
          a: debouncedQuantity,
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
    }
    onChangeAmount()
  }, [debouncedQuantity, router, searchParams])
  return (
    <div className='flex items-center border-[1px] border-gray-300 rounded-[25px]'>
      <Button
        onClick={decrement}
        className='w-[43px] h-[48px] flex items-center justify-center text-black hover:text-white text-[22px] rounded-l-full bg-transparent hover:bg-primary'
      >
        -
      </Button>
      <input
        value={value}
        className='w-[45px] h-[48px] outline-none border-none font-bold text-[18px] text-center'
      />
      <Button
        onClick={increment}
        className='w-[43px] h-[48px] flex items-center justify-center text-black hover:text-white text-[22px] rounded-r-full bg-transparent hover:bg-primary'
      >
        +
      </Button>
    </div>
  )
}

export default NumberStepper
