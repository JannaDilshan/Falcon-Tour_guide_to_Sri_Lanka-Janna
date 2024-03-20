import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Home.css';
import SwiperComponent from './Silder/SwiperComponent.jsx';
import { HiStatusOffline } from "react-icons/hi";
import { CgCommunity } from "react-icons/cg";
import { GiArtificialIntelligence } from "react-icons/gi";
import Silde from './Silde/silde.jsx'
import ProvinceCard from './provicecard/provicecard.jsx'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Header from '../Header/Header.jsx'



export default function Home() {
  

  return (
    <div>
      <Header />
      <div className="home">
        <div className="container">
          <h1>SRI LANKA</h1>
          <p>
            Falcon is the ultimate travel companion, offering a seamless experience from planning to exploration. With Falcon, you can effortlessly organize your trips, receive real-time updates on flights, and discover hidden gems at your destination. Our intuitive interface and advanced features make traveling a breeze, allowing you to focus on creating unforgettable memories wherever you go. Say goodbye to travel stress and hello to hassle-free adventures with Falcon.
          </p>
          <div className="sidebar">
            <SwiperComponent />
          </div>
        </div>
      </div>

      <h1 className="map">Map</h1>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            src="https://maps.google.com/maps?q=sri%20lanka&t=k&z=11&ie=UTF8&iwloc=&output=embed"
           
            style={{ width: '100%', height: '420px' }} // Adjust the height as needed
          ></iframe>
        </div>
      </div>

      <h1 className="two">Why Choose Us</h1>

      <div className="iconbox">

      <div className="iconeOne">
      <div className="icon1" >
      <HiStatusOffline className='offline' />
      <h1 className='CommunityText'>Offline Access</h1>
      <p className='Communityp'>Allow users to access essential information and functionalities of the app even without an internet connection, addressing the challenge of remote areas with limited connectivity.</p>
      </div>
      </div>

      <div className="iconeOne">
      <div className="icon2" >
      <CgCommunity className='Community' />
      <h1 className='CommunityText'>Community</h1>
      <p className='Communityp'>Facilitate a community within the app where users can share experiences, provide recommendations, and connect with fellow travelers</p>
      </div>
      </div>

      <div className="iconeOne">
      <div className="icon3" >
      <GiArtificialIntelligence className='Ai'/>
      <h1 className='Aitext'>AI Guidance </h1>
      <p className='Aip'>Incorporate artificial intelligence (AI) to provide personalized recommendations, language translation, and intelligent assistance</p>
       </div>
      </div>
     
      </div>
       <div className="silde">
       <Silde />
       <button type="button" className='btnhome'> <a href=""> Read More</a></button>
       </div>

       <div className="provincecard">
       <h1 className="three"> Suggest Destinations For You</h1>
       <ProvinceCard />
       <button type="button" className='btnhome'> <a href=""> Read More</a></button>
       </div>

        <div className="tripplan">
       <h1 className="four"> Try These  Plan</h1>
       {/* First Row*/}
       <div className="cards">
        <div className="card1">
          <div className="img_card"><img src="/src/assets/UdawalawaNationalPark.jpg" alt="" /></div> 
          <div className="plan-description">
          <h1 className='name1'>Wildlife Wonders at Udawalawa</h1>
          <p className='discription1'>Sri Lanka was my favorite destination of 2018, with endless beaches, welcoming locals, ancient temples, a diversity of wildlife, fun train rides, lush tea plantations, and tasty food.</p>
          </div>

        </div>
        {/*card1 finish*/}
        <div className="card2">
          <div className="img_card"><img src="/src/assets/mirissaNew.jpg" alt="" /></div> 
          <div className="plan-description">
          <h1 className='name2'>Ocean Vibes: Journey to Parrot Rock</h1>
          <p className='discription2'>Parrot Rock is a small island situated along the Beach in Mirissa. Parrot Rock is situated towards the left of the entrance to the Mirissa Beach and offers amazing panoramic views of the ocean surrounding it.
</p>
          </div>

        </div>
       </div>
       {/* Second Row*/}
       <div className="cards-2">
        <div className="card1">
          <div className="img_card"><img src="/src/assets/Jaffna_fort.jpg" alt="" /></div> 
          <div className="plan-description">
          <h1 className='name1'>Jaffna Journeys: A Northern Odyssey</h1>
          <p className='discription1'>The Jaffna peninsula is another vision of Sri Lanka. Between culture, history, landscapes and beaches, story of our trip and guide.</p>
          </div>

        </div>
        {/*card1 finish*/}
        <div className="card2">
          <div className="img_card"><img src="/src/assets/Meemure.jpg" alt="" /></div> 
          <div className="plan-description">
          <h1 className='name2'>Meemure Odyssey: Nature's Embrace</h1>
          <p className='discription2'>Meemure Mystique - Explore the untouched beauty of Meemure, Sri Lanka, with scenic nature walks, cultural encounters, waterfall wonders, wilderness adventures, and a cozy homestay. Immerse yourself in the serenity of this hidden village for a perfect blend of adventure and cultural exploration.</p>
          </div>

        </div>
       </div>
       
       </div>

       {/*triptip*/} 
       <div className="triptip">
       <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

       </div>
       
       </div>
   
  );
}
