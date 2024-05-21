"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { NeatConfig, NeatGradient } from "@firecms/neat";
import {
  ArrowUpRight,
  StarIcon,
  Underline,
} from "../../../public/images/rendered-icon";
import SplitWordAnimation from "../../lib/SplitWordAnimation";

type HeroProps = {
  id: string;
};

const Hero = ({ id }: HeroProps) => {
  const images = [
    "/images/hero-one.svg",
    "/images/hero-two.svg",
    "/images/hero-three.svg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000); // Time for fade out effect
    }, 5000); // Time between image changes

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="flex  md:flex-row flex-col-reverse  justify-between  items-center z-10 "
      style={{
        backgroundImage: "url(/images/hero-bg.svg)",
        width: "100%",
        backgroundRepeat: "no-repeat",
        objectFit: "contain",
        backgroundSize: "cover",
      }}
    >
      <div className="md:w-1/2 w-full md:py-[200px] py-[120px] pl-[5%]">
        <div className="flex sm:flex-row flex-col gap-6 items-center mb-10">
          <div className="relative">
            <div className="rounded border border-brandWhite py-2 px-4 text-brandWhite font-light md:text-[17px] text-[12px] bg-brandWhite/10 backdrop-blur-sm">
              Solutions + Business
            </div>
            <div className="absolute top-[-5px] z-[-2] left-[-5px] rounded border border-brandWhite py-2 px-4 text-transparent font-light md:text-[17px] text-[12px] bg-brandWhite/10 backdrop-blur-sm">
              Solutions + Business
            </div>
          </div>
          <p className="text-brandWhite font-light md:text-[17px] text-[12px]">
            At Kevlar & Fox Consulting
          </p>
        </div>
        <h1 className="mb-20 text-brandWhite font-light md:text-[58px] text-[40px] leading-tight">
          <SplitWordAnimation word="Where Sophistication Seamlessly Meets" />
          <span className="relative ">
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-lightBlue md:text-[58px] text-[40px] uppercase">
                Innovation
              </h1>{" "}
              <StarIcon className="text-lightBlue md:w-fill md:h-fill w-5 h-5" />
            </div>
            <Underline className="text-lightBlue absolute bottom-[-50%] ml-10" />
          </span>
        </h1>
        <p className="text-white font-light md:text-[17px] text-[12px] md:w-[66%] w-full pt-5">
          <SplitWordAnimation word="Elevating organizations through expert PR strategies, cutting-edge digital transformations, and empowering training solutions." />
        </p>
        <div className="mt-20 flex items-center gap-1">
          <div className="py-3 font-medium px-7 text-[12px] text-brandBlack rounded bg-brandWhite">
            Contact Us
          </div>
          <div className="py-[8.5px] font-medium px-3 rounded bg-brandWhite/10 backdrop-blur-sm border border-[0.7px] border-white/10">
            <ArrowUpRight className="rotate-[-44deg]" />
          </div>
        </div>
      </div>
      <div
        className="md:w-1/2 w-full md:h-[100%] h-[25vh] flex items-end justify-end  object-top relative"
        // style={{
        //   backgroundImage: `url(${images[currentImageIndex]})`,
        //   backgroundRepeat: "no-repeat",
        //   objectFit: "contain",
        //   backgroundSize: "cover",
        // }}
      >
        <Image
          src={images[currentImageIndex]}
          alt="hero"
          width={100}
          height={100}
          priority
          className={`transition-opacity duration-1000 ${
            fade ? "opacity-100" : "opacity-0"
          } md:w-[90%] w-full h-full object-cover`}
        />
      </div>
    </div>
  );
};

export default Hero;
