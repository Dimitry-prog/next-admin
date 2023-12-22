import SingleProduct from "@/features/dashboard/products/components/single-product";
import { fetchedProduct } from "@/features/dashboard/products/services";

type ProductPageProps = {
  params: {
    productId: string
  }
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await fetchedProduct(params.productId);

  return (
    <SingleProduct product={product}/>
  );
};

export default ProductPage;