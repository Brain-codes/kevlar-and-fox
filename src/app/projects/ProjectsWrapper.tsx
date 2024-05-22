"use client";
import CaseStudy from "@/components/landing-page/CaseStudy";
import Footer from "@/components/landing-page/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const ProjectsWrapper = () => {
  return (
    <>
      {/* <ParallaxProvider> */}
      {/* <CustomCursor /> */}
      <Navbar />
      <main className="flex flex-col whole-cont">
        <CaseStudy id="case-studies" />
      </main>
      <Footer />
      {/* </ParallaxProvider> */}
    </>
  );
};

export default ProjectsWrapper;
