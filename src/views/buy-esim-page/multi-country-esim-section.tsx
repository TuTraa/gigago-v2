import { multiCountryAreasData } from '@/data/tempData'
import React from 'react'
import GridSection from './grid-section'

const MultiCountryESIMSection = () => {
  const items = multiCountryAreasData

  if (!items) return null
  return <GridSection title='Multicountry eSIM' items={items} />
}

export default MultiCountryESIMSection
