import WhatsAppButton from './WhatsAppButton';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-4 z-50 sm:right-6">
      <WhatsAppButton label="Chat on WhatsApp" className="shadow-lg" />
    </div>
  );
}
