'use client'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import './carousel.css'
// import required modules
import { Pagination } from 'swiper/modules'
const FeedbackCarousel = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination]}
        pagination={{
          el: '#containerForBullets',
          type: 'bullets',
          bulletClass: 'swiper-custom-bullet',
          bulletActiveClass: 'swiper-custom-bullet-active',
          clickable: true,
        }}
        className='mySwiper'
      >
        {[1, 2, 3, 4].map((e) => {
          return (
            <SwiperSlide key={e}>
              <div className='flex items-start'>
                <Image
                  src='/assets/images/default-avatar-feedback.jpg'
                  alt='avatar'
                  width={150}
                  height={150}
                  className='size-[65px] rounded-full'
                />
                <div className='pl-[18px] flex-1'>
                  <p className='text-[14px] font-bold leading-[1.17]'>
                    Leon Sutherland
                  </p>
                  <div className='mb-[10px]'>
                    <p className='text-[18px] leading-[1.7]'>
                      Bought eSIM a couple of days in advance of entering
                      Australia. Activated at the border by sending text as per
                      instructions. Immediately up and running with speedy
                      internet usage. Had to make change to APN’s to facilitate
                      personal hotspot usage but again followed simple
                      instructions provided and works perfectly. All in all a
                      great experience from a well priced package.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}

        <div id='containerForBullets'></div>
      </Swiper>
    </div>
  )
}

export default FeedbackCarousel
