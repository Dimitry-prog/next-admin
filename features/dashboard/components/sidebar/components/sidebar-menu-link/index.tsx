'use client';

import { SidebarMenuItemType } from "@/features/dashboard/components/sidebar/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/shared/libs/cn";

type SidebarMenuItemProps = {
  item: SidebarMenuItemType
}

const SidebarMenuLink = ({ item }: SidebarMenuItemProps) => {
  const { icon, title, path } = item;
  const pathname = usePathname();

  return (
    <Link href={path}
          className={cn('p-5 my-1.5 flex items-center gap-2.5 rounded-md hover:bg-bg-hover duration-500', pathname === path && 'bg-bg-hover')}>
      {icon}
      {title}
    </Link>
  );
};

export default SidebarMenuLink;