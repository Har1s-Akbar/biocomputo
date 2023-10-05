'use client'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { urlFor } from '../_lib/sanity';

function Slider({data}) {
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <main id='home' className='lg:h-full'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
          {data[0].image.map((images, index)=>{
          return  <SwiperSlide key={index}>
                    <Image style={{objectFit:'cover'}} src={urlFor(images).url()} alt='img' width={1000} height={500} />
          </SwiperSlide>
          })}
        <div className="autoplay-progress" slot="container-end">
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </main>
  );
}

export default Slider