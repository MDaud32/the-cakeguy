import Image from "next/image";
import ScrollButton from "@/components/ScrollTop";
import { Dialog, Transition } from "@headlessui/react";
import { useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const Portfolio = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(data.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === data.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      {openModal && (
        <div className="sliderWrap">
          <AiOutlineClose className="btnClose" onClick={handleCloseModal} />
          <MdNavigateBefore className="btnPrev" onClick={prevSlide} />
          <MdNavigateNext className="btnNext" onClick={nextSlide} />
          <div className="fullScreenImage" onClick={() => handleCloseModal()}>
            <Image
              src={data[slideNumber].img}
              alt=""
              width={400}
              height={200}
              className={
                "object-cover w-[700px] h-[300px] md:h-[500px]  md:mt-0"
              }
            />
          </div>
        </div>
      )}

      <div className="md:w-[77%] lg:w-[84%] ml-auto sm:px-8 lg:px-16 pt-10">
        <div className="lg:columns-4 md:columns-3 sm:columns-2 columns-1 gap-3 mx-auto space-y-3 px-3">
          {data.map((slide, index) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => handleOpenModal(index)}>
                <Image
                  src={slide.img}
                  alt=""
                  width={300}
                  height={200}
                  className=" rounded-md object-cover w-3/4 mx-auto sm:w-[300px] xl:w-[400px] transition-transform duration-500 transform-gpu hover:scale-105"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

const data = [
  {
    img: "/images/image1.jpg",
  },
  {
    img: "/images/image2.jpg",
  },
  {
    img: "/images/image3.jpg",
  },
  {
    img: "/images/image4.jpg",
  },
  {
    img: "/images/image5.jpg",
  },
  {
    img: "/images/image6.jpg",
  },
  {
    img: "/images/image7.jpg",
  },
  {
    img: "/images/image8.jpg",
  },
  {
    img: "/images/image9.jpg",
  },
  {
    img: "/images/image10.jpg",
  },
  {
    img: "/images/image11.jpg",
  },
  {
    img: "/images/image12.jpg",
  },
  {
    img: "/images/image13.jpg",
  },
  {
    img: "/images/image14.jpg",
  },
  {
    img: "/images/image15.jpg",
  },
  {
    img: "/images/image16.jpg",
  },
  {
    img: "/images/image17.jpg",
  },
  {
    img: "/images/image18.jpg",
  },
];
