import { IPost } from '@/types'
import Link from 'next/link'
import React from 'react'
import BlurImage from './blur-image'
import { placeholderBlurhash } from '@/utils/placeholderBlurhash'
import { cn } from '@/utils/cn'
interface BlogCardProps {
  data: IPost
  className?: string
}
const BlogCard = ({ data, className }: BlogCardProps) => {
  return (
    <Link href='#' className={cn('group', className)}>
      <div className='overflow-hidden rounded-[16px] bg-white shadow-md transition-all duration-200 group-hover:shadow-xl'>
        <BlurImage
          src={data.urlImage}
          alt={data.title ?? 'Blog Post'}
          width={1024}
          height={683}
          className='h-[256px] w-full object-cover'
          placeholder='blur'
          blurDataURL={data.imageBlurhash ?? placeholderBlurhash}
        />
      </div>
      <div className='py-6'>
        <h3 className='text-[24px] font-semibold mb-[12px] hover:underline'>
          {data.title}
        </h3>
        <p>{data.description}</p>
      </div>
    </Link>
  )
}

export default BlogCard
