import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='absolute left-0 w-screen bg-backbround  md:px-24  md:py-12 px-12 py-6'>
      <h2 className='md:mb-10 mb-5 text-2xl md:text-3xl font-bold tracking-wide leading-7 md:leading-10'>Contact</h2>
      <p className='mb-10'>
        Do you have any questions or comments? Are you interested in
        collaborating? <b className='text-primary'>Contact me!</b>
      </p>
      <div className='mx-auto flex justify-center items-center gap-12'>
        <Link href='/'>
          <Image className='md:size-11 size-8' src='/in.svg' height={52} width={52} alt='linkedin logo' />
        </Link>
        <Link href='/'>
          <Image className='md:size-11 size-8' src='/mail.svg' height={52} width={52} alt='linkedin logo' />
        </Link>
        <Link href='/'>
          <Image className='md:size-11 size-8'
            src='/whatsapp.svg'
            height={52}
            width={52}
            alt='linkedin logo'
          />
        </Link>
      </div>
    </footer>
  );
}
