import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import { devicesData } from '@/data/tempData'
import { IDevice, TypeBrand } from '@/types'
const DeviceItem = ({ device }: { device: IDevice }) => {
  return (
    <div className='flex items-start'>
      <FaCircleCheck className='mt-[6px] size-[16px] text-[rgb(183,_187,_197)]' />
      <p className='flex-1 pl-[20px] text-[18px] leading-[28px] text-wrap'>
        {device.name}
      </p>
    </div>
  )
}
const TabsContent = ({ brand }: { brand: TypeBrand }) => {
  const data = devicesData.find((data) => data.brand === brand)
  if (!data) return <></>
  return (
    <div className='flex flex-row'>
      <div className='w-full max-w-full md:max-w-[58.3333333333%]'>
        <div className='w-full flex gap-x-[10px] pb-[10px]'>
          <div className='w-full sm:w-1/2 flex flex-col space-y-[14px] pr-[8px]'>
            {data.devices.slice(0, 9).map((device, idx) => {
              return <DeviceItem key={idx} device={device} />
            })}
          </div>
          <div className='w-1/2 hidden sm:flex flex-col space-y-[16px] '>
            {data.devices.slice(9).map((device, idx) => {
              return <DeviceItem key={idx} device={device} />
            })}
          </div>
        </div>
        <div className='block mt-[15px]'>
          <Link href='#' className='text-primary underline'>
            See all devices
          </Link>
        </div>
        {data.descriptions.length > 0 && (
          <div className='mt-[20px]'>
            <ul className='flex flex-col gap-y-[10.5px]'>
              {data.descriptions.map((description, idx) => {
                return (
                  <li key={idx} className=''>
                    <p className='text-[18px] text-[rgb(112,_119,_140)]'>
                      *** {description}
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
      <div className='hidden md:flex justify-end w-full max-w-[41.7%]'>
        <div className='relative size-full'>
          <Image
            src={data.image || '#'}
            alt=''
            width={386}
            height={800}
            className='w-[185px] h-fit object-contain absolute -top-[45px] -right-[25px] animate-zoom-in'
          />
        </div>
      </div>
    </div>
  )
}

export default TabsContent
