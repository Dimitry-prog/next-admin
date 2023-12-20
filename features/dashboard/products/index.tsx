import DashboardSearch from "@/features/dashboard/components/search";
import Link from "next/link";
import Image from "next/image";
import DashboardPagination from "@/features/dashboard/components/pagination";
import { ProductType } from "@/features/dashboard/products/types";

type ProductsProps = {
  products: ProductType[]
  totalProducts: number
}

const Products = ({ products, totalProducts }: ProductsProps) => {
  return (
    <div className='p-5 mt-5 rounded-md bg-bg-light'>
      <div className='flex items-center justify-between'>
        <DashboardSearch placeholder='Search product'/>
        <Link href='/dashboard/products/add' className='p-2.5 rounded bg-purple'>Add New</Link>
      </div>

      {!!products && <h2 className='mt-5 text-xl font-bold text-center'>products not found</h2>}
      {products?.length > 0 && (
        <table className='w-full my-5'>
          <thead>
          <tr>
            <td className='p-2.5'>Title</td>
            <td className='p-2.5'>Description</td>
            <td className='p-2.5'>Price</td>
            <td className='p-2.5'>Color</td>
            <td className='p-2.5'>Stock</td>
            <td className='p-2.5'>Created At</td>
            <td className='p-2.5'>Actions</td>
          </tr>
          </thead>
          <tbody>
          {products && products.map(product => (
            <tr key={product.id}>
              <td className='p-2.5'>
                <div className='flex items-center gap-2.5'>
                  <Image
                    src={product.image ? product.image : '/next.svg'}
                    alt='product photo'
                    width={40}
                    height={40}
                    className='rounded-full object-cover'
                  />
                  <h3>{product.title}</h3>
                </div>
              </td>
              <td className='p-2.5'>{product.description}</td>
              <td className='p-2.5'>${product.price}</td>
              <td className='p-2.5'>{product.color}</td>
              <td className='p-2.5'>{product.stock}</td>
              <td className='p-2.5'>{product.createdAt.toString().slice(4, 16)}</td>
              <td className='p-2.5'>
                <div className='flex gap-2.5'>
                  <Link href={`/dashboard/products/${product.id}`} className='px-2.5 py-1.5 rounded bg-green'>
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
      {products?.length > 0 && <DashboardPagination total={totalProducts}/>}
    </div>
  );
};

export default Products;