import Link from 'next/link';
import { COMPANY_NAME } from '@/lib/constants';

const links = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="section flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-bold text-leaf-700 sm:text-xl">
          {COMPANY_NAME}
        </Link>
        <ul className="flex items-center gap-4 text-sm font-medium text-slate-700 sm:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition hover:text-leaf-700">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
