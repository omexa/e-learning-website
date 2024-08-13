"use client";
import { courseData } from "@/data/data";
import Image from "next/image";
import React from "react";
import { FaFile, FaStar } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import Tilt from "react-parallax-tilt";
//props data type
type Props = {
  course: {
    id: number;
    image: string;
    title: string;
    price: number;
    author: string;
    reviewNumber: number;
    lessons: number;
    students: number;
    catagory: string;
  };
};
function CourseCard({ course }: Props) {
  return (
    <Tilt className="max-w-max">
      <div className="bg-white rounded-lg overflow-hidden max-w-max">
        {/* images  */}
        <div>
          <Image
            key={course.id}
            width={300}
            height={300}
            src={course.image}
            alt={course.title}
            className="w-100 h-full"
          />
        </div>
        {/* price  */}
        <div className="p-4">
          <h1 className="ml-auto relative z-[10] h-14 w-14 flex items-center text-lg font-bold justify-center flex-col mt-[-3rem] rounded-full bg-rose-700 text-white">
            ${course.price}
          </h1>
        </div>
        {/* other info  */}
        <div className="px-4">
          <div className="flex items-center mt-6 space-x-4 ">
            <span className="text-lg text-black text-opacity-70 font-bold">
              {course.catagory}
            </span>
            <span className="text-base text-gray-600">{course.author}</span>
          </div>
          {/* title  */}
          <h1 className="text-xl text-black font-bold mt-2">{course.title}</h1>
          {/* reviews  */}
          <div className="flex mt-2 items-center space-x-2">
            <div className="flex ite">
              <FaStar className="text-yellow-500 w-4 h-4" />
              <FaStar className="text-yellow-500 w-4 h-4" />
              <FaStar className="text-yellow-500 w-4 h-4" />
              <FaStar className="text-yellow-500 w-4 h-4" />
              <FaStar className="text-yellow-500 w-4 h-4" />
            </div>
            <span className="text-orange-800">
              ({course.reviewNumber} Reviews)
            </span>
          </div>
          <div className="mt-6 mb-2 w-full  h-[2px] bg-gray-500 opacity-40"></div>
          {/* LESSONS AND NO OF STUDENTS  */}
          <div className="flex justify-between pb-2">
            <div className="flex space-x-2 items-center">
              <FaFile className="text-orange-500 w-4 h-4 " />
              <p>{course.lessons} lessons</p>
            </div>
            <div className="flex space-x-2 items-center">
              <FaUserGroup className="text-orange-500 w-4 h-4 " />
              <p>{course.students} students</p>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default CourseCard;
