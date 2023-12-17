'use client';

import { MdNotifications, MdOutlineChat, MdPublic, MdSearch, } from "react-icons/md";
import { usePathname } from "next/navigation";

const DashboardNavbar = () => {
  const pathname = usePathname();

  return (
    <div className='p-5 flex items-center justify-between rounded-md bg-bg-light'>
      <p className='text-white font-bold capitalize'>{pathname.split('/').pop()}</p>
      <div className='flex items-center gap-5'>
        <div className='p-2.5 flex items-center gap-2.5 rounded-md bg-bg-hover'>
          <MdSearch/>
          <input type="text" placeholder='Search' className='text-white bg-transparent border-none outline-none'/>
        </div>
        <div className='flex gap-5'>
          <MdOutlineChat size={20}/>
          <MdNotifications size={20}/>
          <MdPublic size={20}/>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;