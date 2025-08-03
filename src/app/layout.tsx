import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Brainrot Test - What\'s Your Brainrot Type? | Free Quiz',
  description: 'Take our free brainrot test and discover your unique brainrot type! This viral personality quiz reveals your internet obsession patterns.',
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