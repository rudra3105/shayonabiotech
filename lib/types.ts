export type Category = {
  _id: string;
  name: string;
  slug: string;
  image?: string;
};

export type Product = {
  _id: string;
  name: string;
  slug: string;
  category?: Category;
  images: string[];
  description: string;
  benefits: string[];
  featured?: boolean;
};
