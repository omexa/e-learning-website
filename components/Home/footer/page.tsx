import Image from "next/image";
import React from "react";
import { FaGit, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer
      id="footer"
      className="relative w-full flex justify-center items-center"
    >
      <div className="absolute top-0 left-0 w-[100%] overflow-hidden ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="relative block h-[174px] fill-gray-300"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="relative block h-[174px] fill-gray-300"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="relative block h-[174px] fill-gray-300"
          ></path>
        </svg>
        <div className=" p-16 grid sm:grid-cols-3 ">
          <div className="flex items-center">
            <div className="flex items-center space-x-2 md:flex-col ">
              <Image
                src="/images/logo1.png"
                width={100}
                height={100}
                alt="logo"
                className="flex w-10 h-10 md:w-20 md:h-20 justify-center items-center font-semibold"
              />
              <p className="text-white text-3xl">OMEXA LEARN</p>
            </div>
          </div>
          <div className="flex  flex-col space-y-2">
            <h1 className="text-yellow-600  cursor-pointer text-3xl ">
              {"COURSE'S"}
            </h1>
            <h1 className="text-white hover:text-gray-300 cursor-pointer ">
              Learn Html
            </h1>
            <h1 className="text-white hover:text-gray-300 cursor-pointer ">
              Learn CSS
            </h1>
            <h1 className="text-white hover:text-gray-300 cursor-pointer ">
              Learn Java Script
            </h1>
          </div>
          <div className="flex  flex-col space-y-2">
            <h1 className="text-yellow-600 cursor-pointer text-3xl ">
              ADDRESS
            </h1>
            <h1 className="text-white hover:text-gray-300 cursor-pointer ">
              Email: oumer....@gmail.com
            </h1>
            <h1 className="text-white hover:text-gray-300 cursor-pointer ">
              Phone: +251 00 00 00 000
            </h1>
            <div className="text-white flex space-x-2 hover:text-gray-300 cursor-pointer ">
              <FaLinkedin />
              <FaGit />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex  justify-between bg-white rounded-full overflow-hidden shadow-md shadow-black pl-2">
            <input placeholder="enter your opnion" className="outline-none" />
            <div className="rounded-full px-6 py-2 hover:bg-pink-500 duration-200  transition-transform bg-pink-800">
              <button>Submit</button>
            </div>
          </div>
          <h1 className="text-white mb-10">Copyright Dev Oumer 2024</h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
