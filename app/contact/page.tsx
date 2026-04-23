import type { Metadata } from 'next';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Contact | Shayona Biotech',
  description: 'Contact Shayona Biotech for agriculture and nursery product inquiries.'
};

export default function ContactPage() {
  return (
    <section className="section max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Contact Us</h1>
      <p className="text-slate-700">
        For product inquiries, dealership opportunities, or technical guidance, connect with our team instantly.
      </p>
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <p className="text-slate-700">Email: hello@shayonabiotech.com</p>
        <p className="text-slate-700">Phone: +91 98765 43210</p>
      </div>
      <WhatsAppButton label="Inquire via WhatsApp" />
    </section>
  );
}
