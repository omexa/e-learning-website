"use client";
import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
function HeroImage() {
  return (
    <Tilt className="">
      <div
        data-aos="fade-right"
        data-aos-delay="200"
        className="hidden lg:block"
      >
        <Image
          src="/images/promo1.png"
          alt="hero"
          width={500}
          height={400}
          className="flex shadow-lg after:shadow-2xl shadow-black rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
        />
      </div>
    </Tilt>
  );
}

export default HeroImage;
