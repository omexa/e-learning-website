"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SlideCard from "./SlideCard";
import { SliderData } from "@/data/data";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function Slider() {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      draggable={false}
      showDots={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      {/* slider card  */}
      {SliderData.map((slid) => {
        return (
          <div key={slid.id} className="flex w-full h-full">
            <SlideCard slid={slid} />
          </div>
        );
      })}
    </Carousel>
  );
}

export default Slider;
