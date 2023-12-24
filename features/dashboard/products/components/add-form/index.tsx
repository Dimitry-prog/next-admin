'use client';

import { addProduct } from "@/features/dashboard/products/actions";
import { useFormState } from "react-dom";
import { INIT_ADD_PRODUCT_STATE } from "@/features/dashboard/products/ustils/constants";

const AddProduct = () => {
  const [state, formAction] = useFormState(addProduct, INIT_ADD_PRODUCT_STATE);
  console.log(state)
  return (
    <form action={formAction} className='p-5 mt-5 flex flex-wrap justify-between rounded-md bg-bg-light'>
      <div className='w-[45%] mb-8 flex flex-col gap-1'>
        <input
          name='title'
          type="text"
          placeholder='Title'
          className='w-full p-8 border-2 border-bg-hover rounded bg-transparent outline-none'
        />
        {state.errors?.title && (
          state.errors.title.map(error => (
            <span key={error} className='text-xs text-red'>{error}</span>
          ))
        )}
      </div>

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
        name='image'
        type="text"
        placeholder='Link to img'
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
      {state.message && <span className='text-xs text-center text-red'>{state.message}</span>}
    </form>
  );
};

export default AddProduct;