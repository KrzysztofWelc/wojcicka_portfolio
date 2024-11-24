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
import React, { useEffect, useState } from 'react';


export default function Gallery({ children }: any) {
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

  const [controller, setController] = useState(null)

  return (
    <Swiper
      id={galleryId}
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      loop
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      centeredSlides={true}
      centeredSlidesBounds={true}
      className='*:select-none'
      controller={{ control: controller }}

    >
      {
        React.Children.map(children, i => {
          return (
            <SwiperSlide key={i.props.src}>
              <a
                href={i.props.src}
                data-pswp-width={i.props.width}
                data-pswp-height={i.props.height}
                className='text-center'
              >
                {i}
              </a>
            </SwiperSlide>
          )
        })
      }

    </Swiper >
  );
}
