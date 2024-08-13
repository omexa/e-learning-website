import React from "react";
import { BiArrowToRight } from "react-icons/bi";
import { PiCertificateDuotone } from "react-icons/pi";

function AboutDisk() {
  return (
    <div className="space-y-5 text-white gap-3">
      <div className="flex items-center space-x-2 font-extrabold text-xl gap-3 md:text-2xl xl:text-3xl text-white">
        <PiCertificateDuotone className="bg-red-500 w-12 h-12 rounded-full px-2" />
        <p>Gurrenteed and certified</p>
      </div>
      <p className="font-semibold text-2xl lg:8xl md:text-6xl">
        Learn whereever and whenever.
      </p>
      <p className="opacity-80">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quas hic
        ipsam reprehenderit iure distinctio molestias nemo, facere ullam
        perspiciatis quos enim nostrum in iste magnam blanditiis, a totam harum.
      </p>
      <button className="flex items-center bg-black text-white px-2 rounded-full hover:bg-gray-700 transition-all duration-500 mt-5 mb-8">
        Learn More <BiArrowToRight className="text-white w-10 h-10" />
      </button>
    </div>
  );
}

export default AboutDisk;
