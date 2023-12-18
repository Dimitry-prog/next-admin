const AddUser = () => {
  return (
    <form className='p-5 mt-5 flex flex-wrap justify-between rounded-md bg-bg-light'>
      <input
        name='name'
        type="text"
        placeholder='Name'
        className='w-[45%] p-8 mb-8 border-2 border-bg-hover rounded bg-transparent outline-none'
      />
      <input
        name='email'
        type="email"
        placeholder='Email'
        className='w-[45%] p-8 mb-8 border-2 border-bg-hover rounded bg-transparent outline-none'
      />
      <input
        name='password'
        type="password"
        placeholder='Password'
        className='w-[45%] p-8 mb-8 border-2 border-bg-hover rounded bg-transparent outline-none'
      />
      <input
        name='phone'
        type="tel"
        placeholder='Phone'
        className='w-[45%] p-8 mb-8 border-2 border-bg-hover rounded bg-transparent outline-none'
      />
      <select
        name="isAdmin"
        id="isAdmin"
        className='w-[45%] p-8 mb-8 border-2 border-bg-hover rounded bg-transparent outline-none'
      >
        <option value="false" selected>Is Admin?</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      <select
        name="isActive"
        id="isActive"
        className='w-[45%] p-8 mb-8 border-2 border-bg-hover rounded bg-transparent outline-none'
      >
        <option value="true" selected disabled>Is Active?</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      <textarea
        name="address"
        id="address"
        rows={16}
        placeholder='Address'
        className='w-full p-8 mb-8 border-2 border-bg-hover rounded bg-transparent outline-none resize-none'
      />
      <button type='submit' className='w-full p-8 rounded bg-green-dark'>Submit</button>
    </form>
  );
};

export default AddUser;