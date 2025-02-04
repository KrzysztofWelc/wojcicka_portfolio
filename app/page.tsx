'use client';

import Footer from '@/components/Footer';
import Project from '@/components/Project';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import HomepageImage from '@/public/homepage/homepage_image.jpeg'
import ESBoarding from '@/public/homepage/esboarding.png'
import Guardgo from '@/public/homepage/guardgo.png'
// import Ninateka from '@/public/homepage/ninateka.png'
// import Szczecin from '@/public/homepage/szczecin_philharmonic.png'
import TDModels from '@/public/homepage/3d_models.jpeg'
import Motion from '@/public/homepage/motion_visualisation.jpeg'
import About from '@/components/About';
import AboutImage from '@/public/homepage/about_me.png';
import SectionAnchor from '@/components/SectionAnchor';
import ExploreBtn from '@/components/ExploreBtn';


export default function Home() {

  return (
    <main>
      <header className='flex items-center justify-center pt-24 md:pt-0'>
        <div className='flex min-h-screen w-full flex-col justify-center md:flex-row'>
          <div className='flex w-full flex-1 flex-col items-start justify-center'>
            <div className='mb-8 flex align-middle'>
              <h1 className='inline text-5xl tracking-wider'>
                Hi, i&apos;m <b>Magdalena</b>
              </h1>
            </div>

            <p className='mb-8 text-2xl leading-10 tracking-wide'>
              I am a passionate <b className='text-secondary'>UX/UI Designer</b>{' '}
              who loves new <b className='text-primary'>technologies</b> and
              art.
              <br />I use my <b className='text-primary'>creativity</b> to
              design the best products and services for{' '}
              <b className='text-primary'>users</b>.
            </p>
            <ExploreBtn text='Explore my work' sectionId='projects' />
          </div>
          <div className='flex flex-1 flex-col'>
            <Image
              src={HomepageImage}
              placeholder='blur'
              width='0'
              height='0'
              sizes='100%'
              className='my-auto w-full'
              alt='Abstract 3D pastel-colored shapes flowing out from a computer screen with keyboard and stylus on the desk, representing digital creativity.'
            />
          </div>
        </div>
      </header>
      <section className='pb-16 pt-8'>
        <SectionAnchor id='projects' />
        <h2 className='text-3xl font-bold tracking-wide'>Projects</h2>
        <div className='mx-auto mt-9 grid grid-cols-1 grid-rows-2 gap-x-28 gap-y-12 md:grid-cols-2 md:grid-rows-1'>
          <Project
            title='ESBoarding'
            tags='UX/UI | Mobile | Onboarding | Gamification'
            description={`Gamified app to enhance onboarding experience for international students.`}
            image={ESBoarding}
            imageAlt='A smartphone'
            url={'/projects/esboarding'}
          />
          <Project
            title='GuardGo'
            tags='UX/UI | Smartwatch | Safety'
            description={`A wearable application to increase the users' sense of security.`}
            image={Guardgo}
            imageAlt='A smart watch'
            url={'/projects/guardgo'}
          />
        </div>
      </section>
      <section className='pb-16'>
        <SectionAnchor id='playground' />
        <h2 className='text-3xl font-bold tracking-wide'>Playground</h2>
        <div className='mx-auto mt-9 grid grid-cols-1 grid-rows-2 gap-x-28 md:grid-cols-2 md:grid-rows-1'>
          <Project
            title='3D Models'
            tags='3D Models | Abstract | Blender'
            image={TDModels}
            imageAlt='An abstrtact shape'
            url={'/playground/models'}
          />
          <Project
            title='Mercedes-Benz motion visualisation'
            tags='Loop animation | Unity 3D'
            image={Motion}
            imageAlt='A mercedes car surrounded by abstract shapes.'
            url={'/playground/motion_visualisation'}
          />
        </div>
      </section>
      <section className='pb-16'>
        <SectionAnchor id='about' />
        <h2 className='mb-16 text-3xl font-bold tracking-wide'>About me</h2>
        <div className="flex gap-14 justify-between items-start flex-col-reverse xl:flex-row">
          <Image
            src={AboutImage}
            width={AboutImage.width}
            height={AboutImage.height}
            alt=''
            className='object-contain  '
          />
          <About />
        </div>
      </section>

      <section className='flex justify-center py-16'>
        <Link href='/cv.pdf' target='blank' className='rounded-full border-2 border-white bg-primary px-7 py-3 text-3xl text-white'>
          View my resume
        </Link>
      </section>
      <Footer />
    </main>
  );
}
