import { localAreasData } from '@/data/tempData'
import React from 'react'
import GridSection from './grid-section'

const LocalESIMSection = () => {
  const items = localAreasData

  if (!items) return null
  return <GridSection title='Local eSIM' items={items} />
}

export default LocalESIMSection
