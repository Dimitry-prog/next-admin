import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from "@/shared/libs/authconfig";
import prisma from './prismadb'
import { z } from 'zod';
import bcrypt from 'bcrypt';

const getUser = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });
    return user;
  } catch (e) {
    console.log(e)
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string() })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(password, user.hashedPassword as string);

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
});