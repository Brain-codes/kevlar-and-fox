"use client";
import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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
