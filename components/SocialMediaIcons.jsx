import React from "react";
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

const SocialMediaIcons = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-3 mb-4">
      <Link
        href="#"
        className="text-[#95AB60] text-3xl hover:text-[#85985a] hover:scale-110 duration-200">
        <FaCoffee />
      </Link>
      <Link
        href="#"
        className="text-[#95AB60] text-3xl hover:text-[#85985a] hover:scale-110 duration-200">
        <FaInstagram />
      </Link>
      <Link
        href="#"
        className="text-[#95AB60] text-3xl hover:text-[#85985a] hover:scale-110 duration-200">
        <FaTwitter />
      </Link>
      <Link
        href="#"
        className="text-[#95AB60] text-3xl hover:text-[#85985a] hover:scale-110 duration-200">
        <FaTiktok />
      </Link>
      <Link
        href="#"
        className="text-[#95AB60] text-3xl hover:text-[#85985a] hover:scale-110 duration-200">
        <FaTumblr />
      </Link>
      <Link
        href="#"
        className="text-[#95AB60] text-3xl hover:text-[#85985a] hover:scale-110 duration-200">
        <FaDeviantart />
      </Link>
      <Link
        href="#"
        className="text-[#95AB60] text-3xl hover:text-[#85985a] hover:scale-110 duration-200">
        <MdEmail />
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
