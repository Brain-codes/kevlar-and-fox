import { eachCoreValueProp } from "@/types";
import React from "react";

const CoreValueTiles = ({ title, description }: eachCoreValueProp) => {
  return (
    <div className="border-b border-brandBlack flex md:flex-row flex-col justify-between items-center py-[4%] md:gap-0 gap-5">
      <h1 className="text-brandBlack font-[700] md:text-[43px] text-[18px] md:w-[45%] w-full">
        {title}
      </h1>
      <p className="text-brandBlack font-[400] md:text-[18px] text-[12px] md:w-[45%] w-full">
        {description}
      </p>
    </div>
  );
};

export default CoreValueTiles;
