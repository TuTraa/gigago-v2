import { Search, X } from 'lucide-react'
import React, { useState } from 'react'

const SearchBoxNavigation = ({
  defaultOpen = false,
}: {
  defaultOpen?: boolean
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const onOpen = () => {
    if (!isOpen) {
      setIsOpen(true)
    }
  }
  const onClose = () => {
    if (isOpen) {
      setIsOpen(false)
    }
  }
  return (
    <div className='relative w-fit' onClick={onOpen}>
      <Search
        className={`size-[22px] text-gray-600 absolute ${isOpen ? 'top-1/2 left-[14px] -translate-y-1/2' : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '} duration-100 cursor-pointer`}
      />

      <input
        placeholder='Where do you want to travel next?'
        className={`${isOpen ? 'flex-1 w-[240px] md:w-[330px] p-[12px_45px_12px_45px]' : 'w-0 border-none outline-none p-[12px_10px_12px_45px]'} leading-[20px] text-[15px] duration-700 md:duration-500 outline-none border-[1px] border-gray-200 rounded-lg placeholder:text-black/80 placeholder:text-[14px] focus:outline focus:outline-gray-500 focus:outline-offset-0`}
      />

      {isOpen && (
        <X
          onClick={onClose}
          className='size-[20px] text-gray-500 hover:text-black absolute top-1/2 right-[12px] -translate-y-1/2 cursor-pointer'
        />
      )}
    </div>
  )
}

export default SearchBoxNavigation
