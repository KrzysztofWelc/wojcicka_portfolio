import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id='contact' className='absolute left-0 w-screen bg-backbround px-12 py-6 md:px-24 md:py-12'>
      <h2 className='mb-5 text-2xl font-bold leading-7 tracking-wide md:mb-10 md:text-3xl md:leading-10'>
        Contact
      </h2>
      <p className='mb-10'>
        Do you have any questions or comments? Are you interested in
        collaborating? <b className='text-primary'>Contact me!</b>
      </p>
      <div className='mx-auto flex items-center justify-center gap-12'>
        <Link href='/'>
          <Image
            className='size-8 md:size-11'
            src='/in.svg'
            height={52}
            width={52}
            alt='linkedin logo'
          />
        </Link>
        <Link href='/'>
          <Image
            className='size-8 md:size-11'
            src='/mail.svg'
            height={52}
            width={52}
            alt='linkedin logo'
          />
        </Link>
        <Link href='/'>
          <Image
            className='size-8 md:size-11'
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
