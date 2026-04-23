import LoadingGrid from '@/components/LoadingGrid';

export default function LoadingProductsPage() {
  return (
    <section className="section space-y-6">
      <div className="h-8 w-48 animate-pulse rounded bg-slate-200" />
      <LoadingGrid />
    </section>
  );
}
