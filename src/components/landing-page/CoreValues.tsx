"use client";
import React from "react";
import { StarIcon } from "../../../public/images/rendered-icon";
import Slider, { Settings } from "react-slick";
import CoreValueTiles from "../tiles/CoreValueTiles";
import { CoreValuesItems } from "@/constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CoreValues = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
  };
  const items = [
    "Latest Releases",
    "Latest Releases",
    "Latest Releases",
    "Latest Releases",
    "Latest Releases",
    "Latest Releases",
    "Latest Releases",
    "Latest Releases",
    "Latest Releases",
    "Latest Releases",
    "Latest Releases",
    "Latest Releases",
    "Latest Releases",
  ];
  return (
    <div
      className=""
      style={{
        backgroundImage: "url(/images/lightBG.svg)",
        width: "100%",
        backgroundRepeat: "no-repeat",
        objectFit: "contain",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full flex items-center justify-start gap-7 py-10 overflow-x-hidden ">
        <Slider {...settings} className="w-full flex">
          {items.map((data, index) => (
            <div key={index} className="flex items-center gap-20 ">
              <h1 className="text-brandBlack font-[300] text-[89px] flex items-center gap-3 uppercase">
                CORE
                <span className="font-[800]">VALUES</span>
                <StarIcon className="text-lightBlue w-20 h-20 ml-20" />
              </h1>
            </div>
          ))}
        </Slider>
      </div>
      <div className="my-[10%] px-[5%]">
        {CoreValuesItems.items.map((data, index) => (
          <CoreValueTiles
            title={data.title}
            description={data.description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
