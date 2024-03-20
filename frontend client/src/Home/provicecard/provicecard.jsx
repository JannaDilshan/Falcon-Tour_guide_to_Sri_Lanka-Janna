import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../provicecard/province.css';

// import required modules
import { Autoplay, Navigation  } from 'swiper/modules';

function provicecard() {
  return (
    <div className='provincecard'>

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
    //  autoplay={{
    //      delay: 5500,
    //      disableOnInteraction: true,
    //      loop:true,

    //    }}
      
       lazy={true}
   

       loop={true}
     navigation={true}
     modules={[ Autoplay, Navigation]}
     className="mySwiper1"
   >
    <div className="province">
     <SwiperSlide> <a href="" className='textprovince'> <img
         src="/src/assets/colombo.jpg" loading="lazy"/> <span>Weston Province </span>
         <div className="swiper-lazy-preloader swiper-lazy-preloader-white"> </div> </a> </SwiperSlide>
     <SwiperSlide> <a href="" className='textprovince'> <img
         src="/src/assets/temple of the tooth.jpg" loading="lazy"/> <span>Central Province </span>
         <div className="swiper-lazy-preloader swiper-lazy-preloader-white"> </div> </a> </SwiperSlide>
     <SwiperSlide><a href="" className='textprovince'> <img
         src="/src/assets/trinco.jpg" loading="lazy"/> <span>Eastern Province </span>
         <div className="swiper-lazy-preloader swiper-lazy-preloader-white"> </div> </a></SwiperSlide>
     <SwiperSlide><a href="" className='textprovince'> <img
         src="/src/assets/anuradhapura.jpg" loading="lazy"/> <span>North Central Province </span>
         <div className="swiper-lazy-preloader swiper-lazy-preloader-white"> </div> </a></SwiperSlide>
     <SwiperSlide><a href="" className='textprovince'> <img
         src="/src/assets/Jaffna.jpg" loading="lazy"/> <span> Northern Province </span>
         <div className="swiper-lazy-preloader swiper-lazy-preloader-white"> </div> </a></SwiperSlide>
     <SwiperSlide><a href="" className='textprovince'> <img
         src="/src/assets/yapahuwaNew.jpg" loading="lazy"/> <span>North Western Province </span>
         <div className="swiper-lazy-preloader swiper-lazy-preloader-white"> </div> </a></SwiperSlide>
     <SwiperSlide><a href="" className='textprovince'> <img
         src="/src/assets/pinnawala.jpg" loading="lazy"/> <span> Sabaragamuwa Province </span>
         <div className="swiper-lazy-preloader swiper-lazy-preloader-white"> </div> </a></SwiperSlide>
     <SwiperSlide><a href="" className='textprovince'> <img
         src="/src/assets/BlueBeach.jpg" loading="lazy"/> <span>Southern Province </span>
         <div className="swiper-lazy-preloader swiper-lazy-preloader-white"> </div> </a></SwiperSlide>
     <SwiperSlide><a href="" className='textprovince'> <img
         src="/src/assets/nuwaraeliya.jpeg" loading="lazy"/> <span>Uva Province </span>
         <div className="swiper-lazy-preloader swiper-lazy-preloader-white"> </div> </a></SwiperSlide>
         </div>

   </Swiper>
 </div>
)
}

export default provicecard
