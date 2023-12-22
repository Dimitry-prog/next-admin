import Image from "next/image";
import { updateUser } from "@/features/dashboard/users/actions";
import { UserType } from "@/features/dashboard/users/types";

type SingleUserProps = {
  user: UserType
}

const SingleUser = ({ user }: SingleUserProps) => {

  return (
    <>
      {user ? (
        <div className='mt-5 flex gap-5'>
          <div className='max-h-72 p-5 flex-1 flex flex-col gap-3 rounded-md bg-bg-light'>
            <Image src={user.image ? user.image : '/next.svg'} alt='user photo' width={400} height={200}/>
            <h3 className='text-xl text-center font-bold'>{user.name}</h3>
          </div>
          <form
            action={updateUser}
            className='w-full p-5 flex-3 flex flex-col gap-2.5 justify-between rounded-md bg-bg-light'
          >
            <input type='hidden' value={user.id} name='id'/>
            <label>Name</label>
            <input
              name='name'
              type="text"
              placeholder={user.name}
              className='w-full p-8 mb-3 border-2 border-bg-hover rounded bg-transparent outline-none'
            />
            <label>Phone</label>
            <input
              name='phone'
              type="tel"
              placeholder={user.phone as string}
              className='w-full p-8 mb-3 border-2 border-bg-hover rounded bg-transparent outline-none'
            />
            <label>isAdmin?</label>
            <select
              name="isAdmin"
              id="isAdmin"
              className='w-full p-8 mb-3 border-2 border-bg-hover rounded bg-transparent outline-none'
            >
              <option value="true" selected={user.isAdmin}>Yes</option>
              <option value="false" selected={!user.isAdmin}>No</option>
            </select>
            <label>isActive?</label>
            <select
              name="isActive"
              id="isActive"
              className='w-full p-8 mb-3 border-2 border-bg-hover rounded bg-transparent outline-none'
            >
              <option value="true" selected={user.isActive}>Yes</option>
              <option value="false" selected={!user.isActive}>No</option>
            </select>
            <label>Address</label>
            <textarea
              name="address"
              id="address"
              rows={16}
              placeholder={user.address as string}
              className='w-full p-8 mb-3 border-2 border-bg-hover rounded bg-transparent outline-none resize-none'
            />
            <button type='submit' className='w-full p-8 rounded bg-green-dark'>Update</button>
          </form>
        </div>
      ) : <h2 className='text-xl font-bold'>LOADING...</h2>}
    </>
  );
};

export default SingleUser;