import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Product } from "@/lib/mock-data";
import { Heart, MessageSquare, ShoppingBag } from "lucide-react";

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={`https://i.pravatar.cc/150?u=${product.seller.name}`} alt={product.seller.name} />
          <AvatarFallback>{product.seller.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-bold">{product.seller.name}</p>
          <p className="text-sm text-muted-foreground">{product.seller.location}</p>
        </div>
      </div>

      <Separator />

      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-3xl font-bold text-primary mt-2">${product.price.toFixed(2)}</p>
      </div>

      <div className="space-y-2">
        <p className="font-semibold">Size</p>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <Button key={size} variant="outline" size="sm" className="bg-white">
              {size}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Button size="lg" className="w-full bg-primary text-primary-foreground">
          <ShoppingBag className="mr-2 h-5 w-5" /> Add to Bag
        </Button>
        <Button size="lg" variant="outline" className="w-full bg-white">
            <Heart className="mr-2 h-5 w-5" /> Like
        </Button>
        <Button size="lg" variant="outline" className="w-full bg-white">
            <MessageSquare className="mr-2 h-5 w-5" /> Message seller
        </Button>
      </div>

      <Separator />

      <div>
        <h2 className="font-bold text-lg mb-2">Description</h2>
        <p className="text-sm text-muted-foreground whitespace-pre-line">
          {product.description}
        </p>
      </div>
    </div>
  );
}
