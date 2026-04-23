import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import WhatsAppButton from './WhatsAppButton';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <Link href={`/products/${product.slug}`}>
        <div className="relative h-52 w-full">
          <Image
            src={product.images[0] || 'https://images.unsplash.com/photo-1446071103084-c257b5f70672?auto=format&fit=crop&w=1200&q=80'}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <div className="space-y-3 p-4">
        <p className="text-sm font-medium text-leaf-700">{product.category?.name || 'General'}</p>
        <Link href={`/products/${product.slug}`} className="block text-lg font-semibold text-slate-900">
          {product.name}
        </Link>
        <p className="line-clamp-2 text-sm text-slate-600">{product.description}</p>
        <WhatsAppButton productName={product.name} className="w-full" />
      </div>
    </article>
  );
}
