export interface INavItem {
  text: string
  href?: string
  isSubTabMenu: boolean
  subListMenu: IChilNavItem[]
}
export interface IChilNavItem {
  text: string
  href: string
}
export interface ICountry {
  country: string
  price: string
}
export interface IArea {
  title: string
  countries: ICountry[]
}
export type TypeBrand = 'apple' | 'samsung' | 'google-pixel' | 'others'
export interface IDevice {
  name: string
}
export interface IBrandDevice {
  brand: TypeBrand
  image: string
  descriptions: string[]
  devices: IDevice[]
}

export interface IQuestion {
  title: string
  description: string
}

export interface IChildAreaMobile {
  text: string
  href: string
}

export interface IAreaMobile {
  text: string
  childrens: IChildAreaMobile[]
}
