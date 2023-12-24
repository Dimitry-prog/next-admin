'use server';

import prisma from '@/shared/libs/prismadb'
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { AddProductStateType } from "@/features/dashboard/products/types";
import { addProductSchema } from "@/features/dashboard/products/validation";

export const addProduct = async (prevState: AddProductStateType, formData: FormData) => {
  const validatedFields = addProductSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    image: formData.get('image'),
    price: formData.get('price'),
    color: formData.get('color'),
    stock: formData.get('stock'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Product.',
    };
  }

  try {
    await prisma.product.create({
      data: validatedFields.data
    });
  } catch (e) {
    console.log(e);
    return {
      message: 'Database Error: Failed to Create Product.',
    };
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