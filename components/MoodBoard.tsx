'use client';

import Macy from 'macy';
import Image from 'next/image';
import { useEffect } from 'react';

export default function MoodBoard() {
  useEffect(() => {
    new Macy({
      container: '#mb',
      trueOrder: false,
      waitForImages: false,
      useOwnImageLoader: false,
      debug: true,
      mobileFirst: true,
      columns: 3,
      margin: {
        y: 16,
        x: '2%',
      },
    });
  }, []);

  return (
    <div id='mb'>
      <Image src='/moodboard/2.png' width={300} height={150} alt='' />
      <Image src='/moodboard/8.png' width={300} height={150} alt='' />
      <Image src='/moodboard/5.png' width={300} height={150} alt='' />
      <Image src='/moodboard/6.png' width={300} height={150} alt='' />
      <Image src='/moodboard/3.png' width={300} height={150} alt='' />
      <Image src='/moodboard/4.png' width={300} height={150} alt='' />
      <Image src='/moodboard/9.png' width={300} height={150} alt='' />
      <Image src='/moodboard/7.png' width={300} height={150} alt='' />
    </div>
  );
}
