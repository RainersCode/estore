"use client";

import { CartItem } from "@/types";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

import { addItemToCart } from "@/lib/actions/cart.actions";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const AddToCart = ({ item }: { item: Omit<CartItem, "cartId"> }) => {

    const { toast } = useToast();
    const router = useRouter();


    const handleAddToCart = async () => {
        const res = await addItemToCart(item);

        if(!res.success) {
            toast({
                variant: 'destructive',
                description: res.message,
            });
            return;
    }

    toast({
        description: `Added ${item.name} to cart`,
        action: (
            <ToastAction
                onClick={() => router.push('/cart')}
                altText="View cart"
                className="bg-primary text-white hover:bg-gray-800"
            >
                View cart
            </ToastAction>
        )
    })
}

  return (
    <Button
        onClick={handleAddToCart}
        className="w-full"
        type="button"
    >
        <Plus />
        Add to cart
    </Button>
  )

};


export default AddToCart;