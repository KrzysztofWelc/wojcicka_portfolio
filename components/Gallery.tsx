'use client';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect } from 'react';

export default function Gallery() {
  const galleryId = 'xxsdas';

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryId,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      // lightbox = null;
    };
  }, []);

  return (
    <Swiper
      id={galleryId}
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      loop
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className='*:select-none'
    >
      <SwiperSlide>
        <a
          href='/finalDesign/1.png'
          data-pswp-width='1050'
          data-pswp-height='787'
        >
          <Image
            src='/finalDesign/1.png'
            width={1050}
            height={787}
            alt='a smart watch with guard go welcome screen'
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a
          href='/finalDesign/2.png'
          data-pswp-width='1050'
          data-pswp-height='787'
        >
          <Image
            src='/finalDesign/2.png'
            width={1050}
            height={787}
            alt='a smart watch with guard go welcome screen'
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a
          href='/finalDesign/3.png'
          data-pswp-width='1050'
          data-pswp-height='787'
        >
          <Image
            src='/finalDesign/3.png'
            width={1050}
            height={787}
            alt='a smart watch with guard go welcome screen'
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a
          href='/finalDesign/4.png'
          data-pswp-width='1050'
          data-pswp-height='787'
        >
          <Image
            src='/finalDesign/4.png'
            width={1050}
            height={787}
            alt='a smart watch with guard go welcome screen'
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a
          href='/finalDesign/5.png'
          data-pswp-width='1050'
          data-pswp-height='787'
        >
          <Image
            src='/finalDesign/5.png'
            width={1050}
            height={787}
            alt='a smart watch with guard go welcome screen'
          />
        </a>
      </SwiperSlide>
    </Swiper>
  );
}
