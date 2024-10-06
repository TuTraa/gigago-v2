import { cn } from '@/utils/cn'
import React from 'react'

const RightSection = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <section className={cn('flex flex-col pb-[50px]', className)}>
      {children}
    </section>
  )
}

export default RightSection
