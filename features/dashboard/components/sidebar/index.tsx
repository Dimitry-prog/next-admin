import SidebarUserInfo from "@/features/dashboard/components/sidebar/components/sidebar-user-info";
import { SIDEBAR_MENU_ITEMS } from "@/features/dashboard/components/sidebar/constants";
import { useMemo } from "react";
import SidebarMenuLink from "@/features/dashboard/components/sidebar/components/sidebar-menu-link";
import { MdLogout } from "react-icons/md";
import { signOut } from "@/shared/libs/auth";

const DashboardSideBar = () => {

  const menuItems = useMemo(() => {
    return SIDEBAR_MENU_ITEMS.map(section => (
      <ul key={section.title} className='sticky flex flex-col'>
        <li>
          <span className='my-2.5 text-white-dark font-bold'>{section.title}</span>
          {section.list.map(item => (
            <SidebarMenuLink key={item.path} item={item}/>
          ))}
        </li>
      </ul>
    ));
  }, []);

  return (
    <aside className='p-5 flex-1 bg-bg-light'>
      <SidebarUserInfo/>
      {menuItems}
      <form action={async () => {
        'use server';
        await signOut();
      }}>
        <button
          type='submit'
          className='w-full p-5 my-1.5 flex items-center gap-2.5 rounded-md hover:bg-bg-hover duration-500'
        >
          <MdLogout/>
          Logout
        </button>
      </form>
    </aside>
  );
};

export default DashboardSideBar;