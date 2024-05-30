"use client";

import React from "react";
import About from "@/components/About";
import CoreValues from "@/components/CoreValues";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import MissionVision from "@/components/MissionVision";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { ParallaxProvider } from "react-scroll-parallax";
import CustomCursor from "@/lib/CustomCursor";
import useSmoothScroll from "@/lib/useSmoothScroll";
import Experties from "@/components/Experties";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";
import Action from "@/components/Action";
import Footer from "@/components/Footer";

const Wrapper = () => {

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
        <CaseStudy id="case-studies" />
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
