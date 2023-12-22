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

export const updateUser = async (formData: FormData) => {
  const {
    id,
    name,
    phone,
    address,
    isAdmin,
    isActive
  } = Object.fromEntries(formData);

  try {
    const updateFields = {
      name,
      phone,
      address,
      isAdmin,
      isActive
    }
    Object.keys(updateFields).forEach(key => (updateFields[key as keyof typeof updateFields] === '' || undefined) && delete updateFields[key as keyof typeof updateFields]);

    await prisma.user.update({
      where: {
        id: id as string,
      },
      data: {
        name: updateFields.name?.toString(),
        phone: updateFields.phone?.toString(),
        address: updateFields.address?.toString(),
        isAdmin: updateFields.isAdmin === 'true',
        isActive: updateFields.isActive === 'true',
      }
    })

  } catch (e) {
    console.log(e);
    throw new Error('Failed to update user');
  }

  revalidatePath('/dashboard/users');
  redirect('/dashboard/users');
}