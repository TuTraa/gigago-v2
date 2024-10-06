import React from 'react'
type ProductTitleProps = {
  title: string
  className?: string
}
const ProductTitle = ({ title, className }: ProductTitleProps) => {
  return (
    <div className={className}>
      <h1 className='text-[28px] font-semibold'>{title}</h1>
    </div>
  )
}

export default ProductTitle
