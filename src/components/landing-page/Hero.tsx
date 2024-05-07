import Image from "next/image";
import React from "react";
import { StarIcon, Underline } from "../../../public/images/rendered-icon";

type HeroProps = {
  id: string;
};

const Hero = ({ id }: HeroProps) => {
  return (
    <div
      className="flex px-[5%] py-[200px] justify-between  items-center"
      style={{
        backgroundImage: "url(/images/hero-bg.svg)",
        width: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        objectFit: "contain",
        backgroundSize: "cover",
      }}
    >
      <div className="md:w-1/2 w-full">
        <h1 className="mb-20 text-brandWhite font-light text-[58px] leading-tight">
          Where Sophistication Seamlessly Meets{" "}
          <span className="relative ">
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-lightBlue text-[58px] uppercase">
                Innovation
              </h1>{" "}
              <StarIcon className="text-lightBlue" />
            </div>
            <Underline className="text-lightBlue absolute bottom-[-50%] ml-10" />
          </span>
        </h1>
        <p className="text-white font-light text-[17px] md:w-[66%] w-full pt-5">
          We see the power of technology to drive innovation and growth, as well
          as the importance of providing cutting-edge training to empower teams
          in a fast-changing market..
        </p>
      </div>
    </div>
  );
};

export default Hero;
