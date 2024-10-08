import React from 'react'
import CartItem from './cart-item'

const CartSection = () => {
  return (
    <div className='grid grid-cols-12 gap-x-[60px]'>
      <div className='col-span-8'>
        <div className='flex flex-col border-y-[1px] border-gray-200'>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
      <div className='col-span-4'>
        <div className='min-h-[261px] bg-gray-100 rounded-xl'></div>
      </div>
    </div>
  )
}

export default CartSection
