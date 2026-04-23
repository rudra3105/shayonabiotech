import { Category, Product } from './types';

export const mockCategories: Category[] = [
  {
    _id: 'cat-1',
    name: 'Organic Fertilizers',
    slug: 'organic-fertilizers',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: 'cat-2',
    name: 'Bio Pesticides',
    slug: 'bio-pesticides',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: 'cat-3',
    name: 'Garden Plants',
    slug: 'garden-plants',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80'
  }
];

export const mockProducts: Product[] = [
  {
    _id: 'prod-1',
    name: 'BioGrow Organic Booster',
    slug: 'biogrow-organic-booster',
    category: mockCategories[0],
    images: [
      'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=1200&q=80'
    ],
    description:
      'A premium organic fertilizer blend designed for higher yield, stronger roots, and improved soil health.',
    benefits: ['Increases crop productivity', 'Enhances soil microflora', 'Safe for all crops'],
    featured: true
  },
  {
    _id: 'prod-2',
    name: 'Neem Shield Bio Protect',
    slug: 'neem-shield-bio-protect',
    category: mockCategories[1],
    images: [
      'https://images.unsplash.com/photo-1589923188938-8a57ef6f7d4f?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Plant-based pest control solution that protects crops without harming beneficial organisms.',
    benefits: ['Residue-free protection', 'Eco-friendly formula', 'Suitable for vegetables and fruits'],
    featured: true
  },
  {
    _id: 'prod-3',
    name: 'Premium Tulsi Sapling',
    slug: 'premium-tulsi-sapling',
    category: mockCategories[2],
    images: [
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Healthy, nursery-raised tulsi saplings ideal for home gardens and terrace farming.',
    benefits: ['High survival rate', 'Aromatic and medicinal', 'Grown in nutrient-rich media']
  }
];
