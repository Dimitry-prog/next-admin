export type UserType = {
  id: string,
  name: string,
  email: string,
  image: string | null,
  hashedPassword: string | null,
  phone: string | null,
  address: string | null
  isAdmin: boolean
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}