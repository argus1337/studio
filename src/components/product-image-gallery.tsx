"use client";

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

type ProductImageGalleryProps = {
  images: ImagePlaceholder[];
};

export default function ProductImageGallery({ images }: ProductImageGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="grid gap-4">
      <div className="aspect-square relative overflow-hidden rounded-lg border">
        <Image
          src={mainImage.imageUrl}
          alt={mainImage.description}
          fill
          className="object-cover transition-opacity duration-300"
          data-ai-hint={mainImage.imageHint}
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setMainImage(image)}
            className={cn(
              "aspect-square relative overflow-hidden rounded-md border-2 transition-all",
              mainImage.id === image.id ? "border-primary" : "border-transparent hover:border-primary/50"
            )}
          >
            <Image
              src={image.imageUrl}
              alt={image.description}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
