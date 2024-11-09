'use client';

import Image from 'next/image';

export default function MoodBoard() {
  return (
    <div className='flex gap-4'>
      <div className='flex flex-col gap-4 flex-1 *:w-full'>
        <Image src='/moodboard/2.png' width={300} height={150} alt='' />
        <Image src='/moodboard/3.png' width={300} height={150} alt='' />
        <Image src='/moodboard/9.png' width={300} height={150} alt='' />
      </div>
      <div className='flex flex-col gap-4 flex-1 *:w-full'>
        <Image src='/moodboard/8.png' width={300} height={150} alt='' />
        <Image src='/moodboard/4.png' width={300} height={150} alt='' />
      </div>
      <div className='flex flex-col gap-4 flex-1 *:w-full'>
        <Image src='/moodboard/5.png' width={300} height={150} alt='' />

        <Image src='/moodboard/6.png' width={300} height={150} alt='' />
        <Image src='/moodboard/7.png' width={300} height={150} alt='' />
      </div>
    </div>
  );
}
