import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Fa6 } from "react-icons/fa6";
type Props = {
  slid: {
    id: number;
    image: string;
    name: string;
    dept: string;
    feadback: string;
  };
};
function SlideCard({ slid }: Props) {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center space-x-10">
      <div className="h-full w-full grid justify-center md:grid-cols-2">
        <Image
          key={slid.id}
          width={250}
          height={250}
          src="/images/human.png"
          alt={slid.name}
          className="w-full h-full p-2"
        />
        <div className="flex flex-col justify-center space-y-3 p-5">
          <div className="flex ">
            <FaStar className="text-yellow-700 w-8 h-8" />
            <FaStar className="text-yellow-700 w-8 h-8" />
            <FaStar className="text-yellow-700 w-8 h-8" />
            <FaStar className="text-yellow-700 w-8 h-8" />
            <FaStar className="text-yellow-700 w-8 h-8" />
          </div>
          <div>
            <h1 className="text-xl">{slid.feadback}</h1>
          </div>
          <div className="text-xl font-bold">
            <h1>{slid.name}</h1>
            <h1 className="text-red-950">{slid.dept}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideCard;
