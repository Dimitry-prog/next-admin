'use server';

import { signIn } from "@/shared/libs/auth";
import { AuthError } from "next-auth";

export const authenticate = async (formData: FormData) => {
  try {
    await signIn('credentials', formData);
  } catch (e) {
    if (e instanceof AuthError) {
      switch (e.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw e;
  }
}