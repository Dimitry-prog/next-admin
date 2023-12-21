'use server';

import prisma from '@/shared/libs/prismadb'
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const addProduct = async (formData: FormData) => {
  const {
    title,
    description,
    image,
    price,
    color,
    stock,
  } = Object.fromEntries(formData);

  try {
    await prisma.product.create({
      data: {
        title: title?.toString(),
        description: description?.toString(),
        image: image?.toString(),
        price: price?.toString(),
        color: color?.toString(),
        stock: stock?.toString(),
      }
    });
  } catch (e) {
    console.log(e);
    throw new Error('Failed to create new product');
  }

  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
}

export const deleteProduct = async (formData: FormData) => {
  const {
    id
  } = Object.fromEntries(formData);

  try {
    await prisma.product.delete({
      where: {
        id: id as string
      }
    });
  } catch (e) {
    console.log(e);
    throw new Error('Failed to delete product');
  }

  revalidatePath('/dashboard/products');
}