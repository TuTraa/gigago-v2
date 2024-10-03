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
