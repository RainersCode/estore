import { z } from "zod";
import {
  cartItemSchema,
  insertCartSchema,
  insertProductSchema,
} from "@/lib/validators";

export type Product = Omit<z.infer<typeof insertProductSchema>, "price"> & {
  id: string;
  createdAt: Date;
  rating: number;
  numReviews: number;
  price: number;
  image?: string;
  inStock?: boolean;
};

export type CartItem = z.infer<typeof cartItemSchema>;
export type Cart = z.infer<typeof insertCartSchema>;
