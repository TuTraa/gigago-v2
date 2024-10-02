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
