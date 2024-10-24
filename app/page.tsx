import Project from '@/components/Project';
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <header className='flex'>
        <div className='flex flex-col h-[500px] justify-center items-start w-1/2'>
          <div className='flex align-middle mb-8'>
            <h1 className='inline text-5xl tracking-wider'>Hi, i&apos;m <b>Magdalena</b></h1>
          </div>

          <p className='text-xl leading-10 mb-8 tracking-wide'>I am a passionate <b className='text-secondary'>UX/UI Designer</b> who loves new <b className='text-primary'>technologies</b> and art.<br /> I use my <b className='text-primary'>creativity</b> to design the best products and services for <b className='text-primary'>users</b>.</p>
          <button className='border-2 border-primary text-primary rounded-full py-1 px-3'>Explore my work</button>
        </div>
        <div className='w-1/2 relative'>
          <Image
            src='/computer.png'
            width="0"
            height="0"
            sizes="100%"
            className="w-auto h-full absolute right-0"
            alt='Abstract 3D pastel-colored shapes flowing out from a computer screen with keyboard and stylus on the desk, representing digital creativity.' />
        </div>
      </header>
      <section className='pt-8 pb-32'>
        <h2 className='text-3xl font-bold tracking-wide'>Projects</h2>
        <div className='w-4/5 mx-auto grid grid-rows-1 grid-cols-2 gap-x-28 mt-9'>
          <Project title='ESBoarding' tags='UX/UI | Mobile | Onboarding | Gamification' description={`Gamified app to enhance onboarding experience for international students.`} image='/ESBoarding.png' imageAlt='A smartphone' />
          <Project title='GuardGo' tags='UX/UI | Smartwatch | Safety' description={`A wearable application to increase the users' sense of security.`} image='/guardGo.png' imageAlt='A smart watch' />
        </div>
      </section>
      <section className=' pb-32'>
        <h2 className='text-3xl font-bold tracking-wide'>Playground</h2>
        <div className='w-4/5 mx-auto grid grid-rows-1 grid-cols-2 gap-x-28 mt-9'>
          <Project title='3D Models' tags='3D Models | Abstract | Blender' image='/3DModels.png' imageAlt='An abstrtact shape' />
          <Project title='Mercedes-Benz motion visualisation' tags='Loop animation | Unity 3D' image='/mercedes.png' imageAlt='A mercedes car surrounded by abstract shapes.' />
        </div>
      </section>
      <section className='pb-16'>
        <h2 className='text-3xl font-bold tracking-wide mb-16'>About me</h2>
        <div className="flex gap-6">
          <Image src='/about.png' className='aspect-[581/563] w-1/2' width={581} height={563} alt='Woman sitting at computer'></Image>
          <div className='text-2xl'>
            <p className='mb-[36px] leading-10'>I&apos;m a UX/UI designer, currently working at Mercedes-Benz UI Concepts in Sindelfingen, Germany. With a master&apos;s degree in Social Informatics (specialization: Design and Product Development) and a double degree in International Management from ESB Business School (Germany) and Jagiellonian University (Poland), I bring a multidimensional perspective to my design work.</p>
            <p className='mb-[36px] leading-10'>Over the years, I&apos;ve taken part in various UX projects, managing them from user research to prototyping and usability testing. My international experience helps me understand diverse user needs and create intuitive solutions. Fluent in Polish, German, and English, I connect easily with users and stakeholders.</p>
            <p>Outside of work, I enjoy nature, travels, playing guitar and savoring a good cup of coffee.</p>
          </div>
        </div>
      </section>
      <section className='w-4/5 mx-auto grid grid-rows-1 grid-cols-3 gap-x-28 mt-9'>
        <div className='flex flex-col'>
          <h3 className='text-3xl font-bold mb-4 text-center'>Skills</h3>
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
          <h3 className='text-3xl font-bold mb-4 text-center'>Tools</h3>
          <ul className='text-2xl leading-10'>
            <li>Figma</li>
            <li>Adobe</li>
            <li>Photoshop</li>
            <li>Adobe </li>
            <li>Illustrator</li>
            <li>Blender</li>
            <li>Unity 3D</li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-3xl font-bold mb-4 text-center'>Aside from design</h3>
          <ul className='text-2xl leading-10'>
            <li>Playing the guitar</li>
            <li>Singing</li>
            <li>Traveling</li>
            <li>Skiing</li>
          </ul>
        </div>
      </section>
      <section className="py-16 flex justify-center">
        <button className='border-2 border-primary text-primary rounded-full py-3 px-7 text-3xl'>View my resume</button>
      </section>
      <section className="px-24 py-12 w-screen bg-backbround absolute left-0">
        <h2 className='text-3xl font-bold tracking-wide mb-10'>Contact</h2>
        <p className='mb-10'>Do you have any questions or comments? Are you interested in collaborating? Contact me!</p>
        <div className='w-5/12 flex justify-between mx-auto'>
          <Link href="/">
            <Image src='/in.svg' height={52} width={52} alt='linkedin logo' />
          </Link>
          <Link href='/'>
            <Image src='/mail.svg' height={52} width={52} alt='linkedin logo' />
          </Link>
          <Link href='/'>
            <Image src='/whatsapp.svg' height={52} width={52} alt='linkedin logo' />
          </Link>
        </div>
      </section>
    </main >
  );
}
