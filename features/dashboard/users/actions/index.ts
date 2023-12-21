'use server';

import prisma from '@/shared/libs/prismadb'
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";

export const addUser = async (formData: FormData) => {
  const {
    name,
    email,
    image,
    password,
    phone,
    address,
    isAdmin,
    isActive
  } = Object.fromEntries(formData);

  try {
    const hashedPassword = await bcrypt.hash(password as string, 12);

    await prisma.user.create({
      data: {
        name: name?.toString(),
        email: email?.toString(),
        image: image?.toString(),
        hashedPassword,
        phone: phone?.toString(),
        address: address?.toString(),
        isAdmin: isAdmin === 'true',
        isActive: isActive === 'true',
      }
    });
  } catch (e) {
    console.log(e);
    throw new Error('Failed to create new user');
  }

  revalidatePath('/dashboard/users');
  redirect('/dashboard/users');
}

export const deleteUser = async (formData: FormData) => {
  const {
    id
  } = Object.fromEntries(formData);

  try {
    await prisma.user.delete({
      where: {
        id: id as string
      }
    });
  } catch (e) {
    console.log(e);
    throw new Error('Failed to delete user');
  }

  revalidatePath('/dashboard/users');
}