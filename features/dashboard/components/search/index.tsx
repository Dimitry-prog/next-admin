'use client';

import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

type DashboardSearchProps = {
  placeholder: string
}

const DashboardSearch = ({ placeholder }: DashboardSearchProps) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    params.set('page', '1');

    if (!e.target.value) {
      params.delete('q');
    } else {
      params.set('q', e.target.value);
    }
    replace(`${pathname}?${params}`);
  }

  return (
    <div className='p-2.5 flex items-center gap-2.5 rounded-md bg-bg-hover'>
      <MdSearch/>
      <input
        onChange={handleSearch}
        type="text"
        placeholder={placeholder}
        className='text-white bg-transparent border-none outline-none'
      />
    </div>
  );
};

export default DashboardSearch;