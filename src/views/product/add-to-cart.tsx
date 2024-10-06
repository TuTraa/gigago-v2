'use client'
import Button from '@/components/ui/button'
import React from 'react'

const AddToCart = () => {
  const handleAddToCart = () => {
    // Something logic here
  }
  return (
    <Button
      onClick={handleAddToCart}
      className='h-[48px] px-[36px] leading-[20px] text-white bg-primary rounded-[25px] hover:shadow-[inset_0_0_0_100px_rgba(0,_0,_0,_.2)]'
    >
      ADD TO CART - $87.00
      <strong className='inline ml-[4px] text-[12px] leading-[12px] font-medium uppercase '>
        USD
      </strong>
    </Button>
  )
}

export default AddToCart
