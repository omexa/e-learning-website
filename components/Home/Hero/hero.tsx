import React from "react";
import HeroConetnts from "./HeroConetnts";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <div id="home" className="w-full pt-[12vh] h-screen bg-teal-800">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <HeroConetnts />
          <HeroImage />
        </div>
      </div>
    </div>
  );
}

export default Hero;
