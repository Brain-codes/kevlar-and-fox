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
          <h1 className="text-white font-[300] text-[50px] flex items-center gap-3">
            Our
            <span className="text-lightBlue font-[800]">Mission</span>
            <StarIcon className="text-lightBlue w-10 h-10" />
          </h1>
          <Underline className="text-lightBlue absolute bottom-[-60%] ml-10" />
        </div>
        <p className="text-white font-light text-[17px] pt-5">
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
          className="w-[25%] object-contain"
        />
      </div>

      <div className="md:w-[45%] w-full flex flex-col gap-10 items-end">
        <Image
          src="/images/visionImg.svg"
          alt="our vision"
          width={100}
          height={100}
          priority
          className="w-[25%] object-contain"
        />
        <p className="text-white font-light text-[17px] pt-5 text-right">
          To be Africa&apos;s foremost provider of tailored solutions,
          spearheading success through exceptional offerings that catalyses
          sustainable growth and prosperity
        </p>
        <div className="relative">
          <h1 className="text-white font-[300] text-[50px] flex items-center gap-3">
            Our
            <span className="text-lightBlue font-[800]">Vision</span>
            <StarIcon className="text-lightBlue w-10 h-10" />
          </h1>
          <Underline className="text-lightBlue absolute bottom-[-60%] ml-10" />
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
