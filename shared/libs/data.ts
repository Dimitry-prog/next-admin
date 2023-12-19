import prisma from './prismadb'

export const fetchedUsers = async () => {
  try {
    const users = await prisma?.user.findMany();

    if (!!users) {
      return [];
    }
    return users;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch users!");
  }
}