/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const Action = () => {
  return (
    <section className="relative py-20 md:h-[80vh] px-[5%] bg-brandWhite border-t border-brandBlack flex items-center justify-center">
      <h1 className="relative text-brandBlack font-[300] italic text-balance text-[40px] text-center leading-[43px] z-10 md:w-[80%] w-full">
        Break free from the ordinary! Let us immerse ourselves in your story,
        understanding your needs and dreams. Together, we shall create bespoke
        solutions that set your business on a path to greatness.
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
