import Image from "next/image";
import Image1 from "../public/images/image1.jpg";
import Image2 from "../public/images/image2.jpg";
import Image3 from "../public/images/image3.jpg";
import Image4 from "../public/images/image4.jpg";
import Image5 from "../public/images/image5.jpg";
import Image6 from "../public/images/image6.jpg";
import Image7 from "../public/images/image7.jpg";
import Image8 from "../public/images/image8.jpg";
import Image9 from "../public/images/image9.jpg";
import Image10 from "../public/images/image10.jpg";
import Image11 from "../public/images/image11.jpg";
import Image12 from "../public/images/image12.jpg";
import Image13 from "../public/images/image13.jpg";
import Image14 from "../public/images/image14.jpg";
import Image15 from "../public/images/image15.jpg";
import Image16 from "../public/images/image16.jpg";
import Image17 from "../public/images/image17.jpg";
import Image18 from "../public/images/image18.jpg";
import ScrollButton from "@/components/ScrollTop";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const Portfolio = () => {
  let [isOpen, setIsOpen] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="md:w-[73%] lg:w-[80%] ml-auto sm:px-8 lg:px-16 pt-10">
      <div className="lg:columns-4 md:columns-3 sm:columns-2 columns-1 gap-3 mx-auto space-y-3 px-3">
        <Image
          src={Image1}
          onClick={openModal}
          alt="img gallery"
          className=" rounded-md transition-transform duration-500 transform-gpu hover:scale-105"
        />

        <Image
          src={Image2}
          alt="img gallery"
          className=" rounded-md transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          src={Image3}
          alt="img gallery"
          className=" rounded-md transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          src={Image4}
          alt="img gallery"
          className=" rounded-md transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          src={Image5}
          alt="img gallery"
          className=" rounded-md transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          src={Image6}
          alt="img gallery"
          className=" rounded-md transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          src={Image7}
          alt="img gallery"
          className=" rounded-md transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          src={Image8}
          alt="img gallery"
          className=" rounded-md transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          src={Image9}
          alt="img gallery"
          className=" rounded-md transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          src={Image10}
          alt="img gallery"
          className=" rounded-md transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          src={Image11}
          alt="img gallery"
          className=" rounded-md transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          src={Image12}
          alt="img gallery"
          className=" rounded-md transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          src={Image13}
          alt="img gallery"
          className=" rounded-md transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          src={Image14}
          alt="img gallery"
          className=" rounded-md transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          src={Image15}
          alt="img gallery"
          className=" rounded-md transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          src={Image16}
          alt="img gallery"
          className=" rounded-md transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          src={Image17}
          alt="img gallery"
          className=" rounded-md transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          src={Image18}
          alt="img gallery"
          className=" rounded-md transition-transform duration-500 transform-gpu hover:scale-105"
        />
      </div>
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95">
                  <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-2 text-left align-middle shadow-xl transition-all">
                    <Carousel
                      PrevIcon={<MdNavigateBefore />}
                      showThumbs={false}
                      onClickItem={handleOpen}>
                      <Image src={Image1} alt="green iguana" />
                      <Image src={Image2} alt="green iguana" />
                      <Image src={Image3} alt="green iguana" />
                      <Image src={Image4} alt="green iguana" />
                      <Image src={Image5} alt="green iguana" />
                      <Image src={Image6} alt="green iguana" />
                      <Image src={Image7} alt="green iguana" />
                    </Carousel>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
      <ScrollButton />
    </div>
  );
};

export default Portfolio;
