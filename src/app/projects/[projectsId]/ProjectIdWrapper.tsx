/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useRouter } from "next/navigation";
import { CaseStudyItems } from "@/constants";
import { CaseStudyItemProp, Impact, KeyIssue, Step } from "@/types";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const ProjectIdWrapper = ({ params }: { params: { projectsId: number } }) => {
  const router = useRouter();
  const [projectDetails, setProjectDetails] =
    useState<CaseStudyItemProp | null>(null);

  useEffect(() => {
    // Check if we're running in the browser and if params is defined
    if (typeof window !== "undefined" && params) {
      const projectId = Number(params.projectsId);
      if (
        isNaN(projectId) ||
        projectId > CaseStudyItems.items.length ||
        projectId < 1
      ) {
        router.push("/404");
      } else {
        setProjectDetails(CaseStudyItems.items[projectId - 1]);
      }
    }
  }, [params, router]);

  if (!projectDetails) {
    return (
      <div className="bg-brandBlack h-[100vh] flex items-center justify-center text-brandWhite">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-brandBlack py-20 px-[5%]">
      <div className="flex w-full items-center justify-end">
        <div
          onClick={() => {
            router.back();
          }}
          className="w-fit"
        >
          <Image
            src="/images/arrow-back.svg"
            alt="logo"
            width={100}
            height={100}
            priority
            className="w-[40px]"
          />{" "}
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:gap-0 gap-10 justify-between mt-20">
        <div className="md:w-[45%] w-full">
          <p className="font-[400] text-white md:text-[20px] text-[12px]">
            Case Study
          </p>
          <h1 className="font-bold text-white md:text-[73px] sm:text-[25px] text-[40px] uppercase md:leading-[73px]">
            {projectDetails.title}
          </h1>
          <p className="font-[700] text-lightBlue md:text-[30px] text-[18px] md:leading-[30px]">
            {projectDetails.subtitle}
          </p>
        </div>
        <div>
          <Image
            src={projectDetails.image}
            alt="hero"
            width={100}
            height={100}
            priority
            className="w-full object-contain"
          />
        </div>
      </div>
      <div className="md:w-[55%] md:mt-0 mt-20 w-full">
        <h1 className="font-bold text-white md:text-[48px] sm:text-[25px] text-[40px] uppercase leading-[73px]">
          INTRO
        </h1>
        <p className="py-10 border-l border-brandWhite font-[300] text-brandWhite md:text-[16px] text-[12px] pl-10 ml-10 mt-10">
          {projectDetails.intro}
        </p>
      </div>
      {/* ================================= */}

      <div className="w-full  mt-20 md:pl-[40%] pl-0">
        <h1 className="font-bold text-white md:text-[48px] sm:text-[25px] text-[40px] uppercase leading-[73px]">
          KEY ISSUES
        </h1>
        <div className="py-10  ml-10 mt-10 ">
          <div className="flex flex-col gap-20">
            {projectDetails.key_issues.map((data: KeyIssue, index) => {
              return (
                <div key={index} className="flex gap-10">
                  <div>
                    <Image
                      src="/images/keypoint.svg"
                      alt="hero"
                      width={100}
                      height={100}
                      priority
                      className="w-[43.13px] object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-10">
                    <h1 className="font-[700] text-lightBlue md:text-[30px] text-[18px] leading-[30px]">
                      {data.issue}
                    </h1>
                    <p className="md:w-[80%] w-full font-[300] text-brandWhite md:text-[16px] text-[12px]  ">
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* ================================= */}
      <div className="md:w-[55%] w-full mt-20 md:pt-20">
        <h1 className="font-bold text-white md:text-[48px] sm:text-[25px] text-[40px] uppercase leading-[73px]">
          {projectDetails.approach.heading}
        </h1>
        <p className="py-10 border-l border-brandWhite font-[300] text-brandWhite md:text-[16px] text-[12px] pl-10 ml-10 mt-10">
          {projectDetails.approach.description}
        </p>
      </div>
      <div className="py-10  md:ml-[150px] ml-0 mt-10 md:w-[55%] w-full ">
        <div className="flex flex-col gap-20 ">
          {projectDetails.approach.steps.map((data: Step, index) => {
            return (
              <div key={index} className="flex gap-10">
                <div>
                  <Image
                    src="/images/keypoint.svg"
                    alt="hero"
                    width={100}
                    height={100}
                    priority
                    className="w-[43.13px] object-contain"
                  />
                </div>
                <div className="flex flex-col gap-10">
                  <h1 className="font-[700] text-lightBlue md:text-[30px] text-[18px] leading-[30px]">
                    {data.step}
                  </h1>
                  <p className="md:w-[80%] w-full font-[300] text-brandWhite md:text-[16px] text-[12px]  ">
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* ================================= */}

      <div className="w-full  mt-20 md:pt-20 md:pl-[40%] pl-0">
        <h1 className="font-bold text-white md:text-[48px] sm:text-[25px] text-[40px] uppercase leading-[73px]">
          IMPACT
        </h1>
        <div className="py-10  ml-10 mt-10 ">
          <div className="flex flex-col gap-20">
            {projectDetails.impact.map((data: Impact, index) => {
              return (
                <div key={index} className="flex gap-10">
                  <div>
                    <Image
                      src="/images/keypoint.svg"
                      alt="hero"
                      width={100}
                      height={100}
                      priority
                      className="w-[43.13px] object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-10">
                    <h1 className="font-[700] text-lightBlue md:text-[30px] text-[18px] leading-[30px]">
                      {data.outcome}
                    </h1>
                    <p className="md:w-[80%] w-full font-[300] text-brandWhite md:text-[16px] text-[12px]  ">
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* ================================= */}

      <div className="md:w-[55%] w-full mt-20 md:pt-20">
        <h1 className="font-[1000] text-brandWhite md:text-[98px] sm:text-[25px] text-[40px] uppercase leading-[73px]">
          CONCLUSION
        </h1>
        <p className="py-10 border-l border-brandWhite font-[300] text-brandWhite md:text-[16px] text-[12px] pl-10 ml-10 mt-20">
          {projectDetails.conclusion}
        </p>
      </div>
    </div>
  );
};

export default ProjectIdWrapper;
