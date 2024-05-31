/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Underline } from "../../public/images/rendered-icon";
import Image from "next/image";

type AboutProps = {
  id: string;
};

const About = ({ id }: AboutProps) => {
  return (
    <section id={id} className="bg-brandWhite py-20 relative">
      <div className="pl-[5%] relative">
        <h1 className="text-deepBlue font-extrabold md:text-[68px] text-[40px] ">
          About Us
        </h1>
        <Underline className="text-brandBlack absolute bottom-[-50%] ml-10 md:block hidden" />
      </div>
      <div className="px-[5%] py-[10%] flex justify-between md:flex-row flex-col items-centermd:gap-0 gap-10">
        <div className="md:w-[40%] w-full  text-brandBlack font-[400] md:text-[20px] text-[12px] text-justify flex flex-col md:gap-20 gap-10 leading-[33.8px]">
          <p className="">
            Our goal is simple yet profound: to empower businesses with
            innovative solutions that drive success. We specialize in
            revolutionizing brand visibility and market presence through our
            comprehensive suite of services in Public Relations, Digital
            Transformation, and Training.
          </p>
          <p className="">
            We understand that many organizations struggle to navigate the
            complexities of modern marketing and digitalization, often resulting
            in missed opportunities and stagnant growth. That's where we come
            in. Our seasoned team of experts collaborate closely with clients to
            develop tailored solutions that produce tangible results.
          </p>
          <p className="">
            Whether it's crafting compelling PR campaigns to enhance individual
            and organizational reputations, implementing cutting-edge digital
            technologies to optimize operations and customer experiences, or
            delivering customized training programs to upskill teams for success
            in the digital age, we're committed to empowering businesses to
            thrive in today's competitive landscape.
          </p>
        </div>

        <div className="relative md:w-[40%] w-full">
          <Image
            src="/images/about-img.png"
            alt="logo"
            width={100}
            height={100}
            // priority
            className="w-full object-contain  "
          />
          {/* <div className="bottom-[-10%] right-[-5%] absolute">
            <div className="bg-lightBlue w-[240px] py-6 px-[20px] rounded-lg">
              <Image
                src="/images/quote.svg"
                alt="quote"
                width={100}
                height={100}
                // priority
                className="w-[17px] object-contain absolute top-5 left-5 "
              />
              <p className="ml-5 mb-5 mt-4 text-[300] ">
                Bespoke Solutions for Complex Challenges
              </p>
              <Image
                src="/images/quote.svg"
                alt="quote"
                width={100}
                height={100}
                // priority
                className="w-[17px] object-contain absolute bottom-5 right-5 "
              />
            </div>
          </div> */}
        </div>
      </div>
      <div className="absolute w-full top-0 z-[1]">
        <Image
          src="/images/logo-bold.svg"
          alt="logo"
          width={100}
          height={100}
          // priority
          className="w-1/3 object-contain"
        />
      </div>
    </section>
  );
};

export default About;
