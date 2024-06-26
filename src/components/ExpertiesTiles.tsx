import React from "react";
import { StarIcon } from "../../public/images/rendered-icon";
import Image from "next/image";
import { EachExpertiesProp } from "@/types";

const ExpertiesTiles = ({
  title,
  imageLeft,
  image,
  items,
}: EachExpertiesProp) => {
  return (
    <div
      className={`${imageLeft ? "" : "bg-brandBlack text-brandWhite "} pt-20 pb-20`}
    >
      {" "}
      <h1 className="px-[5%] mb-20 flex gap-4 items-center font-[800] md:text-[73px] text-[40px] leading-[48px]">
        <StarIcon className=" md:w-[80px] md:h-[80px] " />
        {title}
      </h1>
      <div
        className={`  flex md:flex-row flex-col md:gap-0 gap-20 md:pl-[5%] pl-0 justify-between`}
      >
        {/* {imageLeft && (
          <div className="md:w-[45%] w-full">
            <Image
              src={image}
              alt="Public Relations"
              width={1000}
              height={1000}
              priority
              className="w-full object-contain"
            />
          </div>
        )} */}
        <div className="md:w-[45%] w-[91%] flex flex-col md:mx-0 mx-[5%] md:gap-0 gap-10 justify-between">
          {items.map((data, index) => (
            <div key={index} className="mb-5">
              <div className="flex gap-3 items-center ">
                <StarIcon className=" w-[23px] h-[23px]" />
                <h1 className="font-[800] md:text-[22px] text-[18px] md:leading-light leading-[21px]">
                  {data.title}
                </h1>
              </div>
              <p className="font-[400] md:text-[17px] text-[12px] md:mt-3 mt-3 text-justify">
                {data.description}
              </p>
            </div>
          ))}
        </div>
        <div className="md:w-[45%] w-full ">
          <Image
            src={image}
            alt="Public Relations"
            width={1000}
            height={1000}
            // priority
            className="w-full object-contain"
          />
        </div>
        {/* {!imageLeft && (
        )} */}
      </div>
    </div>
  );
};

export default ExpertiesTiles;
