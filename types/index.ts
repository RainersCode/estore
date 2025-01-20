import { z } from 'zod';
import { insertProductSchema } from '@/lib/validators';

export type Product = Omit<z.infer<typeof insertProductSchema>, 'price'> & {
    id: string;
    createdAt: Date;
    rating: number;
    numReviews: number;
    price: number;
    image?: string;
    inStock?: boolean;
};