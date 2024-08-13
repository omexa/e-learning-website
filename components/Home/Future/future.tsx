import Image from "next/image";
import React from "react";
import { FaToolbox } from "react-icons/fa";

function Future() {
  return (
    <div
      id="future"
      className="flex justify-center items-center w-full text-white"
    >
      <div className="w-4/5 flex justify-center items-center gap-5 pt-16 pb-14">
        <div className="hidden lg:flex w-full h-full items-center justify-center rounded-full overflow-hidden">
          <Image
            src="/images/human2.jpg"
            width={400}
            height={100}
            alt="image"
          />
        </div>
        <div className="">
          <div className="flex space-x-2 mb-6">
            <FaToolbox className=" rounded-full w-10 h-10 text-white bg-red-600 p-2" />
            <p className="font-bold text-xl md:text-2xl lg:text-3xl">
              Premium learning experience
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-3xl font-bold md:text-5xl lg:text-6xl pb-8">
              Providing amazing online courses
            </p>
            <p className="text-xl font-bold pb-4 md:text-2xl">
              Master the skills that matter to you
            </p>
            <p className="text-xl opacity-70 pb-4 md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
              doloribus odio placeat voluptate obcaecati pariatur id mollitia
              libero culpa ab. Recusandae porro atque a enim tempore esse earum
              ex laudantium.
            </p>
            <p className="text-xl md:text-2xl font-bold pb-4 ">
              Increase your learning skills
            </p>
            <p className="md:text-2xl text-xl opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              velit ipsam amet placeat rerum consequuntur cupiditate, culpa
              consequatur repudiandae suscipit provident minima vero, ipsa
              reiciendis corporis molestiae voluptates ratione eum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Future;
