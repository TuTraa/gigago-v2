'use client'
import React, { useState } from 'react'
import type { ComponentProps } from 'react'
import Image from 'next/image'
import { cn } from '@/utils/cn'
const BlurImage = (props: ComponentProps<typeof Image>) => {
  const [isLoading, setLoading] = useState(true)
  return (
    <Image
      {...props}
      alt={props.alt}
      className={cn(
        props.className,
        'duration-700 linear',
        isLoading ? 'scale-105 blur-lg' : 'scale-100 blur-0',
      )}
      onLoad={() => setLoading(false)}
    />
  )
}

export default BlurImage
