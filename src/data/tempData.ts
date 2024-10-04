import { IArea, IBrandDevice } from '@/types'

export const localAreasData: IArea[] = [
  {
    title: 'Asia',
    countries: [
      { country: 'Taiwan', price: '$4' },
      { country: 'Thailand', price: '$6.9' },
      { country: 'Hong Kong', price: '$2.9' },
      { country: 'Singapore', price: '$1.5' },
      { country: 'Macao', price: '$2.9' },
      { country: 'Indonesia', price: '$2.9' },
      { country: 'Malaysia', price: '$3' },
      { country: 'Cambodia', price: '$4.5' },
      { country: 'Philippines', price: '$10.5' },
      { country: 'South Korea', price: '$7' },
      { country: 'Japan', price: '$7.5' },
      { country: 'Qatar', price: '$5' },
      { country: 'India', price: '$14.5' },
      { country: 'Mongolia', price: '$9.9' },
      { country: 'Maldives', price: '$44' },
      { country: 'Vietnam', price: '$8.9' },
    ],
  },
  {
    title: 'Europe',
    countries: [
      { country: 'Denmark', price: '$4' },
      { country: 'Sweden', price: '$6.9' },
      { country: 'Poland', price: '$2.9' },
      { country: 'Portugal', price: '$1.5' },
      { country: 'Ireland', price: '$2.9' },
      { country: 'Czech Republic', price: '$2.9' },
      { country: 'Austria', price: '$3' },
      { country: 'Belize', price: '$4.5' },
      { country: 'Botswana', price: '$10.5' },
      { country: 'Belgium', price: '$7' },
      { country: 'United Kingdom', price: '$7.5' },
      { country: 'France', price: '$5' },
      { country: 'Findland', price: '$14.5' },
      { country: 'Spain', price: '$9.9' },
      { country: 'Switzerland', price: '$44' },
    ],
  },
]

export const multiCountryAreasData: IArea[] = [
  {
    title: 'Asia',
    countries: [{ country: 'Asia', price: '$6.9' }],
  },
  {
    title: 'Europe',
    countries: [{ country: 'Europe', price: '$3' }],
  },
]

export const devicesData: IBrandDevice[] = [
  {
    brand: 'apple',
    devices: [
      { name: 'iPhone XS, XS Max, XR' },
      { name: 'iPhone 16, 15 Plus, 16 Pro' },
      { name: 'iPhone 15' },
      { name: 'iPhone 14, 14 Plus, Pro' },
      { name: 'iPhone MA (2022)' },
      { name: 'iPhone SE (3rd generation)' },
      { name: 'iPhone SE (2nd generation)' },
      { name: 'iPhone SE (1st generation)' },
    ],
  },
  {
    brand: 'samsung',
    devices: [
      { name: 'Galaxy S23, S23+, S23 Ultra' },
      { name: 'Galaxy Note 20, 20+, 20 Ultra' },
      { name: 'Galaxy S22, S22+ 5G, S22 Ultra' },
      { name: 'Galaxy Z Fold series' },
      { name: 'Galaxy Watch' },
      { name: 'Galaxy S21, S21+ 5G, S21 Ultra' },
      { name: 'Galaxy S20, S20+, S20 Ultra' },
      { name: 'Galaxy Z Flip series' },
    ],
  },
  {
    brand: 'google-pixel',
    devices: [
      { name: 'Google Pixel 7, 7 Pro' },
      { name: 'Google Pixel 3, 3a XL' },
      { name: 'Google Pixel 6, 6a, 6 Pro' },
      { name: 'Google Pixel 4, 4a, 4 XL' },
      { name: 'Google Pixel 5' },
      { name: 'Google Pixel 3, 3 XL' },
    ],
  },
  {
    brand: 'others',
    devices: [
      { name: 'iPhone XS, XS Max, XR' },
      { name: 'iPhone 16, 15 Plus, 16 Pro' },
      { name: 'iPhone 15' },
      { name: 'iPhone 14, 14 Plus, Pro' },
      { name: 'iPhone MA (2022)' },
      { name: 'iPhone SE (3rd generation)' },
      { name: 'iPhone SE (2nd generation)' },
      { name: 'iPhone SE (1st generation)' },
    ],
  },
]
