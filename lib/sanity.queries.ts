import { groq } from 'next-sanity';

export const categoriesQuery = groq`*[_type == "category"] | order(name asc){
  _id,
  name,
  "slug": slug.current,
  "image": image.asset->url
}`;

export const productsQuery = groq`*[_type == "product"] | order(name asc){
  _id,
  name,
  "slug": slug.current,
  "images": images[].asset->url,
  description,
  benefits,
  featured,
  category->{
    _id,
    name,
    "slug": slug.current,
    "image": image.asset->url
  }
}`;

export const productBySlugQuery = groq`*[_type == "product" && slug.current == $slug][0]{
  _id,
  name,
  "slug": slug.current,
  "images": images[].asset->url,
  description,
  benefits,
  featured,
  category->{
    _id,
    name,
    "slug": slug.current,
    "image": image.asset->url
  }
}`;
