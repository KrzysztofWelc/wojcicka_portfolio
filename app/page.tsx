'use client';

import Project from '@/components/Project';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function Home() {
  const projectsSectionRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <header className='flex'>
        <div className='flex h-[500px] w-1/2 flex-col items-start justify-center'>
          <div className='mb-8 flex align-middle'>
            <h1 className='inline text-5xl tracking-wider'>
              Hi, i&apos;m <b>Magdalena</b>
            </h1>
          </div>

          <p className='mb-8 text-2xl leading-10 tracking-wide'>
            I am a passionate <b className='text-secondary'>UX/UI Designer</b>{' '}
            who loves new <b className='text-primary'>technologies</b> and art.
            <br /> I use my <b className='text-primary'>creativity</b> to design
            the best products and services for{' '}
            <b className='text-primary'>users</b>.
          </p>
          <button
            onClick={() =>
              projectsSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
            }
            className='delay-50 rounded-full border-2 border-primary px-3 py-2 text-2xl text-primary transition-all ease-in-out hover:bg-sky-50 hover:font-bold hover:tracking-wide'
          >
            Explore my work
          </button>
        </div>
        <div className='relative w-1/2'>
          <Image
            src='/computer.png'
            width='0'
            height='0'
            sizes='100%'
            className='absolute right-0 h-full w-auto'
            alt='Abstract 3D pastel-colored shapes flowing out from a computer screen with keyboard and stylus on the desk, representing digital creativity.'
          />
        </div>
      </header>
      <section className='pb-32 pt-8' ref={projectsSectionRef}>
        <h2 className='text-3xl font-bold tracking-wide'>Projects</h2>
        <div className='mx-auto mt-9 grid w-4/5 grid-cols-2 grid-rows-1 gap-x-28'>
          <Project
            title='ESBoarding'
            tags='UX/UI | Mobile | Onboarding | Gamification'
            description={`Gamified app to enhance onboarding experience for international students.`}
            image='/ESBoarding.png'
            imageAlt='A smartphone'
          />
          <Project
            title='GuardGo'
            tags='UX/UI | Smartwatch | Safety'
            description={`A wearable application to increase the users' sense of security.`}
            image='/guardGo.png'
            imageAlt='A smart watch'
          />
        </div>
      </section>
      <section className='pb-32'>
        <h2 className='text-3xl font-bold tracking-wide'>Playground</h2>
        <div className='mx-auto mt-9 grid w-4/5 grid-cols-2 grid-rows-1 gap-x-28'>
          <Project
            title='3D Models'
            tags='3D Models | Abstract | Blender'
            image='/3DModels.png'
            imageAlt='An abstrtact shape'
          />
          <Project
            title='Mercedes-Benz motion visualisation'
            tags='Loop animation | Unity 3D'
            image='/mercedes.png'
            imageAlt='A mercedes car surrounded by abstract shapes.'
          />
        </div>
      </section>
      <section className='pb-16'>
        <h2 className='mb-16 text-3xl font-bold tracking-wide'>About me</h2>
        <div className='flex gap-6'>
          <Image
            src='/about.png'
            className='aspect-[581/563] w-1/2'
            width={581}
            height={563}
            alt='Woman sitting at computer'
          ></Image>
          <div className='text-2xl'>
            <p className='mb-[36px] leading-10'>
              I&apos;m a UX/UI designer, currently working at Mercedes-Benz UI
              Concepts in Sindelfingen, Germany. With a master&apos;s degree in
              Social Informatics (specialization: Design and Product
              Development) and a double degree in International Management from
              ESB Business School (Germany) and Jagiellonian University
              (Poland), I bring a multidimensional perspective to my design
              work.
            </p>
            <p className='mb-[36px] leading-10'>
              Over the years, I&apos;ve taken part in various UX projects,
              managing them from user research to prototyping and usability
              testing. My international experience helps me understand diverse
              user needs and create intuitive solutions. Fluent in Polish,
              German, and English, I connect easily with users and stakeholders.
            </p>
            <p>
              Outside of work, I enjoy nature, travels, playing guitar and
              savoring a good cup of coffee.
            </p>
          </div>
        </div>
      </section>
      <section className='mx-auto mt-9 grid w-4/5 grid-cols-3 grid-rows-1 gap-x-28'>
        <div className='flex flex-col'>
          <h3 className='mb-4 text-3xl font-bold'>Skills</h3>
          <ul className='text-2xl leading-10'>
            <li>Product design</li>
            <li>UX research</li>
            <li>Wireframing</li>
            <li>Usability testing</li>
            <li>Visual Design</li>
            <li>Project management</li>
            <li>3D projects</li>
            <li>3D animation</li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h3 className='mb-4 text-3xl font-bold'>Tools</h3>
          <ul className='text-2xl leading-10'>
            <li>Figma</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Blender</li>
            <li>Unity 3D</li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h3 className='mb-4 text-3xl font-bold'>Aside from design</h3>
          <ul className='text-2xl leading-10'>
            <li>Playing the guitar</li>
            <li>Singing</li>
            <li>Traveling</li>
            <li>Skiing</li>
          </ul>
        </div>
      </section>
      <section className='flex justify-center py-16'>
        <button className='rounded-full border-2 border-white bg-primary px-7 py-3 text-3xl text-white'>
          View my resume
        </button>
      </section>
      <section className='absolute left-0 w-screen bg-backbround px-24 py-12'>
        <h2 className='mb-10 text-3xl font-bold tracking-wide'>Contact</h2>
        <p className='mb-10 text-2xl'>
          Do you have any questions or comments? Are you interested in
          collaborating? <b className='text-primary'>Contact me!</b>
        </p>
        <div className='mx-auto flex w-5/12 justify-between'>
          <Link href='/'>
            <Image src='/in.svg' height={52} width={52} alt='linkedin logo' />
          </Link>
          <Link href='/'>
            <Image src='/mail.svg' height={52} width={52} alt='linkedin logo' />
          </Link>
          <Link href='/'>
            <Image
              src='/whatsapp.svg'
              height={52}
              width={52}
              alt='linkedin logo'
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
