'use client';

import Image from 'next/image';

export default function MoodBoard() {
  return (
    <>

      <div className='hidden md:flex md:gap-4 gap-2'>
        <div className='flex flex-col md:gap-4 gap-2 flex-1 *:w-full'>
          <Image src='/moodboard/2.png' width={300} height={150} alt='' />
          <Image src='/moodboard/3.png' width={300} height={150} alt='' />
          <Image src='/moodboard/9.png' width={300} height={150} alt='' />
        </div>
        <div className='flex flex-col md:gap-4 gap-2 flex-1 *:w-full'>
          <Image src='/moodboard/8.png' width={300} height={150} alt='' />
          <Image src='/moodboard/4.png' width={300} height={150} alt='' />
        </div>
        <div className='flex flex-col md:gap-4 gap-2 flex-1 *:w-full'>
          <Image src='/moodboard/5.png' width={300} height={150} alt='' />

          <Image src='/moodboard/6.png' width={300} height={150} alt='' />
          <Image src='/moodboard/7.png' width={300} height={150} alt='' />
        </div>
      </div>

      <div className='md:hidden flex md:gap-4 gap-2'>
        <div className='flex flex-col md:gap-4 gap-2 flex-1 *:w-full'>
          <Image src='/moodboard/8.png' width={300} height={150} alt='' />
          <Image src='/moodboard/2.png' width={300} height={150} alt='' />
          <Image src='/moodboard/3.png' width={300} height={150} alt='' />
          <Image src='/moodboard/9.png' width={300} height={150} alt='' />
        </div>

        <div className='flex flex-col md:gap-4 gap-2 flex-1 *:w-full'>
          <Image src='/moodboard/5.png' width={300} height={150} alt='' />

          <Image src='/moodboard/6.png' width={300} height={150} alt='' />
          <Image src='/moodboard/7.png' width={300} height={150} alt='' />
          <Image src='/moodboard/4.png' width={300} height={150} alt='' />
        </div>
      </div>


    </>
  );
}
