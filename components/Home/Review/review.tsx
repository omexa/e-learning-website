import React from "react";
import { MdFeedback } from "react-icons/md";
import { SliderData } from "@/data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "../Slider/Slider";

function Review() {
  return (
    <div
      id="review"
      className="flex w-full items-center justify-center bg-black pt-16 pb-14"
    >
      <div className="w-4/5 grid  xl:grid-cols-2 items-center justify-center">
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <MdFeedback className="text-white w-14 h-14 rounded-full p-2 bg-red-600" />
            <p className="text-white text-xl font-bold">Students Feedback</p>
          </div>
          <h1 className="text-white text-4xl font-bold mt-5 md:text-5xl lg:text-7xl">
            Trusted by genius people.
          </h1>
          <h1 className="text-white opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam alias
            provident sit qui odit dolorum sunt ducimus mollitia beatae
            repudiandae!
          </h1>
          <div className="flex text-white font-bold space-x-5">
            <h1 className="text-3xl md:text-5xl lg:7xl">99%</h1>
            <h1 className="opacity-65">
              Students complete course successfully.
            </h1>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default Review;
