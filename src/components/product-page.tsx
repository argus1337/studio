'use client';

import type { Product } from '@/lib/mock-data';
import DepopHeader from './depop-header';
import DepopFooter from './depop-footer';
import ProductImageGallery from './product-image-gallery';
import ProductDetails from './product-details';
import BotVerifier from './bot-verifier';
import { Suspense, useState } from 'react';
import AISuggestions from './ai-suggestions';

type ProductPageProps = {
  product: Product;
  redirectUrl: string;
};

export default function ProductPage({ product, redirectUrl }: ProductPageProps) {
  const [isVerified, setIsVerified] = useState(false);

  if (!isVerified) {
    return (
      <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950">
        <DepopHeader />
        <main className="container mx-auto flex-grow flex items-center justify-center">
            <Suspense fallback={<div>Loading...</div>}>
                <BotVerifier
                    redirectUrl={redirectUrl}
                    onVerified={() => setIsVerified(true)}
                />
            </Suspense>
        </main>
        <DepopFooter />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <DepopHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="md:col-span-2">
            <ProductImageGallery images={product.images} />
          </div>
          <div className="space-y-8">
            <ProductDetails product={product} />
            <Suspense fallback={<div>Loading AI suggestions...</div>}>
               <AISuggestions itemDescription={product.description} />
            </Suspense>
          </div>
        </div>
      </main>
      <DepopFooter />
    </div>
  );
}
