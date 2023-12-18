const AddProduct = () => {
  return (
    <form className='p-5 mt-5 flex flex-wrap justify-between rounded-md bg-bg-light'>
      <input
        name='title'
        type="text"
        placeholder='Title'
        className='w-[45%] p-8 mb-8 border-2 border-bg-hover rounded bg-transparent outline-none'
      />
      <select
        name="category"
        id="category"
        className='w-[45%] p-8 mb-8 border-2 border-bg-hover rounded bg-transparent outline-none'
      >
        <option value="">Choose a Category</option>
        <option value="phone">Phone</option>
        <option value="car">Car</option>
      </select>
      <input
        name='price'
        type="number"
        placeholder='Price'
        className='w-[45%] p-8 mb-8 border-2 border-bg-hover rounded bg-transparent outline-none'
      />
      <input
        name='stock'
        type="number"
        placeholder='Stock'
        className='w-[45%] p-8 mb-8 border-2 border-bg-hover rounded bg-transparent outline-none'
      />
      <input
        name='color'
        type="text"
        placeholder='Color'
        className='w-[45%] p-8 mb-8 border-2 border-bg-hover rounded bg-transparent outline-none'
      />
      <input
        name='size'
        type="text"
        placeholder='Size'
        className='w-[45%] p-8 mb-8 border-2 border-bg-hover rounded bg-transparent outline-none'
      />
      <textarea
        name="description"
        id="description"
        rows={16}
        placeholder='Description'
        className='w-full p-8 mb-8 border-2 border-bg-hover rounded bg-transparent outline-none resize-none'
      />
      <button type='submit' className='w-full p-8 rounded bg-green-dark'>Submit</button>
    </form>
  );
};

export default AddProduct;