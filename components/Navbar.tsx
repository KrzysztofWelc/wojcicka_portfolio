'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '@/tailwind.config';
import MobileNav from './MobileNav';

import Logo from '@/public/homepage/logo.svg'

export default function Navbar() {
  const fullConfig = resolveConfig(tailwindConfig);
  const lgWidth = parseInt(fullConfig.theme.screens.lg, 10);

  const [isProjectsMenuVisible, setIsProjectsMenuVisible] =
    useState<boolean>(false);

  const [isPlaygroundMenuVisible, setIsPlaygroundMenuVisible] =
    useState<boolean>(false);

  const [isMobileNavVisible, setIsMobileNavVisible] = useState<boolean>(false);

  const page = usePathname();


  return (
    <header>
      <div className='navbar_gradient fixed left-0 z-10 box-border w-screen'>
        <div
          className={`mx-10 mb-6 mt-7 flex max-w-screen-xl justify-between align-middle xl:mx-auto ${isProjectsMenuVisible && 'h-[250px]'} ${isPlaygroundMenuVisible && 'h-[150px]'}`}
        >
          <Link href='/'>
            <Image src={Logo} alt='logo' width={200} height={50} />
          </Link>

          <nav className='max-[900px]:hidden'>
            <ul className='flex'>
              <li
                className={`w-fit ml-6 whitespace-nowrap ${page === '/' && 'currentNavItem'}`}
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
                <Link className='activeNavItem p-2' href='/#projects' onClick={(e) => {
                  if (page === '/') {
                    e.preventDefault()
                    const contactSection = document.querySelector('#projects')
                    contactSection?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}>
                  Projects
                </Link>
                {isProjectsMenuVisible && (
                  <ul className='absolute left-0 flex flex-col pt-5 *:relative'>
                    <li className='pt-3 text-secondary'>
                      <Link href={'/projects/guardgo'}>GuardGo</Link>
                    </li>
                    <li className='pt-3 text-secondary'>
                      <Link href={'/projects/esboarding'}>ESBoarding</Link>
                    </li>
                    <li className='pt-3 text-secondary'>
                      <Link href={'/projects/ninateka'}>Ninateka</Link>
                    </li>
                    <li className='pt-3 text-secondary'>
                      <Link href={'/'}>Szczecin Filharmony</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className={`relative ml-6 whitespace-nowrap ${page.includes('/playground') && 'currentNavItem'}`}
                onMouseEnter={() => {
                  setIsPlaygroundMenuVisible(true);
                }}
                onMouseLeave={() => {
                  setIsPlaygroundMenuVisible(false);
                }}
              >
                <Link className='activeNavItem p-2' href='/#playground' onClick={(e) => {
                  if (page === '/') {
                    e.preventDefault()
                    const contactSection = document.querySelector('#playground')
                    contactSection?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}>
                  Playground
                </Link>
                {isPlaygroundMenuVisible && (
                  <ul className='absolute left-0 flex flex-col pt-5 *:relative'>
                    <li className='pt-3 text-secondary'>
                      <Link href={'/playground/models'}>3D models</Link>
                    </li>
                    <li className='pt-3 text-secondary'>
                      <Link href={'/playground/motion'}>motion vizualization</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className={`ml-6 whitespace-nowrap ${page.includes('/about') && 'currentNavItem'}`}
              >
                <Link className='activeNavItem p-2' href='/#about' onClick={(e) => {
                  if (page === '/') {
                    e.preventDefault()
                    const contactSection = document.querySelector('#about')
                    contactSection?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}>
                  About me
                </Link>
              </li>
              <li
                className={`ml-6 whitespace-nowrap ${page.includes('/contact') && 'currentNavItem'}`}
              >
                <Link className='activeNavItem p-2' href='/#contact' onClick={(e) => {
                  if (page === '/') {
                    e.preventDefault()
                    const contactSection = document.querySelector('#contact')
                    contactSection?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className='min-[900px]:hidden'
            onClick={() => setIsMobileNavVisible(!isMobileNavVisible)}
          >
            menu
          </button>
        </div>
      </div>
      <MobileNav isVisible={isMobileNavVisible} closeHandler={() => setIsMobileNavVisible(false)} />
    </header>
  );
}
