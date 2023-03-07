import React from "react";

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
    </div>
  );
};

export default Commission;
