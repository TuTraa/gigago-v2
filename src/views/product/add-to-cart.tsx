'use client'
import Button from '@/components/ui/button'
import { cn } from '@/utils/cn'
import React from 'react'
interface AddToCartProps {
  className?: string
}
const AddToCart = ({ className }: AddToCartProps) => {
  const handleAddToCart = () => {
    // Something logic here
  }
  return (
    <Button
      onClick={handleAddToCart}
      className={cn(
        `h-[48px] px-[10px] sm:px-[36px] leading-[20px] text-white bg-primary rounded-[25px] hover:shadow-[inset_0_0_0_100px_rgba(0,_0,_0,_.2)]`,
        className,
      )}
    >
      Add to cart - $87.00
      <strong className='inline ml-[4px] text-[12px] leading-[12px] font-medium uppercase '>
        USD
      </strong>
    </Button>
  )
}

export default AddToCart
