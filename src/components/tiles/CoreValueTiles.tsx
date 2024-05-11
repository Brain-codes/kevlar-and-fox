import { eachCoreValueProp } from "@/types";
import React from "react";

const CoreValueTiles = ({ title, description }: eachCoreValueProp) => {
  return (
    <div className="border-b border-brandBlack flex justify-between items-center py-[4%]">
      <h1 className="text-brandBlack font-[700] text-[43px] md:w-[45%] w-full">
        {title}
      </h1>
      <p className="text-brandBlack font-[400] text-[18px] md:w-[45%] w-full">
        {description}
      </p>
    </div>
  );
};

export default CoreValueTiles;
