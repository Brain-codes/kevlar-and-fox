"use client";

import React from "react";
import About from "@/components/landing-page/About";
import CoreValues from "@/components/landing-page/CoreValues";
import Hero from "@/components/landing-page/Hero";
import Intro from "@/components/landing-page/Intro";
import MissionVision from "@/components/landing-page/MissionVision";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import { ParallaxProvider } from "react-scroll-parallax";
import CustomCursor from "@/lib/CustomCursor";
import useSmoothScroll from "@/lib/useSmoothScroll";
import Experties from "@/components/landing-page/Experties";

const Wrapper = () => {
  useSmoothScroll();

  return (
    <>
      <ParallaxProvider>
        <CustomCursor />
        <Navbar />
        <main className="flex flex-col mix-blend-difference whole-cont">
          <Hero id="home" />
          <Intro id="intro" />
          <About id="about" />
          <MissionVision />
          <CoreValues />
          <Experties />
          {/*
        <About id="about" />
        <WhatWeDo id="services" />
        <ContactUs id="contact-us" /> */}
        </main>
        {/* <Footer /> */}
      </ParallaxProvider>
    </>
  );
};

export default Wrapper;
