/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const Action = () => {
  return (
    <section className="relative py-20 md:h-[80vh] px-[5%] bg-brandWhite border-t border-brandBlack flex items-center justify-center">
      <h1 className="relative text-brandBlack uppercase font-[800] text-balance text-[40px] text-center leading-[43px] z-10 md:w-[80%] w-full">
        We don't believe in one-size-fits-all solutions – instead, we take the
        time to understand your unique needs, challenges, and goals, crafting
        bespoke strategies that propel your business forward.
      </h1>
      <div className="absolute w-full bottom-0 z-[1]">
        <Image
          src="/images/abuja.svg"
          alt="abuja"
          width={100}
          height={100}
          // priority
          className="w-full object-contain opacity-30"
        />
      </div>
    </section>
  );
};

export default Action;
