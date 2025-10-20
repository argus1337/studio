import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/mock-data';
import DepopHeader from '@/components/depop-header';
import DepopFooter from '@/components/depop-footer';
import ProductImageGallery from '@/components/product-image-gallery';
import ProductDetails from '@/components/product-details';
import AISuggestions from '@/components/ai-suggestions';
import BotVerifier from '@/components/bot-verifier';
import { Suspense } from 'react';

export default function ItemPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950">
      <DepopHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Suspense fallback={<div>Loading redirect...</div>}>
            <BotVerifierWrapper />
        </Suspense>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProductImageGallery images={product.images} />
          </div>
          <div className="space-y-8">
            <ProductDetails product={product} />
            <AISuggestions itemDescription={product.description} />
          </div>
        </div>
      </main>
      <DepopFooter />
    </div>
  );
}

function BotVerifierWrapper() {
    return <BotVerifier />;
}
