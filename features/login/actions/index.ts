'use server';

import { signIn } from "@/shared/libs/auth";
import { AuthError } from "next-auth";

type StateType = string | undefined;

export const authenticate = async (prevState: StateType, formData: FormData) => {
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