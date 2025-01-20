import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product-actions';

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  
  const mappedProducts = latestProducts.map(product => ({
    ...product,
    image: product.images[0], // Use first image as main image
    inStock: product.stock > 0,
    // Convert Decimal to number for price and rating
    price: Number(product.price),
    rating: Number(product.rating)
  }));

  return (
    <div className='space-y-8'>
      <ProductList title='Newest Arrivals' data={mappedProducts}/>
    </div>
  );
};

export default HomePage;