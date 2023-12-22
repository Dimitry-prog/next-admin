import prisma from "@/shared/libs/prismadb";
import { ITEMS_PER_PAGE } from "@/features/dashboard/utils/constants";

export const fetchedUsers = async (query: string, page: number) => {

  try {
    const totalUsers = await prisma.user.count({
      where: {
        name: {
          contains: query,
          mode: 'insensitive'
        }
      }
    });
    const users = await prisma.user.findMany({
      where: {
        name: {
          contains: query,
          mode: 'insensitive'
        }
      },
      take: ITEMS_PER_PAGE,
      skip: ITEMS_PER_PAGE * (page - 1)
    });

    if (!users || users.length === 0) {
      return {
        users: [],
        totalUsers
      }
    }
    return { users, totalUsers };
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch users!");
  }
}

export const fetchedUser = async (id: string) => {

  try {
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    })
    if (!user) {
      throw new Error("Failed to fetch user!");
    }
    return user;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch user!");
  }
}