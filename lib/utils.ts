import { WHATSAPP_PHONE } from './constants';

export const getWhatsAppLink = (productName?: string) => {
  const message = productName
    ? `Hi, I want to purchase ${productName}`
    : 'Hi, I want to know more about your agriculture products';

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};
