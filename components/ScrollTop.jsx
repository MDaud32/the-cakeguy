import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // window.addEventListener("scroll", toggleVisible);
  return (
    <div className="flex cursor-pointer text-4xl items-center justify-center my-12 text-[#95AB60] hover:text-[#819454] hover:text-[38px] duration-300">
      <FaArrowUp onClick={scrollToTop} />
    </div>
  );
};

export default ScrollButton;
