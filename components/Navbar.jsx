import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/birdlogo.png";
import Heroimg from "../public/heroimg.png";

// import Footer from "./footer";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <aside className="md:w-60 w-full left-0 top-0 md:left-50 md:top-50   p-10 flex flex-col text-center ">
        <Image
          src={Logo}
          alt="bird logo"
          className="w-28 mx-auto mb-6 hover:-rotate-6 duration-200"
        />
        <div className="flex flex-col gap-2 w-40 mx-auto">
          <Link
            href="#"
            className="border-[1px] rounded-full hover:border-[#95AB60] hover:text-[#95AB60] text-gray-400 font-extralight text-sm p-[1px]">
            About
          </Link>
          <Link
            href="#"
            className="border-[1px] rounded-full hover:border-[#95AB60] hover:text-[#95AB60] text-gray-400 font-extralight text-sm">
            Portfolio
          </Link>
          <Link
            href="#"
            className="border-[1px] rounded-full hover:border-[#95AB60] hover:text-[#95AB60] text-gray-400 font-extralight text-sm">
            Commissions
          </Link>
          <Link
            href="#"
            className="border-[1px] rounded-full hover:border-[#95AB60] hover:text-[#95AB60] text-gray-400 font-extralight text-sm">
            Terms of Service
          </Link>
          <Link
            href="#"
            className="border-[1px] rounded-full hover:border-[#95AB60] hover:text-[#95AB60] text-gray-400 font-extralight text-sm">
            Commission Status
          </Link>
          <Link
            href="#"
            className="border-[1px] rounded-full hover:border-[#95AB60] hover:text-[#95AB60] text-gray-400 font-extralight text-sm">
            Contact
          </Link>
        </div>
      </aside>
      <main className="flex-1">
        <div className="h-screen  p-10">
          <Image
            src={Heroimg}
            alt="hero img"
            className="w-[27rem]   mx-auto hover:scale-110 duration-500"
          />
          <div className="border-b border-dashed w-1/3 mx-auto border-2 border-gray-400"></div>
          <h1 className="text-[#95AB60] text-center text-3xl ">Status</h1>
          <h2 className="text-center text-2xl mb-2 text-gray-500">open</h2>
          <div className="border-b border-dashed w-1/3 mx-auto border-2 border-gray-400"></div>
        </div>
      </main>
    </div>
  );
};

export default Navbar;
