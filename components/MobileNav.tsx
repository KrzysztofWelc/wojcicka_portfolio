import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface MobileNavProps {
  closeHandler: () => void;
}

export default function ({ closeHandler }: MobileNavProps) {
  const page = usePathname();
  const [isProjectsMenuVisible, setIsProjectsMenuVisible] =
    useState<boolean>(false);

  return (
    <div className=''>
      <div className='fixed right-0 top-0 z-40 h-screen min-w-[300px] bg-white pt-8'>
        <nav>
          <ul className='flex flex-col gap-4'>
            <li
              className={`ml-6 whitespace-nowrap ${page === '/' && 'currentNavItem'}`}
            >
              <Link className='activeNavItem p-2' href='/'>
                Home
              </Link>
            </li>
            <li
              className={`ml-6 whitespace-nowrap ${page.includes('/projects') && 'currentNavItem'}`}
            >
              <button
                className='activeNavItem p-2'
                onClick={() => setIsProjectsMenuVisible(!isProjectsMenuVisible)}
              >
                Projects
              </button>
              {isProjectsMenuVisible && (
                <ul className='left-0 flex flex-col pl-8'>
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
      </div>
      <div
        className='fixed left-0 top-0 z-20 h-screen w-screen bg-black opacity-35'
        onClick={() => closeHandler()}
      ></div>
    </div>
  );
}
