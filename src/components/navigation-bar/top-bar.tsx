import React from 'react'

const TopBar = () => {
  return (
    <>
      <div className='hidden md:block bg-[#f9f9f9]'>
        <div className='w-full max-w-xl h-[44px] mx-auto flex items-center justify-between px-[15px] '>
          <div>
            <p className='text-black text-[12px]'>
              WhatsApps 24/7:{' '}
              <span className='inline-block ml-[2px] text-secondary'>
                +1 657-571-1199
              </span>
            </p>
          </div>
          <div>EN</div>
        </div>
      </div>
    </>
  )
}

export default TopBar
