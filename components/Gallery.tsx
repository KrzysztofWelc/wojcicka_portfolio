'use client';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      loop
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className='*:select-none'
    >
      <SwiperSlide>
        <Image
          src='/finalDesign/1.png'
          width={1050}
          height={787}
          alt='a smart watch with guard go welcome screen'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/finalDesign/2.png'
          width={1050}
          height={787}
          alt='a smart watch with guard go welcome screen'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/finalDesign/3.png'
          width={1050}
          height={787}
          alt='a smart watch with guard go welcome screen'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/finalDesign/4.png'
          width={1050}
          height={787}
          alt='a smart watch with guard go welcome screen'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/finalDesign/5.png'
          width={1050}
          height={787}
          alt='a smart watch with guard go welcome screen'
        />
      </SwiperSlide>

    </Swiper>
  );
};
