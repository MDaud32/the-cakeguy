import React from "react";
import Heroimg from "../public/heroimg.png";

import Image from "next/image";
import SocialMediaIcons from "../components/SocialMediaIcons";

const HomePage = () => {
  return (
    <div>
      <main className="md:ml-72 md:w-[60%]  2xl:w-[600px]  sm:px-8 lg:px-16">
        <div className="h-screen">
          <Image
            src={Heroimg}
            alt="hero img"
            className="w-[27rem] mx-auto hover:scale-110 duration-500"
          />
          <SocialMediaIcons />
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
