import { cn } from '@/utils/cn'
import Image from 'next/image'
import React from 'react'
import { IoTrashOutline } from 'react-icons/io5'
interface CartItemProps {
  className?: string
}
const CartItem = ({ className }: CartItemProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-8 gap-4 items-center py-[30px] border-b last:border-b-0',
        className,
      )}
    >
      <div className='col-span-1'>
        <Image
          src='/assets/images/vn.webp'
          alt={` flag`}
          width={48}
          height={48}
          className='size-[48px] overflow-hidden rounded-full'
        />
      </div>
      <div className='col-span-3'>
        <h3 className='text-[18px] font-semibold'>Tailwan eSIM</h3>
        <p className='text-[14px] text-gray-500'>Data Plan: 2GB/Day</p>
        <p className='text-[14px] text-gray-500'>Validity: 7 Days</p>
      </div>
      <div className='col-span-2 flex items-center'>
        <button className='px-2 py-1 bg-gray-200 rounded'>-</button>
        <span className='mx-2'>1</span>
        <button className='px-2 py-1 bg-gray-200 rounded'>+</button>
      </div>
      <div className='col-span-1 text-center'>
        <span className='text-[18px] text-primary font-semibold'>$14.00</span>
      </div>
      <div className='col-span-1 text-right'>
        <button className=''>
          <IoTrashOutline className='size-[22px] text-gray-500' />
        </button>
      </div>
    </div>
  )
}

export default CartItem
