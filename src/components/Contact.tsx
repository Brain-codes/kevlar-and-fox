/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";
type AboutProps = {
  id: string;
};
const Contact = ({ id }: AboutProps) => {
  return (
    <section id={id} className="bg-brandWhite py-[7%] px-[5%]">
      {" "}
      <h1 className="font-[800] text-brandBlack md:text-[73px] text-[40px] uppercase leading-tight">
        READY TO EMBARK
      </h1>
      <h1 className="font-[800] text-brandBlack md:text-[73px] text-[40px] uppercase leading-tight">
        ON A JOURNEY <span className="text-lightBlue">?</span>
      </h1>
      <div className="flex md:flex-row flex-col md:items-center item-start md:gap-0 gap-10 justify-between w-full">
        <p className=" text-[19px] text-brandBlack font-[300] md:w-[30%] w-full leading-tight">
          Reach out to{" "}
          <span className="font-bold">Kevlar & Fox Consulting</span> today and
          let's make your business dreams a reality
        </p>
        <Link href="mailto:info@kevlarandfox.com" className="relative">
          <div className="rounded relative border border-brandBlack py-2 z-[2] px-10 text-brandBlack font-light w-fit text-[17px] bg-brandBlack/10 backdrop-blur-sm">
            Talk to Us
          </div>
          <div
            className="absolute top-[-5px] left-[-5px] rounded border border-brandBlack py-2 px-10 text-transparent font-light text-[17px] bg-brandBlack/10 backdrop-blur-sm"
            style={{
              zIndex: "1",
            }}
          >
            Talk to Us
          </div>
        </Link>
      </div>
      <div className="md:mt-[8%]  mt-[80px] flex md:flex-row flex-col md:gap-0 gap-10 justify-between items-center">
        <div className="md:w-25% w-full">
          <div>
            <Image
              src="/images/arrow-right.svg"
              alt="arrow"
              width={100}
              height={100}
              // priority
              className=" object-contain"
            />
          </div>
        </div>
        <div className="md:w-25% w-full">
          <h2 className="font-[700] text-brandBlack text-[19px] mb-5">
            SOCIALS
          </h2>
          <div className="flex gap-5">
            <SocialsItem href="ig.com" value="IG" />
            <SocialsItem href="ig.com" value="LI" />
            <SocialsItem href="ig.com" value="TK" />
          </div>
        </div>
        <div className="flex flex-col md:w-25% w-full">
          <h2 className="font-[700] text-brandBlack text-[19px] mb-5">
            CONTACTS
          </h2>
          <a
            href="mailto:info@kevlarandfox.com"
            className=" text-[19px] text-brandBlack font-[300] w-full leading-tight"
          >
            info@kevlarandfox.com
          </a>
          <a
            href="tel:2349121872425"
            className=" text-[19px] font-[400] text-brandBlack font-[300] w-full leading-tight"
          >
            234-912-187-2425
          </a>
        </div>{" "}
        <div className="md:w-25% w-full">
          <h2 className="font-[700] text-brandBlack text-[19px] mb-5">
            LOCATION
          </h2>
          <p className=" text-[19px] text-brandBlack font-[300]  w-full leading-tight font-[400]">
            447 Broadway, 2nd Floor #1125 New York, NY 10013 United States
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

export const SocialsItem = ({
  value,
  href,
}: {
  value: string;
  href: string;
}) => {
  return (
    <a className="relative" href={href}>
      <div className="rounded relative border border-brandBlack py-2 z-[2] px-4 text-brandBlack font-bold text-[17px] bg-brandBlack/10 backdrop-blur-sm">
        {value}
      </div>
      <div
        className="absolute top-[-5px] left-[-5px] rounded border border-brandBlack py-2 px-4 text-transparent font-light text-[17px] bg-brandBlack/10 backdrop-blur-sm"
        style={{
          zIndex: "1",
        }}
      >
        {value}
      </div>
    </a>
  );
};
