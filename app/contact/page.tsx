import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with DVCCL for partnerships, investments, or general inquiries. Our team responds within 24 hours.',
};

export default function ContactPage() {
  return <ContactSection />;
}
