import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Shayona Biotech',
  description: 'Learn more about Shayona Biotech and our mission.'
};

export default function AboutPage() {
  return (
    <section className="section max-w-4xl space-y-4">
      <h1 className="text-3xl font-bold text-slate-900">About Shayona Biotech</h1>
      <p className="text-slate-700">
        Shayona Biotech Pvt Ltd is focused on delivering modern agriculture and nursery products that improve
        productivity while maintaining sustainability.
      </p>
      <p className="text-slate-700">
        Our team partners with farmers, nurseries, and home growers through quality products and quick guidance.
      </p>
    </section>
  );
}
