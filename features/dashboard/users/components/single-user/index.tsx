import Image from "next/image";

const SingleUser = () => {
  return (
    <div className='mt-5 flex gap-5'>
      <div className='max-h-72 p-5 flex-1 flex flex-col gap-3 rounded-md bg-bg-light'>
        <Image src='/next.svg' alt='user photo' width={400} height={200}/>
        <h3 className='text-xl text-center font-bold'>Dimitry</h3>
      </div>
      <form className='w-full p-5 flex-3 flex flex-col gap-2.5 justify-between rounded-md bg-bg-light'>
        <label>Name</label>
        <input
          name='name'
          type="text"
          placeholder='Name'
          className='w-full p-8 mb-3 border-2 border-bg-hover rounded bg-transparent outline-none'
        />
        <label>Email</label>
        <input
          name='email'
          type="email"
          placeholder='Email'
          className='w-full p-8 mb-3 border-2 border-bg-hover rounded bg-transparent outline-none'
        />
        <label>Password</label>
        <input
          name='password'
          type="password"
          placeholder='Password'
          className='w-full p-8 mb-3 border-2 border-bg-hover rounded bg-transparent outline-none'
        />
        <label>Phone</label>
        <input
          name='phone'
          type="tel"
          placeholder='Phone'
          className='w-full p-8 mb-3 border-2 border-bg-hover rounded bg-transparent outline-none'
        />
        <label>isAdmin?</label>
        <select
          name="isAdmin"
          id="isAdmin"
          className='w-full p-8 mb-3 border-2 border-bg-hover rounded bg-transparent outline-none'
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <label>isActive?</label>
        <select
          name="isActive"
          id="isActive"
          className='w-full p-8 mb-3 border-2 border-bg-hover rounded bg-transparent outline-none'
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <label>Address</label>
        <textarea
          name="address"
          id="address"
          rows={16}
          placeholder='Address'
          className='w-full p-8 mb-3 border-2 border-bg-hover rounded bg-transparent outline-none resize-none'
        />
        <button type='submit' className='w-full p-8 rounded bg-green-dark'>Submit</button>
      </form>
    </div>
  );
};

export default SingleUser;