import Image from "next/image";
import { ProductType } from "@/features/dashboard/products/types";
import { updateProduct } from "@/features/dashboard/products/actions";

type SingleProductProps = {
  product: ProductType
}

const SingleProduct = ({ product }: SingleProductProps) => {
  return (
    <>
      {product ? (
        <div className='mt-5 flex gap-5'>
          <div className='max-h-72 p-5 flex-1 flex flex-col gap-3 rounded-md bg-bg-light'>
            <Image src={product.image ? product.image : '/next.svg'} alt='user photo' width={400} height={200}/>
            <h3 className='text-xl text-center font-bold'>{product.title}</h3>
          </div>
          <form
            action={updateProduct}
            className='w-full p-5 flex-3 flex flex-col gap-2.5 justify-between rounded-md bg-bg-light'
          >
            <input type="hidden" name='id' value={product.id}/>
            <label>Title</label>
            <input
              name='title'
              type="text"
              placeholder={product.title}
              className='w-full p-8 mb-3 border-2 border-bg-hover rounded bg-transparent outline-none'
            />
            <label>Price</label>
            <input
              name='price'
              type="number"
              placeholder={product.price}
              className='w-full p-8 mb-3 border-2 border-bg-hover rounded bg-transparent outline-none'
            />
            <label>Stock</label>
            <input
              name='stock'
              type="number"
              placeholder={product.stock}
              className='w-full p-8 mb-3 border-2 border-bg-hover rounded bg-transparent outline-none'
            />
            <label>Color</label>
            <input
              name='color'
              type="text"
              placeholder={product.color}
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
              placeholder={product.description}
              className='w-full p-8 mb-3 border-2 border-bg-hover rounded bg-transparent outline-none resize-none'
            />
            <button type='submit' className='w-full p-8 rounded bg-green-dark'>Update</button>
          </form>
        </div>
      ) : <h2 className='text-xl font-bold'>LOADING...</h2>}
    </>
  );
};

export default SingleProduct;