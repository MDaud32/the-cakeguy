import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/birdlogo.png";
import HomePage from "@/components/HomePage";
import About from "./About";

// import Footer from "./footer";

const Navbar = () => {
  return (
    <div className="'bg-transparent flex flex-col absolute  w-60 h-screen '">
      <aside className="md:w-72  left-0 top-0  p-10 flex flex-col text-center ">
        <Image
          src={Logo}
          alt="bird logo"
          className="w-24 mx-auto mb-4   hover:-rotate-6 duration-200"
        />
        <div className="flex flex-col gap-3 w-40 mx-auto">
          <Link
            href="/About"
            className="border-[1px] border-gray-300 rounded-full hover:border-[#95AB60] hover:text-[#95AB60] text-gray-400 font-extralight text-sm p-[1px]">
            About
          </Link>
          <Link
            href="#"
            className="border-[1px] border-gray-300  rounded-full hover:border-[#95AB60] hover:text-[#95AB60] text-gray-400 font-extralight text-sm">
            Portfolio
          </Link>
          <Link
            href="#"
            className="border-[1px] border-gray-300 rounded-full hover:border-[#95AB60] hover:text-[#95AB60] text-gray-400 font-extralight text-sm">
            Commissions
          </Link>
          <Link
            href="#"
            className="border-[1px] border-gray-300 rounded-full hover:border-[#95AB60] hover:text-[#95AB60] text-gray-400 font-extralight text-sm">
            Terms of Service
          </Link>
          <Link
            href="#"
            className="border-[1px] border-gray-300 rounded-full hover:border-[#95AB60] hover:text-[#95AB60] text-gray-400 font-extralight text-sm">
            Commission Status
          </Link>
          <Link
            href="#"
            className="border-[1px] border-gray-300 rounded-full hover:border-[#95AB60] hover:text-[#95AB60] text-gray-400 font-extralight text-sm">
            Contact
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
