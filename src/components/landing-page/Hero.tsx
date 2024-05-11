"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { NeatConfig, NeatGradient } from "@firecms/neat";
import {
  ArrowUpRight,
  StarIcon,
  Underline,
} from "../../../public/images/rendered-icon";
import SplitLetterAnimation from "../../lib/SplitLetterAnimation";
import SplitWordAnimation from "../../lib/SplitWordAnimation";

type HeroProps = {
  id: string;
};

const Hero = ({ id }: HeroProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gradientRef = useRef<NeatGradient | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    gradientRef.current = new NeatGradient({
      ref: canvasRef.current,

      colors: [
        {
          color: "#000511",
          enabled: true,
        },
        {
          color: "#FFC858",
          enabled: false,
        },
        {
          color: "#202437",
          enabled: true,
        },
        {
          color: "#000511",
          enabled: true,
        },
        {
          color: "#000511",
          enabled: false,
        },
      ],
      speed: 6,
      horizontalPressure: 5,
      verticalPressure: 5,
      waveFrequencyX: 2,
      waveFrequencyY: 2,
      waveAmplitude: 0,
      shadows: 0,
      highlights: 2,
      colorBrightness: 0.85,
      colorSaturation: 7,
      wireframe: false,
      colorBlending: 10,
      backgroundColor: "#003FFF",
      backgroundAlpha: 1,
      resolution: 1,
    });

    return gradientRef.current.destroy;
  }, []);
  return (
    <div className="relative h-[100vh]">
      <canvas
        className="bg-brandBlack absolute top-0 left-0"
        style={{
          isolation: "isolate",
          height: "100vh",
          width: "100%",
        }}
        ref={canvasRef}
      />

      <div
        className="flex pl-[5%]  justify-between  items-center z-10 absolute"
        style={{
          //   backgroundImage: "url(/images/hero-bg.svg)",
          width: "100%",
          height: "100vh",
          //   backgroundRepeat: "no-repeat",
          //   objectFit: "contain",
          //   backgroundSize: "cover",
        }}
      >
        <div className="md:w-1/2 w-full py-[200px]">
          <div className="flex gap-6 items-center mb-10">
            <div className="relative">
              <div className="rounded border border-brandWhite py-2 px-4 text-brandWhite font-light text-[17px] bg-brandWhite/10 backdrop-blur-sm">
                Solutions + Business
              </div>
              <div className="absolute top-[-5px] z-[-2] left-[-5px] rounded border border-brandWhite py-2 px-4 text-transparent font-light text-[17px] bg-brandWhite/10 backdrop-blur-sm">
                Solutions + Business
              </div>
            </div>
            <p className="text-brandWhite font-light text-[17px]">
              At Kevlar & Fox Consulting
            </p>
          </div>
          <h1 className="mb-20 text-brandWhite font-light text-[58px] leading-tight">
            <SplitWordAnimation word="Where Sophistication Seamlessly Meets" />
            <span className="relative ">
              <div className="flex items-center gap-3">
                <h1 className="font-bold text-lightBlue text-[58px] uppercase">
                  Innovation
                </h1>{" "}
                <StarIcon className="text-lightBlue" />
              </div>
              <Underline className="text-lightBlue absolute bottom-[-50%] ml-10" />
            </span>
          </h1>
          <p className="text-white font-light text-[17px] md:w-[66%] w-full pt-5">
            <SplitWordAnimation
              word="We see the power of technology to drive innovation and growth, as
            well as the importance of providing cutting-edge training to empower
            teams in a fast-changing market.."
            />
          </p>
          <div className="mt-20 flex items-center gap-1">
            <div className="py-3 font-medium px-7 text-[12px] text-brandBlack rounded bg-brandWhite">
              Contact Us
            </div>
            <div className="py-[8.5px] font-medium px-3 rounded bg-brandWhite/10 backdrop-blur-sm border border-[0.7px] border-white/10">
              <ArrowUpRight className="rotate-[-44deg]" />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full h-full flex items-end justify-end  object-top">
          <Image
            src="/images/hero-one.svg"
            alt="hero"
            width={100}
            height={100}
            priority
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
