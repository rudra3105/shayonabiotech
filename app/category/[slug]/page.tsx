import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { getCategories, getProducts } from '@/lib/data';

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categories = await getCategories();
  const category = categories.find((item) => item.slug === params.slug);

  return {
    title: `${category?.name || 'Category'} | Shayona Biotech`,
    description: `Explore products in ${category?.name || 'this'} category.`
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);
  const category = categories.find((item) => item.slug === params.slug);

  if (!category) notFound();

  const categoryProducts = products.filter((product) => product.category?.slug === params.slug);

  return (
    <section className="section space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">{category.name}</h1>
        <p className="mt-2 text-slate-600">Browse all products in this category.</p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categoryProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
