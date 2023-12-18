import Image from "next/image";
import { cn } from "@/app/shared/libs/cn";

const Transaction = () => {
  return (
    <div className='p-5 rounded-md bg-bg-light'>
      <h2 className='mb-5 text-xl text-white-dark font-extralight'>Latest Transactions</h2>

      <table className='w-full'>
        <thead>
        <tr>
          <td className='p-2.5'>Name</td>
          <td className='p-2.5'>Status</td>
          <td className='p-2.5'>Date</td>
          <td className='p-2.5'>Amount</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td className='p-2.5'>
            <div className='flex items-center gap-2.5'>
              <Image
                src='/next.svg'
                alt='user photo'
                width={40}
                height={40}
                className='rounded-full object-cover'
              />
              Dimitry
            </div>
          </td>
          <td className='p-2.5'>
            <p className={cn('p-1.5 text-white rounded-sm')}>Pending</p>
          </td>
          <td className='p-2.5'>17.12.2024</td>
          <td className='p-2.5'>$900</td>
        </tr>

        <tr>
          <td className='p-2.5'>
            <div className='flex items-center gap-2.5'>
              <Image
                src='/next.svg'
                alt='user photo'
                width={40}
                height={40}
                className='rounded-full object-cover'
              />
              Dimitry
            </div>
          </td>
          <td className='p-2.5'>
            <p className={cn('p-1.5 text-white rounded-sm')}>Done</p>
          </td>
          <td className='p-2.5'>17.12.2024</td>
          <td className='p-2.5'>$900</td>
        </tr>

        <tr>
          <td className='p-2.5'>
            <div className='flex items-center gap-2.5'>
              <Image
                src='/next.svg'
                alt='user photo'
                width={40}
                height={40}
                className='rounded-full object-cover'
              />
              Dimitry
            </div>
          </td>
          <td className='p-2.5'>
            <p className={cn('p-1.5 text-white rounded-sm')}>Cancelled</p>
          </td>
          <td className='p-2.5'>17.12.2024</td>
          <td className='p-2.5'>$900</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;