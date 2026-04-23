import Image from 'next/image';
import Link from 'next/link';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getCategories, getFeaturedProducts } from '@/lib/data';

export default async function HomePage() {
  const [categories, featuredProducts] = await Promise.all([getCategories(), getFeaturedProducts()]);

  return (
    <>
      <section className="relative overflow-hidden bg-leaf-50">
        <div className="section grid items-center gap-10 py-16 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-white px-4 py-1 text-sm font-medium text-leaf-700">
              Trusted by Farmers & Gardeners
            </p>
            <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Sustainable Agriculture & Nursery Products for Better Growth
            </h1>
            <p className="text-lg text-slate-700">
              Discover premium bio products, plant nutrition, and nursery essentials curated for healthy crops and gardens.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/products" className="rounded-full bg-leaf-500 px-6 py-3 font-semibold text-white hover:bg-leaf-700">
                Explore Products
              </Link>
              <WhatsAppButton label="Talk to Expert" />
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-3xl sm:h-96">
            <Image
              src="https://images.unsplash.com/photo-1595872018818-97555653a011?auto=format&fit=crop&w=1400&q=80"
              alt="Agriculture nursery hero"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="mb-6 text-2xl font-bold text-slate-900">Shop by Category</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Featured Products</h2>
          <Link href="/products" className="font-semibold text-leaf-700">View all</Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="mb-6 text-2xl font-bold text-slate-900">Why Choose Us</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {['Research-backed formulas', 'Quality-tested products', 'Farmer-first guidance', 'Fast response on WhatsApp'].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="font-semibold text-slate-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="mb-6 text-2xl font-bold text-slate-900">Testimonials</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            'Excellent organic products and quick support.',
            'Our nursery growth improved noticeably.',
            'Very easy ordering process through WhatsApp.'
          ].map((quote) => (
            <blockquote key={quote} className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-700">
              “{quote}”
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="rounded-3xl bg-leaf-700 p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Need help choosing the right product?</h2>
          <p className="mt-2">Connect with our agriculture experts on WhatsApp and get recommendations instantly.</p>
          <WhatsAppButton label="Start WhatsApp Inquiry" className="mt-5 bg-white text-leaf-700 hover:bg-leaf-100" />
        </div>
      </section>
    </>
  );
}
