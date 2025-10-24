import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ToyCard from "../components/ToyCard";
import toysData from "../data/toys.json";

export default function Home() {
  return (
    <div className="container mx-auto mt-4">
      {/* Slider Section */}
      <div className="mb-8">
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

      {/* Toys Section */}
      <h2 className="text-3xl font-bold mb-4 text-center">Popular Toys</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mb-6">
        {toysData.map(toy => (
          <ToyCard key={toy.toyId} toy={toy} />
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mb-10">
        <button  className="w-32 h-13 bg-gray-100 hover:bg-gray-300 text-black rounded-lg border">View More</button>
      </div>
    </div>
  );
}
