import React from "react";
import { StarIcon, Underline } from "../../../public/images/rendered-icon";
import Image from "next/image";

const MissionVision = () => {
  return (
    <div
      className="px-[5%] py-[7%] h-fit flex items-center justify-between md:flex-row flex-col"
      style={{
        backgroundImage: "url(/images/hero-bg.svg)",
        width: "100%",
        backgroundRepeat: "no-repeat",
        objectFit: "contain",
        backgroundSize: "cover",
      }}
    >
      <div className="md:w-[45%] w-full flex flex-col gap-10">
        <div className="relative">
          <h1 className="text-white font-[300] md:text-[50px] text-[40px] flex items-center gap-3">
            Our
            <span className="text-lightBlue font-[800]">Mission</span>
            <StarIcon className="text-lightBlue md:w-10 md:h-10 w-5 h-5" />
          </h1>
          <Underline className="text-lightBlue absolute bottom-[-60%] ml-10 md:block hidden" />
        </div>
        <p className="text-white font-light md:text-[17px] text-[12px] md:pt-5">
          We deliver bespoke consultancy services in Public Relations, Digital
          Transformation, and Skills Development, while cultivating lasting
          relationships.
        </p>
        <Image
          src="/images/missionImg.svg"
          alt="our mission"
          width={100}
          height={100}
          priority
          className="md:w-[25%] w-full object-contain"
        />
      </div>

      <div className="md:w-[45%] md:mt-0 mt-20 w-full flex md:flex-col flex-col-reverse gap-10 md:items-end">
        <Image
          src="/images/visionImg.svg"
          alt="our vision"
          width={100}
          height={100}
          priority
          className="md:w-[25%] w-full object-contain"
        />
        <p className="text-white font-light md:text-[17px] text-[12px] md:pt-5">
          To be Africa&apos;s foremost provider of tailored solutions,
          spearheading success through exceptional offerings that catalyses
          sustainable growth and prosperity
        </p>
        <div className="relative">
          <h1 className="text-white font-[300] md:text-[50px] text-[40px] flex items-center gap-3">
            Our
            <span className="text-lightBlue font-[800]">Vision</span>
            <StarIcon className="text-lightBlue md:w-10 md:h-10 w-5 h-5" />
          </h1>
          <Underline className="text-lightBlue absolute bottom-[-60%] ml-10 md:block hidden" />
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
