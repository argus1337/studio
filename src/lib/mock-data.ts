import { placeholderImages } from './placeholder-images';
import type { ImagePlaceholder } from './placeholder-images';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: ImagePlaceholder[];
  seller: {
    name: string;
    location: string;
  };
  sizes: string[];
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Vintage Faux Leather Jacket',
    description: `Perfect condition faux leather jacket that gives a vintage vibe.
- Size: M
- Color: Black
- Worn only a few times.
From a smoke-free, pet-free home.`,
    price: 30.00,
    images: [placeholderImages.prod_1_1, placeholderImages.prod_1_2, placeholderImages.prod_1_3],
    seller: { name: 'iheartroni', location: 'New York, NY' },
    sizes: ['M', 'L', 'XL'],
  },
  {
    id: '2',
    title: 'LL Bean Colorblock Striped Sweater',
    description: `Vintage L.L. Bean colorblock striped sweater.
Super comfy and has a great retro look.
- Size: M
- 100% Cotton
- Great condition, no flaws.`,
    price: 30.00,
    images: [placeholderImages.prod_2_1, placeholderImages.prod_2_2, placeholderImages.prod_2_3],
    seller: { name: '814vintageco', location: 'Los Angeles, CA' },
    sizes: ['S', 'M'],
  },
  {
    id: '3',
    title: 'Vintage Wool Plaid Blazer',
    description: `Amazing vintage wool blazer in a classic plaid pattern.
Perfect for an academic or dark academia look.
- Size: M
- Wool blend
- Fully lined. One button missing.`,
    price: 50.00,
    images: [placeholderImages.prod_3_1, placeholderImages.prod_3_2, placeholderImages.prod_3_3],
    seller: { name: 'get_2_em', location: 'Chicago, IL' },
    sizes: ['M'],
  },
  {
    id: '4',
    title: 'Vintage The Limited 100% Silk Blouse',
    description: `Beautiful 100% silk blouse from The Limited.
Features a unique abstract pattern.
- Size: XS
- Sheer and lightweight.
- Excellent vintage condition.`,
    price: 38.00,
    images: [placeholderImages.prod_4_1, placeholderImages.prod_4_2],
    seller: { name: '000ntime', location: 'Austin, TX' },
    sizes: ['XS', 'S'],
  },
  {
    id: '5',
    title: 'Denim Forum Arlo Lo Rose Straight Jeans',
    description: `Aritzia's Denim Forum Arlo jeans in a light wash.
Straight leg, low-rise fit.
- Size: 24
- Worn once, like new.
- Retails for $110.`,
    price: 30.00,
    images: [placeholderImages.prod_5_1, placeholderImages.prod_5_2],
    seller: { name: 'chloegandara', location: 'Miami, FL' },
    sizes: ['24', '25', '26'],
  },
  {
    id: '6',
    title: 'Cream Silver Studded Mary Jane Flats',
    description: `Cute and edgy cream-colored Mary Jane flats with silver stud details.
- Size: US 10
- Comfortable for all-day wear.
- Some minor scuffs, barely noticeable.`,
    price: 9.00,
    images: [placeholderImages.prod_6_1, placeholderImages.prod_6_2],
    seller: { name: 'jojoprin', location: 'Seattle, WA' },
    sizes: ['US 9', 'US 10'],
  },
  {
    id: '7',
    title: 'White Delicate Lace Maxi Dress',
    description: `Stunning white maxi dress with delicate lace details throughout.
Perfect for special occasions or a bridal event.
- Size: 6
- Fully lined.
- Worn once.`,
    price: 38.00,
    images: [placeholderImages.prod_7_1],
    seller: { name: 'daddymae', location: 'Portland, OR' },
    sizes: ['4', '6', '8'],
  },
  {
    id: '8',
    title: 'Grey Vintage 90s Fleece Jacket',
    description: `Cozy vintage fleece jacket from the 90s.
Features a unique pattern and zip-up front.
- Size: S
- Warm and perfect for fall/winter.
- Great condition.`,
    price: 45.99,
    images: [placeholderImages.prod_8_1],
    seller: { name: 'alansellz', location: 'Denver, CO' },
    sizes: ['S', 'M'],
  },
];

export const popularThisWeek = [
    { id: 1, title: 'Car coat', searches: '+2.7k', imageUrl: placeholderImages.popular_coat.imageUrl, imageHint: placeholderImages.popular_coat.imageHint },
    { id: 2, title: 'Wool scarf', searches: '+2.2k', imageUrl: placeholderImages.popular_scarf.imageUrl, imageHint: placeholderImages.popular_scarf.imageHint },
    { id: 3, title: 'Trapper hat', searches: '+1.9k', imageUrl: placeholderImages.popular_hat.imageUrl, imageHint: placeholderImages.popular_hat.imageHint },
    { id: 4, title: 'Skims', searches: '+2k', imageUrl: placeholderImages.popular_skims.imageUrl, imageHint: placeholderImages.popular_skims.imageHint },
    { id: 5, title: 'Tory Burch', searches: '+1.7k', imageUrl: placeholderImages.popular_tory.imageUrl, imageHint: placeholderImages.popular_tory.imageHint },
    { id: 6, title: 'Suede hobo bag', searches: '+1.9k', imageUrl: placeholderImages.popular_suede.imageUrl, imageHint: placeholderImages.popular_suede.imageHint },
    { id: 7, title: 'Walking boots', searches: '+2k', imageUrl: placeholderImages.popular_boots.imageUrl, imageHint: placeholderImages.popular_boots.imageHint },
    { id: 8, title: 'Cardigan', searches: '+1.5k', imageUrl: placeholderImages.popular_cardigan.imageUrl, imageHint: placeholderImages.popular_cardigan.imageHint },
];

export const shopByStyle = [
    { id: 1, title: 'Argyle prep', imageUrl: placeholderImages.style_argyle.imageUrl, imageHint: placeholderImages.style_argyle.imageHint },
    { id: 2, title: "'90s Vamp", imageUrl: placeholderImages.style_vamp.imageUrl, imageHint: placeholderImages.style_vamp.imageHint },
    { id: 3, title: 'Waxed classics', imageUrl: placeholderImages.style_waxed.imageUrl, imageHint: placeholderImages.style_waxed.imageHint },
    { id: 4, title: 'Brown elegance', imageUrl: placeholderImages.style_brown.imageUrl, imageHint: placeholderImages.style_brown.imageHint },
    { id: 5, title: 'Velvet lounge', imageUrl: placeholderImages.style_velvet.imageUrl, imageHint: placeholderImages.style_velvet.imageHint },
    { id: 6, title: 'Cozy cables', imageUrl: placeholderImages.style_cable.imageUrl, imageHint: placeholderImages.style_cable.imageHint },
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProducts(): Product[] {
  return products;
}
