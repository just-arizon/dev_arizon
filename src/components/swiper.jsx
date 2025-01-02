import React from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import {Button} from "@nextui-org/button";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../styles/swiper.css";

// import {Button} from "@nextui-org/Button";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={false}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper second-step"
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
            <div className="flex items-center justify-center">
              <div className="card__content">
                <div className="card_title font-extrabold">Instagram Clone</div>
                <button className="text-sm btn-style ">Visit</button>
              </div>
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
            <div className="flex items-center justify-center">
              <div className="card__content">
                <div className="card_title font-extrabold">Instagram Clone</div>
                <button className="text-sm btn-style ">Visit</button>
              </div>
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
            <div className="flex items-center justify-center">
              <div className="card__content">
                <div className="card_title font-extrabold">Instagram Clone</div>
                <button className="text-sm btn-style ">Visit</button>
              </div>
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
            <div className="flex items-center justify-center">
              <div className="card__content">
                <div className=" font-extrabold card_title">
                  Instagram Clone
                </div>
                <button className="text-sm btn-style ">Visit</button>
              </div>
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
            <div className="flex items-center justify-center">
              <div className="card__content">
                <div className="card_title font-extrabold">Instagram Clone</div>
                <button className="text-sm btn-style ">Visit</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="w-full flex justify-center pt-20 pb-10">
        <Button className="bg-[#242424]  rounded-full flex gap-1 py-2 px-8">
          <p>Resume</p>
          <div className="flex items-center h-full"><FaArrowRightFromBracket /></div>
          </Button>
      </div>
    </>
  );
}
