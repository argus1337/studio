import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

type PlaceholderImagesType = {
  [key: string]: ImagePlaceholder;
}

export const placeholderImages: PlaceholderImagesType = data.placeholderImages;
