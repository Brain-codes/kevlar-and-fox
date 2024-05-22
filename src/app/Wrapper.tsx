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
import CaseStudy from "@/components/landing-page/CaseStudy";
import Contact from "@/components/landing-page/Contact";
import Action from "@/components/landing-page/Action";
import Footer from "@/components/landing-page/Footer";

const Wrapper = () => {
  // useSmoothScroll();

  return (
    <>
      {/* <ParallaxProvider> */}
      {/* <CustomCursor /> */}
      <Navbar />
      <main className="flex flex-col whole-cont">
        <Hero id="home" />
        {/* <Intro id="intro" /> */}
        <About id="about" />
        <MissionVision />
        <CoreValues />
        <Experties id="services" />
        <CaseStudy />
        <Contact id="contact" />
        <Action />
        {/*
        <About id="about" />
        <WhatWeDo id="services" />
        <ContactUs id="contact-us" /> */}
      </main>
      <Footer />
      {/* </ParallaxProvider> */}
    </>
  );
};

export default Wrapper;
