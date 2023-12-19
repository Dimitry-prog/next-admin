import Image from "next/image";

const SingleProduct = () => {
  return (
    <div className='mt-5 flex gap-5'>
      <div className='max-h-72 p-5 flex-1 flex flex-col gap-3 rounded-md bg-bg-light'>
        <Image src='/next.svg' alt='user photo' width={400} height={200}/>
        <h3 className='text-xl text-center font-bold'>Dimitry</h3>
      </div>
      <form className='w-full p-5 flex-3 flex flex-col gap-2.5 justify-between rounded-md bg-bg-light'>
        <label>Title</label>
        <input
          name='title'
          type="text"
          placeholder='Title'
          className='w-full p-8 mb-3 border-2 border-bg-hover rounded bg-transparent outline-none'
        />
        <label>Price</label>
        <input
          name='price'
          type="number"
          placeholder='Price'
          className='w-full p-8 mb-3 border-2 border-bg-hover rounded bg-transparent outline-none'
        />
        <label>Stock</label>
        <input
          name='stock'
          type="number"
          placeholder='Stock'
          className='w-full p-8 mb-3 border-2 border-bg-hover rounded bg-transparent outline-none'
        />
        <label>Color</label>
        <input
          name='color'
          type="text"
          placeholder='Color'
          className='w-full p-8 mb-3 border-2 border-bg-hover rounded bg-transparent outline-none'
        />
        <label>Size</label>
        <input
          name='size'
          type="text"
          placeholder='Size'
          className='w-full p-8 mb-3 border-2 border-bg-hover rounded bg-transparent outline-none'
        />
        <label>Category</label>
        <select
          name="category"
          id="category"
          className='w-full p-8 mb-3 border-2 border-bg-hover rounded bg-transparent outline-none'
        >
          <option value="">Choose a Category</option>
          <option value="phone">Phone</option>
          <option value="car">Car</option>
        </select>
        <label>Description</label>
        <textarea
          name="description"
          id="description"
          rows={16}
          placeholder='Description'
          className='w-full p-8 mb-3 border-2 border-bg-hover rounded bg-transparent outline-none resize-none'
        />
        <button type='submit' className='w-full p-8 rounded bg-green-dark'>Update</button>
      </form>
    </div>
  );
};

export default SingleProduct;