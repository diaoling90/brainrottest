import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://brainrottest.com'),
  title: {
    default: 'Brainrot Test - What\'s Your Brainrot Type? | Free Quiz',
    template: '%s | Brainrot Test'
  },
  description: 'Free brainrot test helps you discover your unique brainrot type! This viral personality quiz reveals your internet behavior patterns and digital habits.',
  openGraph: {
    title: 'Brainrot Test - What\'s Your Brainrot Type? | Free Quiz',
    description: 'Free brainrot test helps you discover your unique brainrot type! This viral personality quiz reveals your internet behavior patterns and digital habits.',
    type: 'website',
    locale: 'en_US',
    url: 'https://brainrottest.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brainrot Test - What\'s Your Brainrot Type? | Free Quiz',
    description: 'Free brainrot test helps you discover your unique brainrot type! This viral personality quiz reveals your internet behavior patterns and digital habits.',
  },
  alternates: {
    canonical: 'https://brainrottest.com',
    languages: {
      'en': 'https://brainrottest.com',
      'zh': 'https://brainrottest.com/zh',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/brain-icon.png',
    apple: '/brain-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}