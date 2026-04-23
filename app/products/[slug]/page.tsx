import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getProductBySlug, getProducts } from '@/lib/data';

type ProductDetailPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) {
    return { title: 'Product Not Found | Shayona Biotech' };
  }

  return {
    title: `${product.name} | Shayona Biotech`,
    description: product.description
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = await getProductBySlug(params.slug);
  if (!product) notFound();

  const allProducts = await getProducts();
  const relatedProducts = allProducts
    .filter((item) => item.slug !== product.slug && item.category?.slug === product.category?.slug)
    .slice(0, 3);

  return (
    <section className="section space-y-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="grid gap-4">
          {product.images.map((image, index) => (
            <div key={`${product._id}-${index}`} className="relative h-72 overflow-hidden rounded-2xl border border-slate-200 sm:h-96">
              <Image src={image} alt={`${product.name} ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold text-leaf-700">{product.category?.name}</p>
          <h1 className="text-3xl font-bold text-slate-900">{product.name}</h1>
          <p className="text-slate-700">{product.description}</p>

          <div>
            <h2 className="mb-2 text-xl font-semibold">Benefits & Usage</h2>
            <ul className="list-inside list-disc space-y-1 text-slate-700">
              {product.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>

          <WhatsAppButton productName={product.name} className="w-full sm:w-auto" />
        </div>
      </div>

      <div>
        <h2 className="mb-5 text-2xl font-bold">Related Products</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((related) => (
            <ProductCard key={related._id} product={related} />
          ))}
        </div>
      </div>
    </section>
  );
}
