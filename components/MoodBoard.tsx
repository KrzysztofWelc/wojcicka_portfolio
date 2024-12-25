'use client';

import Image from 'next/image';

import Img2 from '@/public/guardgo/kolaz/2.png'
import Img3 from '@/public/guardgo/kolaz/3.png'
import Img4 from '@/public/guardgo/kolaz/4.png'
import Img5 from '@/public/guardgo/kolaz/5.png'
import Img6 from '@/public/guardgo/kolaz/6.png'
import Img7 from '@/public/guardgo/kolaz/7.png'
import Img8 from '@/public/guardgo/kolaz/8.png'
import Img9 from '@/public/guardgo/kolaz/9.png'

export default function MoodBoard() {
  return (
    <>
      <div className='hidden gap-2 md:flex md:gap-4'>
        <div className='flex flex-1 flex-col gap-2 *:w-full md:gap-4'>
          <Image src={Img2} width={300} height={150} alt='' />
          <Image src={Img3} width={300} height={150} alt='' />
          <Image src={Img9} width={300} height={150} alt='' />
        </div>
        <div className='flex flex-1 flex-col gap-2 *:w-full md:gap-4'>
          <Image src={Img8} width={300} height={150} alt='' />
          <Image src={Img4} width={300} height={150} alt='' />
        </div>
        <div className='flex flex-1 flex-col gap-2 *:w-full md:gap-4'>
          <Image src={Img5} width={300} height={150} alt='' />

          <Image src={Img6} width={300} height={150} alt='' />
          <Image src={Img7} width={300} height={150} alt='' />
        </div>
      </div>

      <div className='flex gap-2 md:hidden md:gap-4'>
        <div className='flex flex-1 flex-col gap-2 *:w-full md:gap-4'>
          <Image src={Img8} width={300} height={150} alt='' />
          <Image src={Img2} width={300} height={150} alt='' />
          <Image src={Img3} width={300} height={150} alt='' />
          <Image src={Img9} width={300} height={150} alt='' />
        </div>

        <div className='flex flex-1 flex-col gap-2 *:w-full md:gap-4'>
          <Image src={Img5} width={300} height={150} alt='' />

          <Image src={Img6} width={300} height={150} alt='' />
          <Image src={Img7} width={300} height={150} alt='' />
          <Image src={Img4} width={300} height={150} alt='' />
        </div>
      </div>
    </>
  );
}
