import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from "motion/react"

interface MobileNavProps {
  closeHandler: () => void;
  isVisible: boolean
}

export default function MobileNav({ closeHandler: closeSideMenuHandler, isVisible }: MobileNavProps) {
  const page = usePathname();
  const [isProjectsMenuVisible, setIsProjectsMenuVisible] =
    useState<boolean>(false);
  const [isPlaygroundMenuVisible, setIsPlaygroundMenuVisible] =
    useState<boolean>(false);

  const closeHandler = () => {
    setIsPlaygroundMenuVisible(false)
    setIsProjectsMenuVisible(false)
    closeSideMenuHandler()
  }

  return (
    <>
      <AnimatePresence>
        {isVisible && <motion.div
          key='mobileNav'
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ bounce: 0 }}
          exit={{ x: '100%' }}
          className='fixed right-0 top-0 z-40 h-screen min-w-[300px] bg-white pt-8'>
          <nav>
            <ul className='flex flex-col gap-4'>
              <li
                className='ml-6 whitespace-nowrap'
              >
                <Link className={`activeNavItem p-2 ${page === '/' && 'currentNavItem'}`} href='/' onClick={() => {
                  closeHandler()
                }} >
                  Home
                </Link>
              </li>
              <li
                className='ml-6 whitespace-nowrap'
              >
                <button
                  className={`activeNavItem px-2 py-0 ${page.includes('/projects') && 'currentNavItem'}`}
                  onClick={() => setIsProjectsMenuVisible(!isProjectsMenuVisible)}
                >
                  Projects
                </button>
                {isProjectsMenuVisible && (
                  <ul className='left-0 flex flex-col pl-8'>
                    <li className='pt-3 text-secondary'>
                      <Link onClick={() => {
                        closeHandler()
                      }} href={'/projects/guardgo'}>GuardGo</Link>
                    </li>
                    <li className='pt-3 text-secondary'>
                      <Link onClick={() => {
                        closeHandler()
                      }} href={'/projects/esboarding'}>ESBoarding</Link>
                    </li>
                    <li className='pt-3 text-secondary'>
                      <Link onClick={() => {
                        closeHandler()
                      }} href={'/projects/ninateka'}>Ninateka</Link>
                    </li>
                    <li className='pt-3 text-secondary'>
                      <Link onClick={() => {
                        closeHandler()
                      }} href={'/'}>Szczecin Filharmony</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className='ml-6 whitespace-nowrap '
              >
                <button className={`activeNavItem px-2 py-0 ${page.includes('/playground') && 'currentNavItem'}`}
                  onClick={() => { setIsPlaygroundMenuVisible(!isPlaygroundMenuVisible) }}
                >
                  Playground
                </button>
                {isPlaygroundMenuVisible && (
                  <ul className='left-0 flex flex-col pl-8'>
                    <li className='pt-3 text-secondary'>
                      <Link onClick={() => {
                        closeHandler()
                      }} href={'/playground/models'}>3D models</Link>
                    </li>
                    <li className='pt-3 text-secondary'>
                      <Link onClick={() => {
                        closeHandler()
                      }} href={'/'}>Motion Visualization</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className='ml-6 whitespace-nowrap '
              >
                <Link className={`activeNavItem p-2 ${page.includes('/about') && 'currentNavItem'}`} href='/#about' onClick={(e) => {
                  if (page === '/') {
                    e.preventDefault()
                    const contactSection = document.querySelector('#about')
                    contactSection?.scrollIntoView({ behavior: 'smooth' })
                  }
                  closeHandler()
                }}>
                  About me
                </Link>
              </li>
              <li
                className='ml-6 whitespace-nowrap'
              >
                <Link className={`activeNavItem p-2 ${page.includes('/contact') && 'currentNavItem'}`} href='/#contact' onClick={(e) => {
                  if (page === '/') {
                    e.preventDefault()
                    const contactSection = document.querySelector('#contact')
                    contactSection?.scrollIntoView({ behavior: 'smooth' })
                  }
                  closeHandler()
                }}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </motion.div>}
      </AnimatePresence >
      {isVisible && <div
        className='fixed left-0 top-0 z-20 h-screen w-screen bg-black opacity-35'
        onClick={() => {
          closeHandler()
        }}
      ></div>
      }
    </>
  );
}
