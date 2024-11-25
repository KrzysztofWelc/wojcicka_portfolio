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
      <body
        className={`${inter.className} mx-4 max-w-screen-xl sm:mx-10 2xl:mx-auto`}
      >
        <Navbar />
        <div className='*:text-xl *:leading-8 *:tracking-wide md:*:text-2xl md:*:leading-10'>
          {children}
        </div>
      </body>
    </html>
  );
}
