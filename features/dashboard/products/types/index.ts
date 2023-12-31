export type ProductType = {
  id: string,
  title: string,
  description: string,
  price: string,
  color: string,
  stock: string,
  image: string | null,
  createdAt: Date
  updatedAt: Date
}

export type AddProductStateType = {
  errors?: {
    title?: string[],
    description?: string[],
    price?: string[],
    color?: string[],
    stock?: string[],
    image?: string[],
  }
  message?: string
}