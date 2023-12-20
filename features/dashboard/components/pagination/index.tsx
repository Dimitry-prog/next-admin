'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ITEMS_PER_PAGE } from "@/features/dashboard/utils/constants";

type DashboardPaginationProps = {
  total: number
}

const DashboardPagination = ({ total }: DashboardPaginationProps) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const page = parseInt(searchParams.get('page') || '1');
  const isHasPrev = ITEMS_PER_PAGE * (page - 1) > 0;
  const isHasNext = ITEMS_PER_PAGE * (page - 1) + ITEMS_PER_PAGE < total;

  const handleChangePage = (direction: string) => {
    direction === 'prev'
      ? params.set('page', (page - 1).toString())
      : params.set('page', (page + 1).toString());
    replace(`${pathname}?${params}`);
  };

  return (
    <div className='p-2.5 flex items-center justify-between'>
      <button
        onClick={() => handleChangePage('prev')}
        disabled={!isHasPrev}
        type='button'
        className='px-2.5 py-1.5 rounded bg-purple disabled:cursor-not-allowed disabled:opacity-50'
      >
        Previous
      </button>
      <button
        onClick={() => handleChangePage('next')}
        disabled={!isHasNext}
        type='button'
        className='px-2.5 py-1.5 rounded bg-purple disabled:cursor-not-allowed disabled:opacity-50'
      >
        Next
      </button>
    </div>
  );
};

export default DashboardPagination;