'use client';

import { MdSearch } from "react-icons/md";

type DashboardSearchProps = {
  placeholder: string
}

const DashboardSearch = ({ placeholder }: DashboardSearchProps) => {
  return (
    <div className='p-2.5 flex items-center gap-2.5 rounded-md bg-bg-hover'>
      <MdSearch/>
      <input type="text" placeholder={placeholder} className='text-white bg-transparent border-none outline-none'/>
    </div>
  );
};

export default DashboardSearch;