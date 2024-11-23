import React from "react";
import { FaSearch } from "react-icons/fa";

function HeroConetnts() {
  return (
    <div className="hero-content">
      {/* title */}
      <h1
        data-aos="fade-right"
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:7xl font-bold  md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white"
      >
        Learn on your schedule
      </h1>
      {/* description */}
      <p
        data-aos="fade-left"
        data-aos-delay="200"
        className="mt-4 text-white text-opacity-70 text-3xl md:text-5xl"
      >
        Anywhere,anytime. Start learning today!
      </p>
      {/* Buttons */}
      <div
        data-aos="fade-left"
        data-aos-delay="100"
        className="mt-8 grid md:grid-cols-2  justify-center space-x-4 gap-4"
      >
        <div className="flex bg-gray-300 px-2 overflow-hidden rounded-full justify-between  items-center border-2 border-black shadow-md">
          <input
            className="bg-gray-300 outline-none p-2"
            placeholder="what you need to learn?"
          />
          <FaSearch className="w-8 h-8 text-purple-900 hover:text-purple-950 cursor-pointer " />
        </div>
        <button className=" button_style bg-purple-950 hover:bg-purple-700">
          Get Started{" "}
        </button>
      </div>
      <div
        data-aos="fade-right"
        data-aos-delay="100"
        className=" flex items-center justify-between px-10 mt-7 text-white font-semibold text-xl"
      >
        <div>
          <p className="border-b-4 border-pink-700 w-18">10+</p>
          <p>Course</p>
        </div>
        <div>
          <p className="border-b-4 border-green-500 w-18">90+</p>
          <p>Tutors</p>
        </div>
        <div>
          <p className="border-b-4 border-red-700 w-18">50+</p>
          <p>Students</p>
        </div>
      </div>
    </div>
  );
}

export default HeroConetnts;
