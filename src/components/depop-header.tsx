"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Heart, Menu, Search, ShoppingBag } from "lucide-react";
import { DepopLogo } from "./icons";
import { placeholderImages } from "@/lib/placeholder-images";

const navItems = [
    {
      name: "Men",
      categories: [
        { title: "Shop by category", links: ["T-shirts", "Shirts", "Hoodies", "Jeans", "Sweaters", "Coats & Jackets", "Shoes", "Bags", "Hats"] },
        { title: "Featured", links: ["Big & Tall", "Black tie", "Festival", "Summer vacation", "Wedding guests"] },
      ],
      featured: [
        { title: "Gorpcore", img: placeholderImages.nav_gorpcore.imageUrl, imageHint: placeholderImages.nav_gorpcore.imageHint },
        { title: "Streetwear", img: placeholderImages.nav_streetwear.imageUrl, imageHint: placeholderImages.nav_streetwear.imageHint },
        { title: "Minimalism", img: placeholderImages.nav_minimalism.imageUrl, imageHint: placeholderImages.nav_minimalism.imageHint },
        { title: "Workwear", img: placeholderImages.nav_workwear.imageUrl, imageHint: placeholderImages.nav_workwear.imageHint },
      ],
      allLink: "See all men's"
    },
    {
      name: "Women",
      categories: [
        { title: "Shop by category", links: ["Tops", "Jeans", "Sweaters", "Skirts", "Dresses", "Coats & Jackets", "Shoes", "Bags & Purses", "Sunglasses"] },
        { title: "Featured", links: ["Plus Size", "Festival", "Party fits", "Summer vacation", "The bridal edit", "Wedding guests"] },
      ],
      featured: [
        { title: "Minimalism", img: placeholderImages.nav_minimalism.imageUrl, imageHint: placeholderImages.nav_minimalism.imageHint },
        { title: "Coquette", img: placeholderImages.nav_coquette.imageUrl, imageHint: placeholderImages.nav_coquette.imageHint },
        { title: "Y2K", img: placeholderImages.nav_y2k.imageUrl, imageHint: placeholderImages.nav_y2k.imageHint },
        { title: "Boho", img: placeholderImages.nav_boho.imageUrl, imageHint: placeholderImages.nav_boho.imageHint },
      ],
      allLink: "See all women's"
    }
  ];

export default function DepopHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card text-card-foreground shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="lg:hidden mr-2">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
            <Link href="/" className="flex items-center">
              <DepopLogo className="h-7 w-auto text-primary" />
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 mx-8 max-w-xl">
             <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search for items, brands, or styles..." className="pl-10"/>
             </div>
          </div>

          <nav className="flex items-center space-x-2 sm:space-x-4">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Search className="h-6 w-6" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
              <Heart className="h-6 w-6" />
              <span className="sr-only">Likes</span>
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-6 w-6" />
              <span className="sr-only">Bag</span>
            </Button>
            <div className="hidden md:flex items-center space-x-2">
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md">
                    <Link href="#">Sell now</Link>
                </Button>
                <Button variant="outline" asChild><Link href="#">Sign up</Link></Button>
                <Button variant="ghost" asChild><Link href="#">Log in</Link></Button>
            </div>
          </nav>
        </div>
        <nav className="hidden lg:flex h-12 items-center justify-center space-x-8">
          {navItems.map(item => (
             <Popover key={item.name}>
                <PopoverTrigger asChild>
                    <Button variant="link" className="text-foreground hover:text-primary hover:no-underline font-semibold text-sm p-0">{item.name}</Button>
                </PopoverTrigger>
                <PopoverContent className="w-screen max-w-4xl p-6" align="center">
                    <div className="grid grid-cols-4 gap-8">
                        {item.categories.map(cat => (
                            <div key={cat.title}>
                                <h4 className="font-bold mb-4">{cat.title}</h4>
                                <ul className="space-y-2">
                                    {cat.links.map(link => <li key={link}><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">{link}</Link></li>)}
                                </ul>
                            </div>
                        ))}
                        <div className="col-span-2">
                             <h4 className="font-bold mb-4">Featured</h4>
                             <div className="grid grid-cols-2 gap-4">
                                {item.featured.map(feat => (
                                    <Link href="#" key={feat.title} className="group relative aspect-[3/2] overflow-hidden rounded">
                                        <Image src={feat.img} alt={feat.title} fill className="object-cover transition-transform group-hover:scale-105" data-ai-hint={feat.imageHint}/>
                                        <div className="absolute inset-0 bg-black/20"/>
                                        <h5 className="absolute bottom-2 left-2 text-white font-bold text-sm">{feat.title}</h5>
                                    </Link>
                                ))}
                             </div>
                        </div>
                    </div>
                     <div className="mt-6 border-t pt-4">
                        <Link href="#" className="font-bold text-sm hover:underline">{item.allLink} →</Link>
                    </div>
                </PopoverContent>
             </Popover>
          ))}
           <Button variant="link" className="text-foreground hover:text-primary hover:no-underline font-semibold text-sm p-0">Kids</Button>
           <Button variant="link" className="text-foreground hover:text-primary hover:no-underline font-semibold text-sm p-0">Sports</Button>
           <Button variant="link" className="text-foreground hover:text-primary hover:no-underline font-semibold text-sm p-0">Brands</Button>
           <Button variant="link" className="text-primary hover:text-primary/80 hover:no-underline font-bold text-sm p-0">Sale</Button>
        </nav>
      </div>
    </header>
  );
}
