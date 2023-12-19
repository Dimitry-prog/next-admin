import DashboardSearch from "@/features/dashboard/components/search";
import Link from "next/link";
import Image from "next/image";
import DashboardPagination from "@/features/dashboard/components/pagination";
import { UserType } from "@/features/dashboard/users/types";

type UsersProps = {
  users: UserType[]
}

const Users = ({ users }: UsersProps) => {

  return (
    <div className='p-5 mt-5 rounded-md bg-bg-light'>
      <div className='flex items-center justify-between'>
        <DashboardSearch placeholder='Search user'/>
        <Link href='/dashboard/users/add' className='p-2.5 rounded bg-purple'>Add New</Link>
      </div>

      {!!users && <h2 className='mt-5 text-xl font-bold text-center'>Users not found</h2>}
      {users.length > 0 && (
        <table className='w-full my-5'>
          <thead>
          <tr>
            <td className='p-2.5'>Name</td>
            <td className='p-2.5'>Email</td>
            <td className='p-2.5'>Created At</td>
            <td className='p-2.5'>Role</td>
            <td className='p-2.5'>Status</td>
            <td className='p-2.5'>Actions</td>
          </tr>
          </thead>
          <tbody>
          {users && users.map(user => (
            <tr key={user.id}>
              <td className='p-2.5'>
                <div className='flex items-center gap-2.5'>
                  <Image
                    src={user.image ? user.image : '/next.svg'}
                    alt='user photo'
                    width={40}
                    height={40}
                    className='rounded-full object-cover'
                  />
                  <h3>{user.name}</h3>
                </div>
              </td>
              <td className='p-2.5'>{user.email}</td>
              <td className='p-2.5'>18.12.2023</td>
              <td className='p-2.5'>{user.isAdmin ? "Admin" : "Client"}</td>
              <td className='p-2.5'>{user.isActive ? "active" : "passive"}</td>
              <td className='p-2.5'>
                <div className='flex gap-2.5'>
                  <Link href={`/dashboard/users/${user.id}`} className='px-2.5 py-1.5 rounded bg-green'>
                    View
                  </Link>
                  <Link href='/' className='px-2.5 py-1.5 rounded bg-red'>
                    Delete
                  </Link>
                </div>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      )}
      {users.length > 0 && <DashboardPagination/>}
    </div>
  );
};

export default Users;