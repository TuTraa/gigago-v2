import BlogCard from '@/components/blog-card'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import { blogData } from '@/data/tempData'
import React from 'react'

const items = {
  Home: '/',
  Blog: '/blog',
}
const BlogPage = async () => {
  const blogs = blogData
  if (!blogs) return null
  return (
    <div className='grid grid-cols-12 pb-[120px]'>
      <div className='col-span-12 min-h-[390px] relative'>
        <div className='max-w-xl w-full mx-auto px-[15px]'>
          <div className='bg-background-blog absolute z-[-1] top-0 left-0 size-full bg-cover bg-no-repeat' />
          <div className='flex items-center justify-start min-h-[65px] mb-[45px]'>
            <Breadcrumbs items={items} className='' />
          </div>
          <div className=''>
            <h1 className='font-semibold text-[34px] text-center '>
              Welcome to <span className='text-primary'>Gigago Blog</span>
            </h1>
            <p className='text-[18px] text-center mt-[15px] mb-[10px]'>
              Your helpful resources for amazing journeys
            </p>
          </div>
        </div>
      </div>
      <div className='col-span-12'>
        <div className='max-w-xl w-full mx-auto px-[15px]'>
          <div className='-mt-[80px] grid grid-cols-6 gap-x-[40px] gap-y-[40px]'>
            {blogs.map((blog, idx) => (
              <BlogCard key={idx} data={blog} className='col-span-2' />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
