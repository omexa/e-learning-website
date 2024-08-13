import { articleData } from "@/data/data";
import Image from "next/image";
import React from "react";
import { BiHeart } from "react-icons/bi";

function Article() {
  return (
    <div
      id="article"
      className="w-full h-full flex  item center justify-center bg-gray-300"
    >
      <div className="grid pt-5 px-8 space-x-4 pb-14 md:mt-16 mt-10  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        {articleData.map((articl) => {
          return (
            <div
              key={articl.id}
              className="rounded-lg overflow-hidden bg-white grid gap-4"
            >
              <div className="w-full">
                <Image
                  width={400}
                  height={400}
                  src={articl.coverImage}
                  alt={articl.userName}
                />
              </div>
              <div className="flex justify-between w-[95%] items-center">
                <Image
                  src="/images/human.png"
                  alt={articl.title}
                  width={200}
                  height={200}
                  className="w-8 h-8 m-2 rounded-full"
                />

                <div className="flex space-x-2 items-center justify-center">
                  <h1>{articl.userName}</h1>
                  <div className="flex space-x-2">
                    <BiHeart className="stroke-red-700 text-red-700 w-5 h-5" />
                    <h1>{articl.reaction}</h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Article;
