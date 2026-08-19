import type { Metadata } from 'next';
import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: {
    default: 'DVCCL | Development Venture Capital Corporation Limited',
    template: '%s | DVCCL',
  },
  description:
    'Building Wealth, Empowering Futures in Sri Lanka. DVCCL is a disciplined venture capital platform investing across agriculture, engineering, education, and technology.',
  metadataBase: new URL('https://www.dvccl.lk'),
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'DVCCL | Development Venture Capital Corporation Limited',
    description: 'Building Wealth, Empowering Futures in Sri Lanka.',
    siteName: 'DVCCL',
    locale: 'en_LK',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}
      >
        <TopBar />
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
