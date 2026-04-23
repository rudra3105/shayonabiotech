import Link from 'next/link';
import { getWhatsAppLink } from '@/lib/utils';

type WhatsAppButtonProps = {
  productName?: string;
  className?: string;
  label?: string;
};

export default function WhatsAppButton({
  productName,
  className = '',
  label = 'Inquire on WhatsApp'
}: WhatsAppButtonProps) {
  return (
    <Link
      href={getWhatsAppLink(productName)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-leaf-500 px-5 py-3 font-semibold text-white transition hover:bg-leaf-700 ${className}`}
    >
      {label}
    </Link>
  );
}
