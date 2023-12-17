import { ReactNode } from "react";

export type SidebarMenuType = {
  title: string
  list: SidebarMenuItemType[]
}

export type SidebarMenuItemType = {
  title: string
  path: string
  icon: ReactNode,
}