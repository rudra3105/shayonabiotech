import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-10';

export const hasSanityConfig = Boolean(projectId && dataset);

export const sanityClient = createClient({
  projectId: projectId || 'demo',
  dataset: dataset || 'production',
  apiVersion,
  useCdn: true
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: unknown) => builder.image(source).width(1200).url();
