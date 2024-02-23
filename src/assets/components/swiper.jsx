import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../styles/swiper.css'
// import {Button} from "@nextui-org/Button";



// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={false}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        classNameNameName="mySwiper second-step"
        data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="3000"
     data-aos-offset="0"
     
      >
        <SwiperSlide>
        <div className="card">
  <div className="tools">
    <div className="circle">
      <span className="red box"></span>
    </div>
    <div className="circle">
      <span className="yellow box"></span>
    </div>
    <div className="circle">
      <span className="green box"></span>
    </div>
  </div>
  <div className="card__content">
    <div>Instagram Clone</div>
    <button className=''>Visit</button>    
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
  <div className="tools">
    <div className="circle">
      <span className="red box"></span>
    </div>
    <div className="circle">
      <span className="yellow box"></span>
    </div>
    <div className="circle">
      <span className="green box"></span>
    </div>
  </div>
  <div className="card__content">
    <div>Instagram Clone</div>
    <button className=''>Visit</button>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
  <div className="tools">
    <div className="circle">
      <span className="red box"></span>
    </div>
    <div className="circle">
      <span className="yellow box"></span>
    </div>
    <div className="circle">
      <span className="green box"></span>
    </div>
  </div>
  <div className="card__content">
    <div>Twitter Clone</div>
    <button className=''>Visit</button>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
  <div className="tools">
    <div className="circle">
      <span className="red box"></span>
    </div>
    <div className="circle">
      <span className="yellow box"></span>
    </div>
    <div className="circle">
      <span className="green box"></span>
    </div>
  </div>
  <div className="card__content">
    <div>Twitter Clone</div>
    <button className=''>Visit</button>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
  <div className="tools">
    <div className="circle">
      <span className="red box"></span>
    </div>
    <div className="circle">
      <span className="yellow box"></span>
    </div>
    <div className="circle">
      <span className="green box"></span>
    </div>
  </div>
  <div className="card__content">
    <div>Verify Mall</div>
    <button className=''>Visit</button>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
  <div className="tools">
    <div className="circle">
      <span className="red box"></span>
    </div>
    <div className="circle">
      <span className="yellow box"></span>
    </div>
    <div className="circle">
      <span className="green box"></span>
    </div>
  </div>
  <div className="card__content">
    <div>Omni Gpt</div>
    <button className=''>Visit</button>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
  <div className="tools">
    <div className="circle">
      <span className="red box"></span>
    </div>
    <div className="circle">
      <span className="yellow box"></span>
    </div>
    <div className="circle">
      <span className="green box"></span>
    </div>
  </div>
  <div className="card__content">
    <div>Omni Gpt</div>
    <button className=''>Visit</button>
  </div>
</div>
        </SwiperSlide>
              </Swiper>
    </>
  );
}
