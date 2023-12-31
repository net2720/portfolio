import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './layout.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `Netpo : Welcome!`,
  description: `Netpo's portfolio page`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
