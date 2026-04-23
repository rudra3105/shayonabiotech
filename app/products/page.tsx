import type { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';
import { getCategories, getProducts } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Products | Shayona Biotech',
  description: 'Browse agriculture and nursery products by Shayona Biotech.'
};

type ProductsPageProps = {
  searchParams: {
    category?: string;
    q?: string;
  };
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);
  const categoryFilter = searchParams.category?.toLowerCase();
  const query = searchParams.q?.toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchesCategory = categoryFilter ? product.category?.slug === categoryFilter : true;
    const matchesQuery = query
      ? product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query)
      : true;
    return matchesCategory && matchesQuery;
  });

  return (
    <section className="section space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Products</h1>
        <p className="mt-2 text-slate-600">Find the right product and inquire directly on WhatsApp.</p>
      </div>

      <form className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-[1fr,220px,auto]">
        <input
          type="text"
          name="q"
          defaultValue={searchParams.q}
          placeholder="Search products..."
          className="rounded-xl border border-slate-300 px-4 py-2 outline-none ring-leaf-300 focus:ring"
        />
        <select
          name="category"
          defaultValue={searchParams.category || ''}
          className="rounded-xl border border-slate-300 px-4 py-2 outline-none ring-leaf-300 focus:ring"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category._id} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
        <button className="rounded-xl bg-leaf-500 px-5 py-2 font-semibold text-white hover:bg-leaf-700">Apply</button>
      </form>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
