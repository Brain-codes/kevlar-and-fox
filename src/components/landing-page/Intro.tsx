import Image from "next/image";
import React from "react";
import SplitLetterAnimation from "../../lib/SplitLetterAnimation";
import SplitWordAnimation from "../../lib/SplitWordAnimation";

type IntroProps = {
  id: string;
};

const Intro = ({ id }: IntroProps) => {
  return (
    <div className="relative bg-brandWhite">
      <div className="px-[5%] z-10 relative pb-[30%] pt-[10%]">
        <h1 className="font-light text-[48px] text-brandBlack ">
          <SplitWordAnimation
            word="We understand that a positive brand narrative is more than just words
          on a page, it reflects your values, vision, and identity in a crowded
          market. We also see the power of technology to drive innovation and
          growth, as well as the importance of providing cutting-edge training
          to empower teams in a fast-changing market.."
          />
        </h1>
        <div className="w-full flex items-end justify-end mt-[10%]">
          <p className="md:w-[45%] w-full font-normal text-[17px] text-right text-brandBlack">
            We understand that a positive brand narrative is more than just
            words on a page, it reflects your values, vision, and identity in a
            crowded market. We also see the power of technology to drive
            innovation and growth, as well as the importance of providing
            cutting-edge training to empower teams in a fast-changing market..
          </p>
        </div>
      </div>
      <div className="absolute w-full bottom-0 z-[1]">
        <Image
          src="/images/abuja.svg"
          alt="abuja"
          width={100}
          height={100}
          priority
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Intro;
