import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';
import './slider.css';

const SwiperComponent = () => {
  return (
    <div>
      <>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slideShadows={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            scale: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            loop:true,

          }}
          loop={true} 
          pagination={true}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/src/assets/sigiriya.jpg" alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/awkana.jpg" alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/yapahuwa.jpg" alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/ambuluwawatower.jpg" alt="Slide 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/Yalanationalpark.jpg" alt="Slide 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/Ninearch.jpg" alt="Slide 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/UdawalawaNationalPark.jpg" alt="Slide 6" />
          </SwiperSlide>
        </Swiper>
      </>

      
    </div>
  );
};

export default SwiperComponent;
