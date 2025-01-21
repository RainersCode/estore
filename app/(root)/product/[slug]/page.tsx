import { getProductBySlug } from "@/lib/actions/product-actions";
import { notFound } from "next/navigation";

import ProductPrice from "@/components/shared/product/product-price";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import ProductImages from "@/components/shared/product/product-images";


const ProductDetailsPage = async (props: {
    params: Promise<{slug: string}>
}) => {
    const {slug} = await props.params;
    const product = await getProductBySlug(slug);
    if (!product) notFound();

    return (
        <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Image Column */}
            <div className="col-span-2">
                <ProductImages images={product.images}/>
            </div>
            {/* Details Column */}
            <div className="col-span-2 p-5">
                <div className="flex flex-col gap-6">
                    <p>
                        {product.brand} {product.category}
                    </p>
                    <h1 className="h3-bold text-foreground">
                        {product.name}
                    </h1>
                    <p>
                        {product.rating} of {product.numReviews} reviews
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <ProductPrice 
                            price={Number(product.price)}
                            className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
                        />
                    </div>
                </div>
                <div className="mt-10">
                    <p className="h3-bold">Description</p>
                    <p>{product.description}</p>
                </div>
            </div>
            {/* Action Column */}
            <div>
                <Card>
                    <CardContent className="p-4">
                        <div className="mb-2 flex justify-between">
                            <div>Price</div>
                            <div>
                                <ProductPrice 
                                    price={Number(product.price)}
                                />
                            </div>                    
                        </div>
                        <div className="mb-2 flex justify-between">
                            <div>Status</div>
                            {product.stock > 0 ? (
                                <Badge variant={'outline'}>In Stock</Badge>
                            ) : (
                                <Badge variant={'destructive'}>Out of Stock</Badge>
                            )}
                        </div>
                        {product.stock > 0 && (

                            <div className="flex-center w-full">
                                <Button className="w-full">Add to Cart</Button>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};

export default ProductDetailsPage;