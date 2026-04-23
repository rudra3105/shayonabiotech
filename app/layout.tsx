import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { COMPANY_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | Agriculture & Nursery Solutions`,
  description:
    'Modern agriculture and nursery product website for lead generation with WhatsApp inquiry integration.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
