import Products from "@/features/dashboard/products";
import { fetchedProducts } from "@/features/dashboard/products/services";

type ProductsPageProps = {
  searchParams: { [key: string]: string | undefined }
}

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
  const query = searchParams.q || '';
  const page = parseInt(searchParams.page || '1');
  const { products, totalProducts } = await fetchedProducts(query, page);

  return (
    <Products products={products} totalProducts={totalProducts}/>
  );
};

export default ProductsPage;