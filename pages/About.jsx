import ScrollButton from "@/components/ScrollTop";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import Image from "next/image";
import React from "react";
import Logo from "../public/birdlogo.png";
import Dragon1 from "../public/dragon1.jpg";
import Dragon2 from "../public/dragon2.jpg";
import Dragon3 from "../public/dragon3.jpg";
import Dragon4 from "../public/dragon4.jpg";
import Dragon5 from "../public/dragon5.jpg";
import Dragon6 from "../public/dragon6.jpg";
import Dragon7 from "../public/dragon7.jpg";
import Dragon8 from "../public/dragon8.jpg";

const About = () => {
  return (
    <div className="md:w-[77%] lg:w-[84%] 2xl:w-[1200px] 2xl:mx-auto ml-auto sm:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row pt-20">
        {/* about me */}
        <div className="w-full md:w-[35%]">
          <Image
            src={Logo}
            alt="about logo"
            className="w-[6rem]  items-center mx-auto animate-bounce "
          />
          <h1 className="font-bold text-2xl text-center text-[#95AB60] italic">
            Hello?
          </h1>
          <p className="mt-4 pr-4 pl-4 mb-4 mx-auto text-base md:text-xs lg:text-md xl:text-sm text-gray-500 tracking-wide text-center lg:text-left md:tracking-tighter md:leading-tight md:text-left">
            I&apos;m Kristy, a Pennsylvania native who moved up to the beautiful
            snowy North Country in spring of 2017. I am a freelance illustrator
            who primarily works in watercolor, and Procreate. I also like to
            dabble in fiber art. <br /> <br /> Like many creatives, for as long
            as I can feasibly remember, I have made art in some form. I spent
            much of my free time drawing, beginning with inspiration of my youth
            such as Sailor Moon and Cardcaptor Sakura, among many others. <br />{" "}
            <br />
            Currently, I am developing projects around my own creatures and
            characters, creating magical worlds, locales, and stories revolving
            around them.
          </p>
        </div>
        {/* videos */}
        <div className="w-full md:w-[65%] px-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <Image
              src={Dragon1}
              alt="about page img 1"
              className="lg:h-[200px] lg:w-[220px] md:h-[130px] md:w-[130px] rounded-md transition-transform duration-500 transform-gpu hover:scale-105"
            />
            <Image
              src={Dragon2}
              alt="about page img 1"
              className="lg:h-[200px] lg:w-[220px] md:h-[130px] md:w-[130px] rounded-md object-cover transition-transform duration-500 transform-gpu hover:scale-105"
            />
            <Image
              src={Dragon2}
              alt="about page img 1"
              className="lg:h-[200px] h-[280px] lg:w-[220px] md:h-[130px] md:w-[130px] rounded-md object-cover transition-transform duration-500 transform-gpu hover:scale-105"
            />
            <Image
              src={Dragon4}
              alt="about page img 1"
              className="lg:h-[200px] lg:w-[220px] md:h-[130px] md:w-[130px] rounded-md object-cover transition-transform duration-500 transform-gpu hover:scale-105"
            />
            <Image
              src={Dragon5}
              alt="about page img 1"
              className="lg:h-[200px] lg:w-[220px] md:h-[130px] md:w-[130px] rounded-md object-cover transition-transform duration-500 transform-gpu hover:scale-105"
            />
            <Image
              src={Dragon6}
              alt="about page img 1"
              className="lg:h-[200px] lg:w-[220px] md:h-[130px] md:w-[130px] rounded-md object-cover transition-transform duration-500 transform-gpu hover:scale-105"
            />
          </div>
          <div className="border-b border-gray-300 mt-8 mb-6 w-3/4 mx-auto"></div>
          <SocialMediaIcons />
        </div>
      </div>
      {/* first card */}
      <div className="flex flex-col md:flex-row mt-8">
        <Image
          src={Dragon7}
          alt="img"
          width={400}
          height={200}
          className="w-full md:w-1/2 h-[270px] object-cover rounded-[30px] px-4"
        />
        <div className="flex flex-col w-full md:w-1/2 px-4">
          <h1 className="text-xl text-center tracking-widest  mb-2">
            ART TOOLS
          </h1>
          <div className="flex flex-row  gap-2">
            <p className=" text-base md:text-xs lg:text-md xl:text-sm  text-gray-500 tracking-wide text-left lg:text-left md:tracking-tighter md:leading-tight md:text-left ">
              &#x2022; Sennelier l&apos;Aquarelle Watercolor Tubes
            </p>
          </div>
          <div className="flex flex-row  gap-2">
            <p className="text-base md:text-xs lg:text-md xl:text-sm  text-gray-500 tracking-wide text-left lg:text-left md:tracking-tighter md:leading-tight md:text-left">
              &#x2022; Sakura Micron Pens
            </p>
          </div>
          <div className="flex flex-row  gap-2">
            <p className="text-base md:text-xs lg:text-md xl:text-sm  text-gray-500 tracking-wide text-left lg:text-left md:tracking-tighter md:leading-tight md:text-left">
              &#x2022; Derwent Coloursoft Colored Pencils
            </p>
          </div>
          <div className="flex flex-row  gap-2">
            <p className="text-base md:text-xs lg:text-md xl:text-sm  text-gray-500 tracking-wide text-left lg:text-left md:tracking-tighter md:leading-tight md:text-left">
              &#x2022; Prismacolor Col-Erase Pencils
            </p>
          </div>
          <div className="flex flex-row  gap-2">
            <p className="text-base md:text-xs lg:text-md xl:text-sm  text-gray-500 tracking-wide text-left lg:text-left md:tracking-tighter md:leading-tight md:text-left">
              &#x2022; Strathmore 500 Series 140lb Hot Press Watercolor Paper
            </p>
          </div>
          <div className="flex flex-row  gap-2">
            <p className="text-base md:text-xs lg:text-md xl:text-sm  text-gray-500 tracking-wide text-left lg:text-left md:tracking-tighter md:leading-tight md:text-left">
              &#x2022; Arches Aquarelle 140lb Hot Press Watercolor Paper
            </p>
          </div>
          <div className="flex flex-row  gap-2">
            <p className="text-base md:text-xs lg:text-md xl:text-sm  text-gray-500 tracking-wide text-left lg:text-left md:tracking-tighter md:leading-tight md:text-left">
              &#x2022; Paul Rubens 140lb Hot Press Watercolor Paper (Glitter)
            </p>
          </div>
          <div className="flex flex-row  gap-2">
            <p className="text-base md:text-xs lg:text-md xl:text-sm  text-gray-500 tracking-wide text-left lg:text-left md:tracking-tighter md:leading-tight md:text-left">
              &#x2022; Apple iPad Air 4th Generation
            </p>
          </div>
          <div className="flex flex-row  gap-2">
            <p className="text-base md:text-xs lg:text-md xl:text-sm  text-gray-500 tracking-wide text-left lg:text-left md:tracking-tighter md:leading-tight md:text-left">
              &#x2022; Apple Pencil 2nd Generation
            </p>
          </div>
          <div className="flex flex-row  gap-2">
            <p className="text-base md:text-xs lg:text-md xl:text-sm  text-gray-500 tracking-wide text-left lg:text-left md:tracking-tighter md:leading-tight md:text-left">
              &#x2022; Procreate
            </p>
          </div>
          <div className="flex flex-row  gap-2">
            <p className="text-base md:text-xs lg:text-md xl:text-sm  text-gray-500 tracking-wide text-left lg:text-left md:tracking-tighter md:leading-tight md:text-left">
              &#x2022; Daylight Wafer 2 Lightbox
            </p>
          </div>
          <div className="flex flex-row  gap-2">
            <p className="text-base md:text-xs lg:text-md xl:text-sm  text-gray-500 tracking-wide text-left lg:text-left md:tracking-tighter md:leading-tight md:text-left">
              &#x2022; Tea
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-col-reverse lg:flex-row-reverse  mt-12 mb-10">
        <Image
          src={Dragon8}
          alt="img"
          width={300}
          height={500}
          className="w-full lg:w-1/2 h-[470px] mt-4 object-cover rounded-[30px] px-4"
        />
        <div className="flex flex-col w-full lg:w-1/2 px-4">
          <h1 className="text-xl text-center tracking-widest mb-2 mt-4 md:mt-0">
            PROCESS
          </h1>
          <div className="flex flex-row items-center gap-2">
            <div className="border-b-4 rounded-full w-1 border-gray-400"></div>
            <p className="text-base md:text-xs lg:text-md xl:text-sm  text-gray-500 tracking-wide text-center lg:text-left md:tracking-normal md:leading-relaxed  md:text-left">
              Like with all art, it starts with an idea. These ideas are, for
              me, sketched out in Procreate typically. This allows me to adjust
              the image as much as I need to, whether it&apos;s for adjusting
              the subject&apos;s facial structure or other anatomy, to some of
              the more fine details in the background, etc. All this is done on
              a canvas size that matches the size of painting I will be working
              on traditionally.
              <br /> <br /> The completed sketch is then printed out at actual
              size to match. This sketch is transferred to watercolor paper
              using a Wafer lightbox, with a col-erase pencil. After pencil
              transferring the piece will then be inked with Micron pens.
              <br /> <br /> Having completed inking, the illustration is ready
              for painting. I tape this paper onto a hard board using a low tack
              tape for easy removal. For painting, I use watercolor paint. My
              paint of choice of Sennelier&apos;s l&apos;Aquarelle paint tubes,
              and my technique is mostly washes, but I do incorporate other
              techniques in my paintings when it calls for it.
              <br /> <br /> Having completed inking, the illustration is ready
              for painting. I tape this paper onto a hard board using a low tack
              tape for easy removal. For painting, I use watercolor paint. My
              paint of choice of Sennelier&apos;s l&apos;Aquarelle paint tubes,
              and my technique is mostly washes, but I do incorporate other
              techniques in my paintings when it calls for it.
              <br /> <br /> Afterwards, all that&apos;s left is the finishing
              touches. For these, I usually use a white gel pen or white gouache
              for things such as a shine in an eye, stars in the sky or even
              water reflections. I sometimes use a little colored pencil to add
              some extra texture or really fine details that my brushes
              can&apos;t make to the painting.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="md:-ml-56">
        <ScrollButton />
      </div>
    </div>
  );
};

export default About;
