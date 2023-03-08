import ScrollButton from "@/components/ScrollTop";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import com1 from "../public/commission1.jpg";
import com2 from "../public/commission2.jpg";
import com3 from "../public/commission3.jpg";
import com4 from "../public/commission4.jpg";
import com5 from "../public/commission5.jpg";
import com6 from "../public/commission6.jpg";
import logo2 from "../public/logo2.png";

const Commission = () => {
  return (
    <div className="md:w-[73%] lg:w-[80%] ml-auto sm:px-8 lg:px-16 pt-10">
      <p className="text-center tracking-[6px]">COMMISSION INFORMATION</p>
      <p className="text-[12px] mt-4">
        Before placing an order with me, please read my Terms of Service below.
        These terms apply to private and personal use commissions only.{" "}
        <span className="font-semibold">
          This information is not applicable for commercial work.
        </span>{" "}
        Please inquire about commercial work in the Contact page. <br /> <br />{" "}
        <span className="font-semibold">
          My commissions are open, and I have no limit on slots at this time.
        </span>{" "}
        Please feel free to use the contact page to request a commission,
        emailing me with your request and I will get back to you with a final
        price if it differentiates from the price estimates described in the
        commission guide, which you can then agree upon. If I can&apos;t take
        your commission for any reason whatsoever, I will let you know as well.
        <br /> <br /> Please be sure to read through the guide thoroughly. All
        base prices are for one character, but I have included the estimated
        costs for additional characters and other additions. Note that these
        prices are simply estimates, and may increase or decrease in price based
        upon complexity of your character designs, lack of or lack of a good
        visual reference for said characters, complexity of backgrounds, and
        overall amount of detail in the artwork as a whole.
      </p>
      <div className="flex justify-center mt-4">
        <Link
          href="/TermsOfService"
          className="tracking-[6px] bg-[#95ab60] hover:bg-[#8ea559] px-4 py-1 rounded-full text-[12px] text-white">
          TERMS OF SERVICE
        </Link>
      </div>
      <div className="border-b-2 w-[70%] mx-auto my-4"></div>
      <p className="text-center tracking-[6px]">WATERCOLOR COMMISSION</p>
      <div className="flex flex-col md:flex-row mt-8 mx-auto px-10 md:px-0">
        {/* card */}
        <div className="w-full md:w-[40%]">
          <h1 className="tracking-[4px] font-semibold text-lg text-gray-500 mb-4">
            ACEO (Art Card)
          </h1>
          <p className="font-semibold text-sm">Starts at 20 USD</p>
          <p className="text-left text-[12px]">
            Size: 2.5&quot;x3.5&quot; <br />
            Includes one character and simple background.
          </p>
          <div className="flex flex-row justify-between mt-4">
            <p className="font-semibold text-sm">Add-ons</p>
            <p className="font-semibold text-sm">Price</p>
          </div>
          <div className="border-b-2"></div>
          <div className="flex flex-row justify-between">
            <p className=" text-sm">Illustrated Background</p>
            <p className=" text-sm">$5</p>
          </div>
          <p className="text-[12px] text-left mt-4">
            Character details may be simplified due to size of painting area.
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full md:w-[60%] md:ml-10 gap-2 justify-center items-center mt-4 md:mt-0">
          <Image
            src={com1}
            alt="about page img 1"
            className="w-[150px] h-[150px] rounded-md object-cover transition-transform duration-500 transform-gpu hover:scale-105"
          />
          <Image
            src={com2}
            alt="about page img 1"
            className="w-[150px] h-[150px] rounded-md object-cover transition-transform duration-500 transform-gpu hover:scale-105"
          />
          <Image
            src={com3}
            alt="about page img 1"
            className="w-[150px] h-[150px] rounded-md object-cover transition-transform duration-500 transform-gpu hover:scale-105"
          />
        </div>
      </div>
      {/* 2nd card */}
      <div className="flex flex-col md:flex-row mt-8 mx-auto px-10 md:px-0">
        {/* card */}
        <div className="w-full md:w-[40%]">
          <h1 className="tracking-[4px] font-semibold text-lg text-gray-500 mb-4">
            Square
          </h1>
          <p className="font-semibold text-sm">Starts at 35 USD</p>
          <p className="text-left text-[12px]">
            Size: 5&quot;x5&quot; <br />
            Includes one character and a simple background. Max 2 characters.
          </p>
          <div className="flex flex-row justify-between mt-4">
            <p className="font-semibold text-sm">Add-ons</p>
            <p className="font-semibold text-sm">Price</p>
          </div>
          <div className="border-b-2"></div>
          <div className="flex flex-row justify-between">
            <p className=" text-sm">Illustrated Background</p>
            <p className=" text-sm">$10</p>
          </div>
          <div className="border-b-[1px]"></div>
          <div className="flex flex-row justify-between">
            <p className=" text-sm">Additional Character</p>
            <p className=" text-sm">$5</p>
          </div>
          <p className="text-[12px] text-left mt-4">
            Character details may be simplified due to size of painting area.
          </p>
        </div>
        <div className="flex flex-col w-full md:w-[60%] md:ml-10 gap-2 justify-center items-center mt-4 md:mt-0">
          <div className="border-b border-dashed w-3/4 mx-auto border-2 border-gray-400"></div>
          <h1 className="text-[#95AB60] text-center text-3xl ">
            examples coming soon
          </h1>
          <div className="border-b border-dashed w-3/4 mx-auto border-2 border-gray-400"></div>
        </div>
      </div>
      {/* 3rd card */}
      <div className="flex flex-col md:flex-row mt-8 mx-auto px-10 md:px-0">
        {/* card */}
        <div className="w-full md:w-[40%]">
          <h1 className="tracking-[4px] font-semibold text-lg text-gray-500 mb-4">
            Scenic
          </h1>
          <p className="font-semibold text-sm">Starts at 50 USD</p>
          <p className="text-left text-[12px]">
            Size: 5&quot;x7&quot; <br />
            Includes one character and a simple background. Max 2 characters.
          </p>
          <div className="flex flex-row justify-between mt-4">
            <p className="font-semibold text-sm">Add-ons</p>
            <p className="font-semibold text-sm">Price</p>
          </div>
          <div className="border-b-2"></div>
          <div className="flex flex-row justify-between">
            <p className=" text-sm">Illustrated Background</p>
            <p className=" text-sm">$10</p>
          </div>
          <div className="border-b-[1px]"></div>
          <div className="flex flex-row justify-between">
            <p className=" text-sm">Additional Character</p>
            <p className=" text-sm">$5</p>
          </div>
          <p className="text-[12px] text-left mt-4">
            Character details may be simplified due to size of painting area.
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full md:w-[60%] md:ml-10 gap-2 justify-center items-center mt-4 md:mt-0">
          <Image
            src={com4}
            alt="about page img 1"
            className="w-[150px] h-[150px] rounded-md object-cover transition-transform duration-500 transform-gpu hover:scale-105"
          />
          <Image
            src={com5}
            alt="about page img 1"
            className="w-[150px] h-[150px] rounded-md object-cover transition-transform duration-500 transform-gpu hover:scale-105"
          />
          <Image
            src={com6}
            alt="about page img 1"
            className="w-[150px] h-[150px] rounded-md object-cover transition-transform duration-500 transform-gpu hover:scale-105"
          />
        </div>
      </div>
      <div className="border-b my-4"></div>
      <div className="flex flex-col md:flex-row mx-4 md:mx-0">
        <div className="w-full md:w-[50%]">
          <h1 className="text-xl text-gray-500 text-left">
            Commission Process
          </h1>
          <div className="leading-6">
            <p className="text-[12px] text-gray-500 text-left">
              &#x2022; Once I receive the details of your order, I will review
              it and give you a price quote.
            </p>
            <p className="text-[12px] text-gray-500 text-left">
              &#x2022; After accepting the price quote, you will be invoiced.
              Payment is expected within five (5) business days.
            </p>
            <p className="text-[12px] text-gray-500 text-left">
              &#x2022; Sketch work will begin. You will receive a watermarked
              sketch for approval and changes can be discussed. After the sketch
              has been approved, I will no longer make any changes to the
              sketch.
            </p>
            <p className="text-[12px] text-gray-500 text-left">
              &#x2022; Updates of sketch, line art and colored work in progress
              will be sent through your preferred means of contact.
            </p>
            <p className="text-[12px] text-gray-500 text-left">
              &#x2022; Once work is completed, I will send you a watermarked
              version for final approval.
            </p>
            <p className="text-[12px] text-gray-500 text-left">
              &#x2022; Once approved, I will send you a high resolution digital
              copy of your painting in 300 DPI.
            </p>
            <p className="text-[12px] text-gray-500 text-left">
              &#x2022; Traditional paintings will be mailed at the client&apos;s
              request at the address provided in the commission details.
            </p>
            <h1 className="text-xl text-gray-500 text-left mt-4">
              Payment Options
            </h1>
            <p className="text-[12px] text-gray-500 text-left">PayPal (USD)</p>
          </div>
        </div>
        <div className="w-full md:w-[50%] pl-4 mt-8 md:mt-0">
          <h1 className="text-xl text-gray-500 text-left">
            Watercolor Material & Sizing Information
          </h1>
          <div className="leading-6">
            <p className="text-[12px] text-gray-500 text-left">
              &#x2022; Paintings are created on 140lb hot press watercolor
              paper.
            </p>
            <p className="text-[12px] text-gray-500 text-left">
              &#x2022; ACEO (Art cards) are created on 140lb cold press
              watercolor paper.
            </p>
            <p className="text-[12px] text-gray-500 text-left">
              &#x2022; Paintings have the option to be tea stained at no
              additional cost. Tea staining will result in a subdued, antique
              appearance.
            </p>
            <p className="text-[12px] text-gray-500 text-left">
              &#x2022; All paintings have a 1/8&quot; to 1/4&quot; border, with
              the exclusion of art cards. This border is due to my
              painter&apos;s tape.
            </p>
            <h1 className="text-xl text-gray-500 text-left mt-4">Shipping</h1>
            <p className="text-[12px] text-gray-500 text-left">
              All traditional media paintings will be shipped via one of the
              following flat rates of the client&apos;s choosing:
            </p>
            <p className="text-[12px] font-bold mt-4 text-gray-500 text-left">
              USPS Priority Mail - $8 (Domestic US only, tracking included){" "}
              <br /> USPS Snail Mail (Letter mail) - $1 (US, no tracking) <br />{" "}
              USPS Snail Mail (Letter mail) - $2 (International, no tracking)
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-4">
        <div className="w-1/2 md:w-[30%] mx-auto">
          <Image src={logo2} alt="logo" className="w-36 items-center" />
        </div>
        <div className="w-1/2 md:w-[35%] mx-auto mb-8 md:mb-0">
          <h1 className="text-xl text-gray-500 text-left">What I can do</h1>
          <div className="leading-6">
            <p className="text-[12px] text-gray-500 text-left">
              &#x2022; Fantasy themes
            </p>
            <p className="text-[12px] text-gray-500 text-left">
              &#x2022; Nature themes
            </p>
            <p className="text-[12px] text-gray-500 text-left">
              &#x2022; Original characters (Human or otherwise)
            </p>
            <p className="text-[12px] text-gray-500 text-left">
              &#x2022; Animals / Fantasy Creatures
            </p>
            <p className="text-[12px] text-gray-500 text-left">
              &#x2022; Adoptable Species
            </p>
          </div>
        </div>
        <div className="w-1/2 md:w-[35%] mx-auto">
          <h1 className="text-xl text-gray-500 text-left">
            What I won&apos;t do
          </h1>
          <div className="leading-6">
            <p className="text-[12px] text-gray-500 text-left">
              &#x2022; Hateful art, Gore & Fetishes
            </p>
            <p className="text-[12px] text-gray-500 text-left">
              &#x2022; Mecha art & Realism
            </p>
            <p className="text-[12px] text-gray-500 text-left">
              &#x2022; Cityscapes & Modern buildings
            </p>
            <p className="text-[12px] text-gray-500 text-left">
              &#x2022; Fan art
            </p>
            <p className="text-[12px] text-gray-500 text-left">
              &#x2022; Pornography & NSFW
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

export default Commission;
