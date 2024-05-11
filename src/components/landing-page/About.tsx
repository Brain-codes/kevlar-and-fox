import React from "react";
import { Underline } from "../../../public/images/rendered-icon";
import Image from "next/image";

type AboutProps = {
  id: string;
};

const About = ({ id }: AboutProps) => {
  return (
    <div className="bg-brandWhite py-20 relative">
      <div className="pl-[5%] relative">
        <h1 className="text-deepBlue font-extrabold text-[68px] ">About Us</h1>
        <Underline className="text-brandBlack absolute bottom-[-50%] ml-10" />
      </div>
      <div className="px-[5%] py-[10%] flex justify-between md:flex-row flex-col items-center">
        <div className="md:w-[40%] w-full  text-brandBlack font-[400] text-[20px] text-justify flex flex-col gap-20 leading-[33.8px]">
          <p className="">
            Our goal is simple yet profound: to empower businesses with
            innovative solutions that drive success. We believe in challenging
            the status quo, pushing boundaries, and redefining what&apos;s
            possible.
          </p>
          <p className="">
            We understand that every business is unique, which is why we take a
            personalized approach to every client. From initial consultation to
            implementation and beyond, we&apos;re dedicated to understanding
            your specific needs and delivering tailored solutions that exceed
            your expectations.
          </p>
          <p className="">
            Our team of experts combines creativity with strategic thinking to
            develop innovative solutions that address your challenges and
            position your business for long-term success. Your success is our
            success, and we&apos;re committed to going above and beyond to help
            you achieve your goals.
          </p>
        </div>

        <div className="relative w-[40%]">
          <Image
            src="/images/about-img.svg"
            alt="logo"
            width={100}
            height={100}
            priority
            className="w-full object-contain  "
          />
          <div className="bottom-[-10%] right-[-5%] absolute">
            <div className="bg-lightBlue w-[240px] py-6 px-[20px] rounded-lg">
              <Image
                src="/images/quote.svg"
                alt="quote"
                width={100}
                height={100}
                priority
                className="w-[17px] object-contain absolute top-5 left-5 "
              />
              <p className="ml-5 mb-5 mt-4 text-[300] ">
                Redefine norms and elevate beyond traditional boundaries
              </p>
              <Image
                src="/images/quote.svg"
                alt="quote"
                width={100}
                height={100}
                priority
                className="w-[17px] object-contain absolute bottom-5 right-5 "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full top-0 z-[1]">
        <Image
          src="/images/logo-bold.svg"
          alt="logo"
          width={100}
          height={100}
          priority
          className="w-1/3 object-contain"
        />
      </div>
    </div>
  );
};

export default About;
