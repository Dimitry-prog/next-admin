import prisma from "@/shared/libs/prismadb";

export const fetchedUsers = async (query: string) => {

  try {
    const users = await prisma.user.findMany({
      where: {
        name: {
          contains: query,
          mode: 'insensitive'
        }
      }
    });

    if (!users || users.length === 0) {
      return [];
    }
    return users;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch users!");
  }
}