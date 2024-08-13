"use client";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";
// define prop style
type Props = {
  showNav: boolean;
  closeNav: () => void;
};
function MobileNav({ closeNav, showNav }: Props) {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed ${navOpen} top-0 transform opacity-70 w-full h-[100vh] transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black `}
      />
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-indigo-800 space-y-6 z-[100006] h-full`}
      >
        {/* navlinks mobile view */}
        {navLinks.map((nav) => {
          return (
            <Link key={nav.id} href={nav.url}>
              <p className="nav_style text-[20px] ml-12 border-b-2 pb-2 sm:text-[30px]">
                {nav.label}
              </p>
            </Link>
          );
        })}
        {/* close button */}
        <IoClose
          onClick={closeNav}
          className="text-white absolute w-6 h-6 top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8"
        />
      </div>
    </div>
  );
}

export default MobileNav;
