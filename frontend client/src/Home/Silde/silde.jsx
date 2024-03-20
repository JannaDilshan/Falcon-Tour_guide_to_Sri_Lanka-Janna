import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../Silde/silder.css';

// import required modules
import {  Autoplay, Navigation  } from 'swiper/modules';

function silde() {
  return (
    <div className='Silde'>

       <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
        autoplay={{
            delay: 5500,
            disableOnInteraction: true,
            loop:true,

          }}
         
          lazy={true}
      

          loop={true}
        navigation={true}
        modules={[ Autoplay, Navigation]}
        className="mySwiper1"
      >
        <SwiperSlide> <img
            src="/src/assets/SigiriyaNew.jpg" loading="lazy"/>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
        <SwiperSlide><img
            src="/src/assets/9arch.jpg" loading="lazy"/>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
        <SwiperSlide><img
            src="/src/assets/Aberdeen Waterfall.jpg" loading="lazy"/>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
        <SwiperSlide><img
            src="/src/assets/Benthota.jpg" loading="lazy"/>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
        <SwiperSlide><img
            src="/src/assets/Dabulla.jpg" loading="lazy"/>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
        <SwiperSlide><img
            src="/src/assets/Diyaluma.jpg" loading="lazy"/>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
        <SwiperSlide><img
            src="/src/assets/Gartmore falls.jpg" loading="lazy"/>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
        <SwiperSlide><img
            src="/src/assets/Hiriketiya Beach.jpg" loading="lazy"/>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
        <SwiperSlide><img
            src="/src/assets/Jaffna.jpg" loading="lazy"/>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
     
      <SwiperSlide><img
            src="/src/assets/Jodu Ella.jpg" loading="lazy"/>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
     
      <SwiperSlide><img
      src="/src/assets/Jungle Beach.jpg" loading="lazy"/>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
      <SwiperSlide><img
      src="/src/assets/kadadora vihara kotmale dam.jpg" loading="lazy"/>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
      <SwiperSlide><img
      src="/src/assets/Kadiyanlena falls.jpg" loading="lazy"/>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
      <SwiperSlide><img
      src="/src/assets/Kalawewa.jpg" loading="lazy"/>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
      <SwiperSlide><img
      src="/src/assets/Kelaniya Temple.jpg" loading="lazy"/>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
      <SwiperSlide><img
      src="/src/assets/Koggala Beach.jpg" loading="lazy"/>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
      <SwiperSlide><img
      src="/src/assets/kurunegala.jpg" loading="lazy"/>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
      <SwiperSlide><img
      src="/src/assets/Kuuragala.jpg" loading="lazy"/>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
      <SwiperSlide><img
      src="/src/assets/Laxapana Waterfall.jpg" loading="lazy"/>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
      <SwiperSlide><img
      src="/src/assets/Meeyan Ella.jpg" loading="lazy"/>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
      <SwiperSlide><img
      src="/src/assets/Mirissa.jpg" loading="lazy"/>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
      <SwiperSlide><img
      src="/src/assets/Mirissabeach.jpg" loading="lazy"/>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
      <SwiperSlide><img
      src="/src/assets/Nelligala.jpg" loading="lazy"/>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
      <SwiperSlide><img
      src="/src/assets/Nilaveli Beach.jpg" loading="lazy"/>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
      <SwiperSlide><img
      src="/src/assets/Nuwaragala.jpg" loading="lazy"/>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
      <SwiperSlide><img
      src="/src/assets/peradeniya.jpg" loading="lazy"/>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
      <SwiperSlide><img
      src="/src/assets/PinnawalaNew.jpg" loading="lazy"/>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
      <SwiperSlide><img
      src="/src/assets/polonnaruwa.jpg" loading="lazy"/>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
      <SwiperSlide><img
      src="/src/assets/Red Mosque.jpg" loading="lazy"/>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
      <SwiperSlide><img
      src="/src/assets/Ruwanweli Maha.jpg" loading="lazy"/>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
      <SwiperSlide><img
      src="/src/assets/Sera ella.jpg" loading="lazy"/>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
      <SwiperSlide><img
      src="/src/assets/Sithulpawwa Rajamaha .jpg" loading="lazy"/>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
      <SwiperSlide><img
      src="/src/assets/Sripade.jpg" loading="lazy"/>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>


      </Swiper>
    </div>
  )
}

export default silde
