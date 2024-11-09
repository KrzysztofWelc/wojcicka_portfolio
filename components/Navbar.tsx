'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '@/tailwind.config';
import MobileNav from './MobileNav';
import debounce from 'debounce';

export default function Navbar() {
  const fullConfig = resolveConfig(tailwindConfig);
  const lgWidth = parseInt(fullConfig.theme.screens.lg, 10);

  const [isProjectsMenuVisible, setIsProjectsMenuVisible] =
    useState<boolean>(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState<boolean>(false);
  const [isHamburgerBtnVisible, setIsHamburgerBtnVisible] =
    useState<boolean>(() => window.innerWidth > lgWidth);

  const page = usePathname();

  useEffect(() => {
    window.addEventListener(
      'resize',
      debounce((e) => {
        setIsHamburgerBtnVisible(window.innerWidth > lgWidth);
      }, 50)
    );
  }, []);

  return (
    <header>
      <div className='navbar_gradient fixed left-0 z-10 w-screen'>
        <div
          className={`mx-10 mb-3 mt-7 flex max-w-screen-xl justify-between align-middle xl:mx-auto ${isProjectsMenuVisible && 'h-[250px]'} `}
        >
          <Link href='/'>
            <Image src='/logo.svg' alt='logo' width={200} height={50} />
          </Link>

          {isHamburgerBtnVisible ? (
            <nav>
              <ul className='flex'>
                <li
                  className={`ml-6 whitespace-nowrap ${page === '/' && 'currentNavItem'}`}
                >
                  <Link className='activeNavItem p-2' href='/'>
                    Home
                  </Link>
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
                  <Link className='activeNavItem p-2' href=''>
                    Projects
                  </Link>
                  {isProjectsMenuVisible && (
                    <ul className='absolute left-0 flex flex-col pt-5 *:relative'>
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
                <li
                  className={`ml-6 whitespace-nowrap ${page.includes('/playground') && 'currentNavItem'}`}
                >
                  <Link className='activeNavItem p-2' href='playground'>
                    Playground
                  </Link>
                </li>
                <li
                  className={`ml-6 whitespace-nowrap ${page.includes('/about') && 'currentNavItem'}`}
                >
                  <Link className='activeNavItem p-2' href='about'>
                    About me
                  </Link>
                </li>
                <li
                  className={`ml-6 whitespace-nowrap ${page.includes('/contact') && 'currentNavItem'}`}
                >
                  <Link className='activeNavItem p-2' href='contact'>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          ) : (
            <button onClick={() => setIsMobileNavVisible(!isMobileNavVisible)}>
              menu
            </button>
          )}
        </div>
      </div>
      {isMobileNavVisible && (
        <MobileNav closeHandler={() => setIsMobileNavVisible(false)} />
      )}
    </header>
  );
}
