import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='absolute left-0 w-screen bg-backbround px-24 py-12'>
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
    </footer>
  );
}
