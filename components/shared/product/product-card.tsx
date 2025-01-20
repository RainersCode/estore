import ProductPrice from './product-price';

import Image from 'next/image';
import { Star } from 'lucide-react';
import Link from 'next/link';

import { Product } from '@/types';


const ProductCard = ({ product }: { product: Product }) => {
  const { brand, name, rating, stock, slug } = product;
  
  return (
    <Link 
      href={`/product/${slug}`} 
      className="block group relative rounded-lg border p-4 hover:shadow-lg transition-shadow"
    >
      {/* Image container with aspect ratio */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform"
        />
      </div>

      {/* Product details */}
      <div className="mt-4 space-y-2">
        <p className="text-sm text-gray-500">{brand}</p>
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        
        {/* Price or Out of Stock */}
        {stock ? (
          <ProductPrice price={Number(product.price)} />
        ) : (
          <p className="text-lg font-bold text-red-600">
            Out of stock
          </p>
        )}

        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-gray-600">
            {rating ? Number(rating).toFixed(1) : '0.0'}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
