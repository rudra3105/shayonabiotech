import { categoriesQuery, productBySlugQuery, productsQuery } from './sanity.queries';
import { hasSanityConfig, sanityClient } from './sanity.client';
import { mockCategories, mockProducts } from './mock-data';
import { Category, Product } from './types';

export const getCategories = async (): Promise<Category[]> => {
  if (!hasSanityConfig) return mockCategories;
  return sanityClient.fetch(categoriesQuery);
};

export const getProducts = async (): Promise<Product[]> => {
  if (!hasSanityConfig) return mockProducts;
  return sanityClient.fetch(productsQuery);
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  const products = await getProducts();
  return products.filter((product) => product.featured).slice(0, 6);
};

export const getProductBySlug = async (slug: string): Promise<Product | null> => {
  if (!hasSanityConfig) return mockProducts.find((product) => product.slug === slug) || null;
  return sanityClient.fetch(productBySlugQuery, { slug });
};
