import { z } from 'zod';

export const addProductSchema = z.object({
  title: z.string().min(1, { message: 'At least 1 character' }),
  description: z.string().min(3, { message: 'At least 3 character' }),
  image: z.string().optional(),
  price: z.string().min(1, { message: 'At least 1 character' }),
  stock: z.string().min(1, { message: 'At least 1 character' }),
  // price: z.coerce.number().gt(0, { message: 'Please enter an amount greater than $0.' }),
  color: z.string().min(1, { message: 'At least 1 character' }),
});
