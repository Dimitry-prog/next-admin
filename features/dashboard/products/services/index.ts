import prisma from "@/shared/libs/prismadb";
import { ITEMS_PER_PAGE } from "@/features/dashboard/utils/constants";

export const fetchedProducts = async (query: string, page: number) => {

  try {
    const totalProducts = await prisma.product.count({
      where: {
        title: {
          contains: query,
          mode: 'insensitive'
        }
      }
    });
    const products = await prisma.product.findMany({
      where: {
        title: {
          contains: query,
          mode: 'insensitive'
        }
      },
      take: ITEMS_PER_PAGE,
      skip: ITEMS_PER_PAGE * (page - 1)
    });

    if (!products || products.length === 0) {
      return {
        products: [],
        totalProducts
      }
    }
    return { products, totalProducts };
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch products!");
  }
}

export const fetchedProduct = async (id: string) => {

  try {
    const product = await prisma.product.findUnique({
      where: {
        id
      }
    })
    if (!product) {
      throw new Error("Failed to fetch product!");
    }
    return product;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch product!");
  }
}