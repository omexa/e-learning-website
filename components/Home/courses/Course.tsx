import { courseData } from "@/data/data";
import Image from "next/image";
import React from "react";
import CourseCard from "./CourseCard";

function Course() {
  return (
    <div id="course" className="bg-gray-400 pt-16 pb-12">
      {/* bounce ball */}
      {/* <Image
        width={800}
        height={800}
        alt="pro"
        src="/images/ball.png"
        className="absolute t0p-[-30%] animate-bounce opacity-35 w-40 h-40"
      /> */}
      <div className="w-[80%] mx-auto">
        {/* title  */}
        <h1 className="text-4xl md:text-5xl text-gray-900 font-bold">
          POPULAR COURSES
        </h1>
        {/* coursee  */}
        <div className="md:mt-8 mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
          {courseData.map((course) => {
            // courses individual
            return (
              <div key={course.id}>
                <CourseCard course={course} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Course;
