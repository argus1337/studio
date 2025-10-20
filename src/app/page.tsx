import Link from 'next/link';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { products, popularThisWeek, shopByStyle } from '@/lib/mock-data';
import DepopHeader from '@/components/depop-header';
import DepopFooter from '@/components/depop-footer';
import { placeholderImages } from '@/lib/placeholder-images';

export default function Home() {
  const depopEditProducts = products.slice(0, 8);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <DepopHeader />
      <main className="flex-1">
        <section className="grid grid-cols-1 md:grid-cols-2">
          <Link href="#" className="group relative h-[40vh] md:h-[60vh] text-white">
            <Image
              src={placeholderImages.women.imageUrl}
              alt="Shop Womens"
              fill
              className="object-cover"
              data-ai-hint="woman model"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-8 left-8">
              <h2 className="text-4xl font-extrabold">Women</h2>
              <Button variant="secondary" className="mt-2 group-hover:bg-white/90">Shop now</Button>
            </div>
          </Link>
          <Link href="#" className="group relative h-[40vh] md:h-[60vh] text-white">
            <Image
              src={placeholderImages.men.imageUrl}
              alt="Shop Mens"
              fill
              className="object-cover"
              data-ai-hint="man model"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-8 left-8">
              <h2 className="text-4xl font-extrabold">Men</h2>
              <Button variant="secondary" className="mt-2 group-hover:bg-white/90">Shop now</Button>
            </div>
          </Link>
        </section>

        <section className="bg-primary text-primary-foreground text-center py-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Buy for less. Sell for free. Keep fashion circular.</h2>
          <Button variant="secondary" className="mt-6 text-primary" size="lg">Sell now</Button>
        </section>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Shop by style</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {shopByStyle.map((style) => (
                <Link key={style.id} href="#" className="group relative aspect-[2/1] overflow-hidden rounded-lg">
                  <Image src={style.imageUrl} alt={style.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={style.imageHint} />
                  <div className="absolute inset-0 bg-black/30" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{style.title}</h3>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Popular this week</h2>
            <Carousel opts={{ align: 'start', loop: true }} className="w-full">
              <CarouselContent>
                {popularThisWeek.map((item) => (
                  <CarouselItem key={item.id} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <Link href="#" className="group">
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <Image src={item.imageUrl} alt={item.title} width={300} height={300} className="w-full aspect-square object-cover" data-ai-hint={item.imageHint}/>
                        </CardContent>
                      </Card>
                      <h3 className="font-semibold mt-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.searches} searches</p>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex"/>
              <CarouselNext className="hidden sm:flex"/>
            </Carousel>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">The Depop Edit</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {depopEditProducts.map(product => (
                <Link key={product.id} href={`/item/${product.id}?redirect_url=https://example.com/product/${product.id}`} className="group">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src={product.images[0].imageUrl}
                        alt={product.title}
                        width={400}
                        height={400}
                        className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={product.images[0].imageHint}
                      />
                    </CardContent>
                  </Card>
                  <div className="mt-2">
                    <p className="font-semibold">${product.price.toFixed(2)}</p>
                    <p className="text-sm text-muted-foreground">Size: {product.sizes[0]}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Shop by price</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['10', '20', '50', '100'].map(price => (
                <Link href="#" key={price} className="group">
                  <div className="relative aspect-video rounded-lg flex flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-transform duration-300 group-hover:-translate-y-1">
                    <h3 className="text-xl font-medium text-muted-foreground">Under</h3>
                    <p className="text-5xl font-extrabold text-foreground">${price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <DepopFooter />
    </div>
  );
}
