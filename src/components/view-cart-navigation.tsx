'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { X } from 'lucide-react'
const ViewCartNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => {
    setIsOpen(false)
  }
  return (
    <div>
      <Drawer direction='right' open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <div className='flex items-center justify-center size-[26px]'>
            <Image
              src='/assets/images/cart_gigago.svg'
              width={24}
              height={24}
              alt='cart'
              className='cursor-pointer'
            />
          </div>
        </DrawerTrigger>
        <DrawerContent className='h-screen w-[300px] md:w-[500px] fixed top-0 right-0'>
          <div className=''>
            <DrawerHeader className='flex items-center justify-between px-[30px] py-[25px]'>
              <DrawerTitle className='text-[24px]'>My cart</DrawerTitle>
              <div
                onClick={onClose}
                className='size-[34px] flex items-center justify-center rounded-md hover:bg-gray-100 duration-100 cursor-pointer'
              >
                <X className='size-[24px]' />
              </div>
            </DrawerHeader>
            <div className='p-4 pb-0'>
              <div className='flex items-center justify-center space-x-2'></div>
              <div className='mt-3 h-[120px]'></div>
            </div>
            <DrawerFooter></DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default ViewCartNavigation

// Dùng cho chi tiết hoặc giỏ hàng tăng giảm số lượng
{
  /* <Button
variant='outline'
size='icon'
className='h-8 w-8 shrink-0 rounded-full'
onClick={() => onClick(-10)}
disabled={goal <= 200}
>
<Minus className='h-4 w-4' />
<span className='sr-only'>Decrease</span>
</Button>
<div className='flex-1 text-center'>
<div className='text-7xl font-bold tracking-tighter'>
  {goal}
</div>
<div className='text-[0.70rem] uppercase text-muted-foreground'>
  Calories/day
</div>
</div>
<Button
variant='outline'
size='icon'
className='h-8 w-8 shrink-0 rounded-full'
onClick={() => onClick(10)}
disabled={goal >= 400}
>
<Plus className='h-4 w-4' />
<span className='sr-only'>Increase</span>
</Button> */
}

{
  /* <ResponsiveContainer width='100%' height='100%'>
                  <BarChart data={data}>
                    <Bar
                      dataKey='goal'
                      style={
                        {
                          fill: 'hsl(var(--foreground))',
                          opacity: 0.9,
                        } as React.CSSProperties
                      }
                    />
                  </BarChart>
                </ResponsiveContainer> */
}

{
  /* <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant='outline'>Cancel</Button>
              // </DrawerClose> */
}
