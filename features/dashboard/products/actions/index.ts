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

export const updateProduct = async (formData: FormData) => {
  const {
    id,
    title,
    price,
    stock,
    color,
    description
  } = Object.fromEntries(formData);

  try {
    const updateFields = {
      title,
      price,
      stock,
      color,
      description
    }
    Object.keys(updateFields).forEach(key => (updateFields[key as keyof typeof updateFields] === '' || undefined) && delete updateFields[key as keyof typeof updateFields]);

    await prisma.product.update({
      where: {
        id: id as string,
      },
      data: {
        title: updateFields.title?.toString(),
        price: updateFields.price?.toString(),
        stock: updateFields.stock?.toString(),
        color: updateFields.color?.toString(),
        description: updateFields.description?.toString(),
      }
    })

  } catch (e) {
    console.log(e);
    throw new Error('Failed to update product');
  }

  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
}