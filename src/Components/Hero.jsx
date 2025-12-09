import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
const Hero = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 1000 }}
    >
      <SwiperSlide>
        <div className="flex justify-center">
          <img
            src={`https://i.ibb.co.com/Tqx64857/Gemini-Generated-Image-e5mj2ve5mj2ve5mj.png`}
            className="w-full md:h-[800px] object-contain lg:object-cover"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center">
          <img
            src={`https://i.ibb.co.com/Mkhm8wfX/5858595.jpg`}
            className="w-full md:h-[800px] object-contain lg:object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center">
          <img
            src={`https://i.ibb.co.com/4Z9Nxb67/5724079.jpg`}
            className="w-full md:h-[800px] object-contain lg:object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co.com/MDfH9N4V/Gemini-Generated-Image-bhjzp7bhjzp7bhjz.png"
            className="w-full lg:h-[800px] object-contain md:object-cover"
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
