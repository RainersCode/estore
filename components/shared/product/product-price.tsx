interface ProductPriceProps {
  price: number | undefined;
  className?: string;
}

const ProductPrice = ({ price = 0, className = '' }: ProductPriceProps) => {
  // Split price into dollars and cents
  const [dollars, cents] = (price || 0).toFixed(2).split('.');

  return (
    <div className={`flex items-start ${className}`}>
      <span className="text-xs mt-1">$</span>
      <span className="text-xl mx-0.5">{dollars}</span>
      <span className="text-xs mt-1">{cents}</span>
    </div>
  );
};

export default ProductPrice;
