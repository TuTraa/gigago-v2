// import { IChilNavItem } from '@/types'
import { cn } from '@/utils/cn'
import React from 'react'
// {
//   menuSubList,
// }: {
//   menuSubList: IChilNavItem[]
// }
const NavigationSubList = () => {
  return (
    <ul className={cn('navigation__subList absolute top-full right-0')}></ul>
  )
}

export default NavigationSubList
