import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // নতুন path
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Home() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2016/03/31/20/11/lego-1297582_1280.png" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2017/01/30/13/27/lego-2022036_1280.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2017/01/31/21/21/lego-2027591_1280.jpg" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
