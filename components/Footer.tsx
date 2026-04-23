import Link from 'next/link';
import { COMPANY_NAME } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="section flex flex-col gap-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/about" className="hover:text-leaf-700">About</Link>
          <Link href="/contact" className="hover:text-leaf-700">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
