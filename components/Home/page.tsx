"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/hero";
import About from "./about/page";
import Course from "./courses/Course";
import Future from "./Future/future";
import Review from "./Review/review";
import Article from "./article/page";
import Footer from "./footer/page";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <div className="w-full ">
      <Hero />
      <About />
      <Course />
      <Future />
      <Review />
      <Article />
      <Footer />
    </div>
  );
};

export default Home;
