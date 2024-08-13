"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constant/constant";
import { link } from "fs";
import { HiBars3BottomRight } from "react-icons/hi2";
// define prop style
type Props = {
  openNav: () => void;
};
function Navbr({ openNav }: Props) {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => removeEventListener("scroll", handler);
  });
  return (
    // <div
    //   className={`fixed ${
    //     navBg ? "bg-indigo-900" : "fixed"
    //   } w-full transition-all duration-200 h-[12vh] z-[1000]`}
    // >
    <div className="top-0 fixed w-full bg-teal-800 overflow-hidden z-[10000] border- b-2 shadow-lg">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto shadow-lg">
        {/* logo */}
        <Image
          src="/images/logo1.png"
          alt="logo"
          width={60}
          height={60}
          className=""
        />
        {/* navigation links */}
        <div className="hidden lg:flex items-center space-x-10 ">
          {navLinks.map((navs) => {
            return (
              <Link key={navs.id} href={navs.url}>
                <p className="nav_style">{navs.label}</p>
              </Link>
            );
          })}
        </div>
        {/* sign in and login buttons  */}
        <div className="flex items-center space-x-4">
          <button className="bg-red-950 shadow-md shadow-slate-500 p-2 text-2xl rounded-2xl px-7 text-white hover:bg-red-800 font-semibold">
            Register
          </button>
          {/* hibars */}
          <HiBars3BottomRight
            onClick={openNav}
            className="text-white w-8 h-8 lg:hidden"
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Navbr;
