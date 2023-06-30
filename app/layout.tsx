import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Sidebar from './components/sidebar';
import { Analytics } from '@vercel/analytics/react';
import Footer from './components/footer';

const graphik = localFont({
  src: [
    {
      path: '../public/fonts/Graphik-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Graphik-Medium.ttf',
      weight: '600',
      style: 'bold',
    },
  ],
  variable: '--font-graphik',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tres3ce.com'),
  title: 'Tres3ce',
  description: 'Crea, comunica, comparte valor.',
  openGraph: {
    title: 'Tres3ce',
    description: 'Crea, comunica, comparte valor',
    url: 'https://tres3ce.com',
    siteName: 'Tres3ce',
    locale: 'en-ES',
    type: 'website',
    images: ['https://tres3ce.com/images/logo-tresce.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        graphik.variable
      )}
    >
      <body className="antialiased flex flex-col md:flex-row lg:mx-auto h-screen">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-8 md:px-0 h-screen">
          <Sidebar />
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
