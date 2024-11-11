'use client';

import Image from 'next/image';

export default function MoodBoard() {
  return (
    <>
      <div className='hidden gap-2 md:flex md:gap-4'>
        <div className='flex flex-1 flex-col gap-2 *:w-full md:gap-4'>
          <Image src='/moodboard/2.png' width={300} height={150} alt='' />
          <Image src='/moodboard/3.png' width={300} height={150} alt='' />
          <Image src='/moodboard/9.png' width={300} height={150} alt='' />
        </div>
        <div className='flex flex-1 flex-col gap-2 *:w-full md:gap-4'>
          <Image src='/moodboard/8.png' width={300} height={150} alt='' />
          <Image src='/moodboard/4.png' width={300} height={150} alt='' />
        </div>
        <div className='flex flex-1 flex-col gap-2 *:w-full md:gap-4'>
          <Image src='/moodboard/5.png' width={300} height={150} alt='' />

          <Image src='/moodboard/6.png' width={300} height={150} alt='' />
          <Image src='/moodboard/7.png' width={300} height={150} alt='' />
        </div>
      </div>

      <div className='flex gap-2 md:hidden md:gap-4'>
        <div className='flex flex-1 flex-col gap-2 *:w-full md:gap-4'>
          <Image src='/moodboard/8.png' width={300} height={150} alt='' />
          <Image src='/moodboard/2.png' width={300} height={150} alt='' />
          <Image src='/moodboard/3.png' width={300} height={150} alt='' />
          <Image src='/moodboard/9.png' width={300} height={150} alt='' />
        </div>

        <div className='flex flex-1 flex-col gap-2 *:w-full md:gap-4'>
          <Image src='/moodboard/5.png' width={300} height={150} alt='' />

          <Image src='/moodboard/6.png' width={300} height={150} alt='' />
          <Image src='/moodboard/7.png' width={300} height={150} alt='' />
          <Image src='/moodboard/4.png' width={300} height={150} alt='' />
        </div>
      </div>
    </>
  );
}
