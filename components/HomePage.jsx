import React from "react";
import Heroimg from "../public/heroimg.png";
import {
  FaCoffee,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaTumblr,
  FaDeviantart,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <main className="flex-1">
        <div className="h-screen  p-10">
          <Image
            src={Heroimg}
            alt="hero img"
            className="w-[27rem]   mx-auto hover:scale-110 duration-500"
          />
          <div className="flex flex-row items-center justify-center gap-4 mb-4">
            <Link
              href="#"
              className="text-[#95AB60] text-4xl hover:text-[#85985a] hover:scale-110 duration-200">
              <FaCoffee />
            </Link>
            <Link
              href="#"
              className="text-[#95AB60] text-4xl hover:text-[#85985a] hover:scale-110 duration-200">
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="text-[#95AB60] text-4xl hover:text-[#85985a] hover:scale-110 duration-200">
              <FaTwitter />
            </Link>
            <Link
              href="#"
              className="text-[#95AB60] text-4xl hover:text-[#85985a] hover:scale-110 duration-200">
              <FaTiktok />
            </Link>
            <Link
              href="#"
              className="text-[#95AB60] text-4xl hover:text-[#85985a] hover:scale-110 duration-200">
              <FaTumblr />
            </Link>
            <Link
              href="#"
              className="text-[#95AB60] text-4xl hover:text-[#85985a] hover:scale-110 duration-200">
              <FaDeviantart />
            </Link>
            <Link
              href="#"
              className="text-[#95AB60] text-4xl hover:text-[#85985a] hover:scale-110 duration-200">
              <MdEmail />
            </Link>
          </div>
          <div className="border-b border-dashed w-1/3 mx-auto border-2 border-gray-400"></div>
          <h1 className="text-[#95AB60] text-center text-3xl ">Status</h1>
          <h2 className="text-center text-2xl mb-2 text-gray-500">open</h2>
          <div className="border-b border-dashed w-1/3 mx-auto border-2 border-gray-400"></div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
