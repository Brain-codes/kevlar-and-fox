import React from "react";
import { StarIcon, Underline } from "../../../public/images/rendered-icon";
import Image from "next/image";
import ExpertiesTiles from "../tiles/ExpertiesTiles";
import { ExpertiesItem } from "@/constants";

type AboutProps = {
  id: string;
};

const Experties = ({ id }: AboutProps) => {
  return (
    <div id={id}>
      <div className="bg-brandBlack py-20 px-[5%]">
        <div className="relative">
          <h1 className="text-white font-[300] md:text-[50px] text-[40px] flex items-center gap-3">
            Our
            <span className="text-lightBlue font-[800]">Experties</span>
            <StarIcon className="text-lightBlue md:w-10 md:h-10 w-5 h-5" />
          </h1>
          <Underline className="text-lightBlue absolute top-[-60%] ml-10 rotate-[-180deg]md:block hidden" />
        </div>
        <p className="md:font-[400] font-[200] md:text-[17px] text-[12px] text-white">
          Tailored to propel your business to unprecedented heights
        </p>
      </div>
      <div
        className="py-[3%]"
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
