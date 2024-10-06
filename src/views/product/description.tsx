import React from 'react'
interface DescriptionProps {
  descriptions: Record<string, string>
}
const Description = ({ descriptions }: DescriptionProps) => {
  return (
    <ul className='pl-[20px] flex flex-col gap-y-[10px]'>
      {Object.entries(descriptions).map(([key, value], idx) => {
        return (
          <li key={idx} className='list-disc'>
            <p className='text-[16px]'>
              <span className='font-bold capitalize'>{key + ':'}</span>{' '}
              <span>{value}</span>
            </p>
          </li>
        )
      })}
    </ul>
  )
}

export default Description
