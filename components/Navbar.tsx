'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isProjectsMenuVisible, setIsProjectsMenuVisible] =
    useState<boolean>(false);
  const page = usePathname()


  return (
    <header>
      <div className='navbar_gradient fixed left-0 z-10 w-screen'>
        <div
          className={`mx-auto mb-3 mt-7 flex max-w-screen-xl justify-between align-middle ${isProjectsMenuVisible && 'h-[250px]'} `}
        >
          <Link href='/'>
            <Image src='/logo.svg' alt='logo' width={200} height={50} />
          </Link>

          <nav>
            <ul className='flex'>
              <li className={`ml-6 whitespace-nowrap ${page === '/' && 'currentNavItem'}`}>
                <Link className='activeNavItem p-2' href='/'>Home</Link>
              </li>
              <li
                className={`relative ml-6 whitespace-nowrap ${page.includes('/projects') && 'currentNavItem'}`}
                onMouseEnter={() => {
                  setIsProjectsMenuVisible(true);
                }}
                onMouseLeave={() => {
                  setIsProjectsMenuVisible(false);
                }}
              >
                <Link className='activeNavItem p-2' href=''>Projects</Link>
                {isProjectsMenuVisible && (
                  <ul className='absolute *:relative left-0 flex flex-col pt-5 '>
                    <li className='pt-3 text-secondary'>
                      <Link href={'/'}>GuardGo</Link>
                    </li>
                    <li className='pt-3 text-secondary'>
                      <Link href={'/'}>ESBoarding</Link>
                    </li>
                    <li className='pt-3 text-secondary'>
                      <Link href={'/'}>Ninateka</Link>
                    </li>
                    <li className='pt-3 text-secondary'>
                      <Link href={'/'}>Szczecin Filharmony</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={`ml-6 whitespace-nowrap ${page.includes('/playground') && 'currentNavItem'}`}>
                <Link className='activeNavItem p-2' href='playground'>Playground</Link>
              </li>
              <li className={`ml-6 whitespace-nowrap ${page.includes('/about') && 'currentNavItem'}`}>
                <Link className='activeNavItem p-2' href='about'>About me</Link>
              </li>
              <li className={`ml-6 whitespace-nowrap ${page.includes('/contact') && 'currentNavItem'}`}>
                <Link className='activeNavItem p-2' href='contact'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* <div className="w-full h-fit navbar_gradient fixed top-0 left-0"></div> */}
      </div>
    </header>
  );
}
