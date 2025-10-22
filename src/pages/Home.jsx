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
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/6RF2VDFb/1.jpg" alt="Slide 1" className="w-full h-[550px] object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/hJWy5Cx1/2.jpg" alt="Slide 2" className="w-full h-[550px] object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/HLD4btxc/3.jpg" alt="Slide 3" className="w-full h-[550px] object-cover"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
