/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { StarIcon, Underline } from "../../../public/images/rendered-icon";
import Image from "next/image";
type AboutProps = {
  id: string;
};
const CaseStudy = ({ id }: AboutProps) => {
  return (
    <div
      id={id}
      className="bg-brandBlack flex flex-col items-center py-20"
      style={{
        backgroundImage: "url(/images/hero-bg.svg)",
        width: "100%",
        // height: "100vh",
        backgroundRepeat: "no-repeat",
        objectFit: "contain",
        backgroundSize: "cover",
      }}
    >
      <div className="relative">
        <h1 className="text-white font-[300] md:text-[50px] text-[40px] flex items-center gap-3">
          Case
          <span className="text-lightBlue font-[800]">Study</span>
          <StarIcon className="text-lightBlue md:w-10 md:h-10 w-5 h-5" />{" "}
        </h1>
        <Underline className="text-lightBlue absolute bottom-[-60%] ml-10 md:block hidden" />{" "}
      </div>
      <div className="w-full px-[5%] md:mt-[10%] mt-[120px]  flex flex-col items-center justify-center md:gap-0 gap-[60px]">
        {/* ======================= */}
        <div className="flex justify-between w-full ">
          <div className="flex gap-10 w-full relative">
            <p className="font-[400] text-white md:text-[20px] text-[12px]">
              01
            </p>
            <div className="md:w-auto w-[100%]">
              <p className="font-[400] text-white md:text-[20px] text-[12px]">
                Case Study
              </p>
              <h1 className="font-bold text-white md:text-[73px] sm:text-[25px] text-[40px] uppercase leading-tight">
                ARDDEC's <br /> Medical Mission
              </h1>
              <div className="w-full flex justify-end mt-5 ">
                <div className="flex w-fit gap-4 items-center group transition-all duration-500 cursor-pointer">
                  <StarIcon className="text-lightBlue md:w-10 md:h-10 w-5 h-5" />
                  <div>
                    <p className="font-[400] text-white md:text-[20px] text-[12px]">
                      Preview
                    </p>
                    <div className="border-b group-hover:w-[100%]  w-[0px] transition-all duration-500 "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mr-[20%] md:block hidden">
            <Image
              src="/images/s1.svg"
              alt="hero"
              width={100}
              height={100}
              priority
              className="w-full object-contain"
            />
          </div>
        </div>
        {/* ======================= */}
        <div className="flex md:justify-between w-full items-center">
          <div className="ml-[20%] w-fit gap-5 md:flex hidden">
            <Image
              src="/images/s2.svg"
              alt="hero"
              width={100}
              height={100}
              priority
              className="w-full object-contain"
            />
            <Image
              src="/images/s2a.svg"
              alt="hero"
              width={100}
              height={100}
              priority
              className="w-full object-contain"
            />
          </div>
          <div className="flex gap-10 w-full md:justify-end ">
            <p className="font-[400] text-white md:text-[20px] text-[12px]">
              02
            </p>
            <div className="md:w-auto w-[100%]">
              <p className="font-[400] text-white md:text-[20px] text-[12px]">
                Case Study
              </p>
              <h1 className="font-bold text-white md:text-[73px] sm:text-[25px] text-[40px] uppercase leading-tight">
                TETFUND's TERAS <br /> Ecosystem
              </h1>
              <div className="w-full flex justify-end mt-5 ">
                <div className="flex w-fit gap-4 items-center group transition-all duration-500 cursor-pointer">
                  <StarIcon className="text-lightBlue md:w-10 md:h-10 w-5 h-5" />
                  <div>
                    <p className="font-[400] text-white md:text-[20px] text-[12px]">
                      Preview
                    </p>
                    <div className="border-b group-hover:w-[100%]  w-[0px] transition-all duration-500 "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>{" "}
        {/* ======================= */}
        <div className="flex gap-10 w-full relative">
          <p className="font-[400] text-white md:text-[20px] text-[12px]">03</p>
          <div className="md:w-auto w-[100%]">
            <p className="font-[400] text-white md:text-[20px] text-[12px]">
              Case Study
            </p>
            <h1 className="font-bold text-white md:text-[73px] sm:text-[25px] text-[40px] uppercase leading-tight">
              IT Incident Management <br /> Transformation
            </h1>
            <div className="w-full flex justify-end mt-5 ">
              <div className="flex w-fit gap-4 items-center group transition-all duration-500 cursor-pointer">
                <StarIcon className="text-lightBlue md:w-10 md:h-10 w-5 h-5" />
                <div>
                  <p className="font-[400] text-white md:text-[20px] text-[12px]">
                    Preview
                  </p>
                  <div className="border-b group-hover:w-[100%]  w-[0px] transition-all duration-500 "></div>
                </div>
              </div>
            </div>
            <div className=" absolute md:block hidden">
              <Image
                src="/images/s3.svg"
                alt="hero"
                width={100}
                height={100}
                priority
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
