'use client';

import Image from 'next/image';

import Img1 from '@/public/motion_animation/kolaz/image_18.png'
import Img2 from '@/public/motion_animation/kolaz/image_19.png'
import Img3 from '@/public/motion_animation/kolaz/image_20.png'
import Img4 from '@/public/motion_animation/kolaz/image_21.png'
import Img5 from '@/public/motion_animation/kolaz/image_22.png'

export default function MotionMoodBoard() {
    return (
        <>
            <div className='hidden gap-2 md:flex md:gap-4'>
                <div className='flex flex-1 flex-col gap-2 *:w-full md:gap-4'>
                    <Image src={Img1} width={300} height={150} alt='' />
                    <Image src={Img4} width={300} height={150} alt='' />
                </div>
                <div className='flex flex-1 flex-col gap-2 *:w-full md:gap-4'>
                    <Image src={Img5} width={300} height={150} alt='' />
                    <Image src={Img2} width={300} height={150} alt='' />
                </div>
                <div className='flex flex-1 flex-col gap-2 *:w-full md:gap-4'>
                    <Image src={Img3} width={300} height={150} alt='' />
                </div>
            </div>

            <div className='flex gap-2 md:hidden md:gap-4'>
                <div className='flex flex-1 flex-col gap-2 *:w-full md:gap-4'>
                    <Image src={Img1} width={300} height={150} alt='' />
                    <Image src={Img4} width={300} height={150} alt='' />
                    <Image src={Img5} width={300} height={150} alt='' />
                </div>

                <div className='flex flex-1 flex-col gap-2 *:w-full md:gap-4'>
                    <Image src={Img2} width={300} height={150} alt='' />
                    <Image src={Img3} width={300} height={150} alt='' />
                </div>
            </div>
        </>
    );
}
