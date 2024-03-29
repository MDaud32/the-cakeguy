import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/birdlogo.png";
import { useTheme } from "next-themes";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button className="" onClick={() => setTheme("light")}>
          Light Mode
        </button>
      );
    } else {
      return (
        <button className="" onClick={() => setTheme("dark")}>
          Dark Mode
        </button>
      );
    }
  };
  return (
    <div className="flex flex-col md:flex-row md:absolute">
      <aside className="md:w-58 lg:w-54 left-0 top-0 md:left-50 md:top-50 md:p-12 mt-10 md:mt-0 flex flex-col text-center">
        <Link href="/">
          <Image
            src={Logo}
            alt="bird logo"
            className="w-24 mx-auto mb-4 hover:-rotate-6 duration-200"
          />
        </Link>
        <div className="flex flex-col gap-3 w-44 lg:w-44 md:w-36 mx-auto">
          <Link
            href="/About"
            className="border-[1px] border-gray-400 rounded-full hover:border-[#95AB60] hover:text-[#95AB60] text-gray-400 font-extralight text-sm p-[1px] ">
            About
          </Link>
          <Link
            href="/Portfolio"
            className="border-[1px] border-gray-400  rounded-full hover:border-[#95AB60] hover:text-[#95AB60] text-gray-400 font-extralight text-sm">
            Portfolio
          </Link>
          <Link
            href="/Commission"
            className="border-[1px] border-gray-400 rounded-full hover:border-[#95AB60] hover:text-[#95AB60] text-gray-400 font-extralight text-sm">
            Commissions
          </Link>
          <Link
            href="/TermsOfService"
            className="border-[1px] border-gray-400 rounded-full hover:border-[#95AB60] hover:text-[#95AB60] text-gray-400 font-extralight text-sm">
            Terms of Service
          </Link>
          <Link
            href="/CommissionStatus"
            className="border-[1px] border-gray-400 rounded-full hover:border-[#95AB60] hover:text-[#95AB60] text-gray-400 font-extralight text-sm">
            Commission Status
          </Link>
          <Link
            href="/ContactForm"
            className="border-[1px] border-gray-400 rounded-full hover:border-[#95AB60] hover:text-[#95AB60] text-gray-400 font-extralight text-sm">
            Contact
          </Link>
          <div className="border-[1px] border-gray-400 rounded-full hover:border-[#95AB60] hover:text-[#95AB60] text-gray-400 font-extralight text-sm">
            {renderThemeChanger()}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
