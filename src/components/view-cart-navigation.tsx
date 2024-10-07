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
import { useCartStore } from '@/stores/use-cart-store'
import CartItem from '@/views/cart/cart-item'
import Button from './ui/button'
const ViewCartNavigation = () => {
  const totalItems = useCartStore((state) => state.totalItems)
  const [isOpen, setIsOpen] = useState(false)
  const onCartClose = () => {
    setIsOpen(false)
  }
  // useEffect(() => {
  //   if (isOpen === false) {
  //     document.body.style.overflow = 'scroll'
  //     document.body.style.maxHeight = '100%'
  //   } else {
  //   }
  // }, [isOpen])
  return (
    <div>
      <Drawer direction='right' open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <div className='relative flex items-center justify-center size-[26px]'>
            {
              <span className='absolute -top-[8px] -right-[8px] size-[16px] rounded-full bg-[#0094ff] flex items-center justify-center text-white text-[10px] shadow-md'>
                {totalItems || 0}
              </span>
            }

            <Image
              src='/assets/images/cart_gigago.svg'
              width={24}
              height={24}
              alt='cart'
              className='cursor-pointer'
            />
          </div>
        </DrawerTrigger>
        <DrawerContent className='h-screen w-[300px] md:w-[480px] fixed top-0 right-0'>
          <DrawerHeader className='flex items-center justify-between px-[30px] py-[25px] border-b-[1px] border-gray-100'>
            <DrawerTitle className='text-[24px]'>My cart</DrawerTitle>
            <div
              onClick={onCartClose}
              className='size-[34px] flex items-center justify-center rounded-md hover:bg-gray-100 duration-100 cursor-pointer'
            >
              <X className='size-[24px]' />
            </div>
          </DrawerHeader>
          <div className='flex-1 max-h-full overflow-y-scroll p-4 flex flex-col gap-y-[16px]'>
            <CartItem onProductClick={() => onCartClose()} />
            <CartItem onProductClick={() => onCartClose()} />
            <CartItem onProductClick={() => onCartClose()} />
            <CartItem onProductClick={() => onCartClose()} />
            <CartItem onProductClick={() => onCartClose()} />
          </div>
          <DrawerFooter>
            <div className='flex flex-col gap-y-[12px]'>
              <Button>View Cart</Button>
              <Button>View Cart</Button>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default ViewCartNavigation
