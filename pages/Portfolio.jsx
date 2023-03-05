import Image from "next/image";

import ScrollButton from "@/components/ScrollTop";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const Portfolio = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [image, setImage] = useState(0);
  const [prevDisabled, setprevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function Img1() {
    setImage(1);
    setIsOpen(true);
  }
  function Img2() {
    setImage(2);
    setIsOpen(true);
  }
  function Img3() {
    setImage(3);
    setIsOpen(true);
  }
  function Img4() {
    setImage(4);
    setIsOpen(true);
  }
  function Img5() {
    setImage(5);
    setIsOpen(true);
  }
  function Img6() {
    setImage(6);
    setIsOpen(true);
  }
  function Img7() {
    setImage(7);
    setIsOpen(true);
  }
  function Img8() {
    setImage(8);
    setIsOpen(true);
  }
  function Img9() {
    setImage(9);
    setIsOpen(true);
  }
  function Img10() {
    setImage(10);
    setIsOpen(true);
  }
  function Img11() {
    setImage(11);
    setIsOpen(true);
  }
  function Img12() {
    setImage(12);
    setIsOpen(true);
  }
  function Img13() {
    setImage(13);
    setIsOpen(true);
  }
  function Img14() {
    setImage(14);
    setIsOpen(true);
  }
  function Img15() {
    setImage(15);
    setIsOpen(true);
  }
  function Img16() {
    setImage(16);
    setIsOpen(true);
  }
  function Img17() {
    setImage(17);
    setIsOpen(true);
  }
  function Img18() {
    setImage(18);
    setIsOpen(true);
  }

  function switchNext() {
    if (image === 18) {
      return setNextDisabled(true);
    }
    setprevDisabled(false);
    setImage(image + 1);
  }
  function switchPrev() {
    if (image === 1) {
      return setprevDisabled(true);
    }
    setNextDisabled(false);
    setImage(image - 1);
  }

  return (
    <div className="md:w-[73%] lg:w-[80%] ml-auto sm:px-8 lg:px-16 pt-10">
      <div className="lg:columns-4 md:columns-3 sm:columns-2 columns-1 gap-3 mx-auto space-y-3 px-3">
        <Image
          src={"/images/image1.jpg"}
          onClick={Img1}
          width={300}
          height={200}
          alt="img gallery"
          className=" rounded-md object-cover w-3/4 mx-auto sm:w-[300px] xl:w-[400px] transition-transform duration-500 transform-gpu hover:scale-105"
        />

        <Image
          src={"/images/image2.jpg"}
          onClick={Img2}
          width={300}
          height={200}
          alt="img gallery"
          className=" rounded-md object-cover w-3/4 mx-auto sm:w-[300px] xl:w-[400px] transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          src={"/images/image3.jpg"}
          onClick={Img3}
          width={300}
          height={200}
          alt="img gallery"
          className=" rounded-md object-cover w-3/4 mx-auto sm:w-[300px] xl:w-[400px] transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          onClick={Img4}
          src={"/images/image4.jpg"}
          alt="img gallery"
          width={300}
          height={200}
          className=" rounded-md object-cover w-3/4 mx-auto sm:w-[300px] xl:w-[400px] transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          onClick={Img5}
          src={"/images/image5.jpg"}
          alt="img gallery"
          width={300}
          height={200}
          className=" rounded-md object-cover w-3/4 mx-auto sm:w-[300px] xl:w-[400px] transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          onClick={Img6}
          src={"/images/image6.jpg"}
          alt="img gallery"
          width={300}
          height={200}
          className=" rounded-md object-cover w-3/4 mx-auto sm:w-[300px] xl:w-[400px] transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          onClick={Img7}
          src={"/images/image7.jpg"}
          alt="img gallery"
          width={300}
          height={200}
          className=" rounded-md object-cover w-3/4 mx-auto sm:w-[300px] xl:w-[400px] transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          onClick={Img8}
          src={"/images/image8.jpg"}
          alt="img gallery"
          width={300}
          height={200}
          className=" rounded-md object-cover w-3/4 mx-auto sm:w-[300px] xl:w-[400px] transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          onClick={Img9}
          src={"/images/image9.jpg"}
          alt="img gallery"
          width={300}
          height={200}
          className=" rounded-md object-cover w-3/4 mx-auto sm:w-[300px] xl:w-[400px] transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          onClick={Img10}
          src={"/images/image10.jpg"}
          alt="img gallery"
          width={300}
          height={200}
          className=" rounded-md object-cover w-3/4 mx-auto sm:w-[300px] xl:w-[400px] transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          onClick={Img11}
          src={"/images/image11.jpg"}
          alt="img gallery"
          width={300}
          height={200}
          className=" rounded-md object-cover w-3/4 mx-auto sm:w-[300px] xl:w-[400px] transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          onClick={Img12}
          src={"/images/image12.jpg"}
          alt="img gallery"
          width={300}
          height={200}
          className=" rounded-md object-cover w-3/4 mx-auto sm:w-[300px] xl:w-[400px] transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          onClick={Img13}
          src={"/images/image13.jpg"}
          alt="img gallery"
          width={300}
          height={200}
          className=" rounded-md object-cover w-3/4 mx-auto sm:w-[300px] xl:w-[400px] transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          onClick={Img14}
          src={"/images/image14.jpg"}
          alt="img gallery"
          width={300}
          height={200}
          className=" rounded-md object-cover w-3/4 mx-auto sm:w-[300px] xl:w-[400px] transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          onClick={Img15}
          src={"/images/image15.jpg"}
          alt="img gallery"
          width={300}
          height={200}
          className=" rounded-md object-cover w-3/4 mx-auto sm:w-[300px] xl:w-[400px] transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          onClick={Img16}
          src={"/images/image16.jpg"}
          alt="img gallery"
          width={300}
          height={200}
          className=" rounded-md object-cover w-3/4 mx-auto sm:w-[300px] xl:w-[400px] transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          onClick={Img17}
          src={"/images/image17.jpg"}
          alt="img gallery"
          width={300}
          height={200}
          className=" rounded-md object-cover w-3/4 mx-auto sm:w-[300px] xl:w-[400px] transition-transform duration-500 transform-gpu hover:scale-105"
        />
        <Image
          onClick={Img18}
          src={"/images/image18.jpg"}
          alt="img gallery"
          width={300}
          height={200}
          className=" rounded-md object-cover w-3/4 mx-auto sm:w-[300px] xl:w-[400px] transition-transform duration-500 transform-gpu hover:scale-105"
        />
      </div>
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center  text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95">
                  <Dialog.Panel className="w-full  h-screen transform overflow-hidden bg-black/50 text-left align-middle shadow-xl transition-all ">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-white text-4xl flex ml-auto px-10 pt-4">
                      <AiOutlineClose />
                    </button>
                    <div className={"flex justify-between"}>
                      <button
                        disabled={prevDisabled}
                        onClick={switchPrev}
                        className={"text-white"}>
                        <MdNavigateBefore size={"32"} />
                      </button>

                      <div className="flex flex-row justify-center">
                        <Image
                          src={`/images/image${image}.jpg`}
                          width={400}
                          height={200}
                          className={"object-cover w-[700px] h-[500px]"}
                          alt="green iguana"
                        />
                      </div>

                      <button
                        disabled={nextDisabled}
                        className={"text-white"}
                        onClick={switchNext}>
                        <MdNavigateNext size={"32"} />
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
      <div className="md:-ml-56">
        <ScrollButton />
      </div>{" "}
    </div>
  );
};

export default Portfolio;
