import React from "react";
import { StarIcon } from "../../../public/images/rendered-icon";
import Image from "next/image";
import { EachExpertiesProp } from "@/types";

const ExpertiesTiles = ({
  title,
  imageLeft,
  image,
  items,
}: EachExpertiesProp) => {
  return (
    <div>
      {" "}
      <h1 className="px-[5%] mb-20 flex gap-4 items-center font-[800] text-[73px] text-brandBlack">
        <StarIcon className="text-brandBlack w-[80px] h-[80px]" />
        {title}
      </h1>
      <div className="pr-[5%] flex md:flex-row flex-col">
        {imageLeft && (
          <div className="md:w-[45%] w-full">
            <Image
              src={image}
              alt="Public Relations"
              width={100}
              height={100}
              priority
              className="w-full object-contain"
            />
          </div>
        )}
        <div className="md:w-[45%] w-full flex flex-col justify-between">
          {items.map((data, index) => (
            <div key={index}>
              <div className="flex gap-3 items-center">
                <StarIcon className="text-brandBlack w-[23px] h-[23px]" />
                <h1 className="font-[800] text-[22px] text-brandBlack">
                  {data.title}
                </h1>
              </div>
              <p className="font-[400] text-[17px] text-brandBlack">
                {data.description}
              </p>
            </div>
          ))}
        </div>
        {!imageLeft && (
          <div className="md:w-[45%] w-full">
            <Image
              src={image}
              alt="Public Relations"
              width={100}
              height={100}
              priority
              className="w-full object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpertiesTiles;
