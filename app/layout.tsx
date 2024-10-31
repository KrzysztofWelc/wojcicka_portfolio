import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} mx-auto max-w-screen-xl`}>
        <Navbar />
        <div className='*:text-2xl *:leading-10 *:tracking-wide'>
          {children}
        </div>
      </body>
    </html>
  );
}
