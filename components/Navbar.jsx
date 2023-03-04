import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/birdlogo.png";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <aside className="md:w-72 h-screen w-full left-0 top-0 md:left-50 md:top-50  p-10 flex flex-col text-center ">
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
