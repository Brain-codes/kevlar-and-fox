import React from "react";
import { StarIcon, Underline } from "../../../public/images/rendered-icon";
import Image from "next/image";
import ExpertiesTiles from "../tiles/ExpertiesTiles";
import { ExpertiesItem } from "@/constants";

const Experties = () => {
  return (
    <div>
      <div className="bg-brandBlack py-20 px-[5%]">
        <div className="relative">
          <h1 className="text-white font-[300] text-[50px] flex items-center gap-3">
            Our
            <span className="text-lightBlue font-[800]">Experties</span>
            <StarIcon className="text-lightBlue w-10 h-10" />
          </h1>
          <Underline className="text-lightBlue absolute top-[-60%] ml-10 rotate-[-180deg]" />
        </div>
        <p className="font-[400] text-[17px] text-white">
          Tailored to propel your business to unprecedented heights
        </p>
      </div>
      <div
        className="py-[7%]"
        style={{
          backgroundImage: "url(/images/lightBG.svg)",
          width: "100%",
          backgroundRepeat: "no-repeat",
          objectFit: "contain",
          backgroundSize: "cover",
        }}
      >
        {ExpertiesItem.items.map((data, index) => (
        <ExpertiesTiles
            title={data.title}
            imageLeft={data.imageLeft}
            items={data.items}
            image={data.image}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Experties;
