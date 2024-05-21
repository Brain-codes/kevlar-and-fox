import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-brandBlack flex md:flex-row flex-col md:gap-0 gap-10 md:items-end justify-between py-10 px-[5%] w-full">
      <div className="">
        <Image
          src="/images/logo-full.svg"
          alt="logo"
          width={100}
          height={100}
          priority
          className="md:w-full w-[120px] object-contain"
        />
      </div>
      <div className="flex flex-col gap-10 w-[25%]">
        <Link
          href="#"
          className="uppercase font-[800] text-brandWhite text-[16px]"
        >
          Home
        </Link>{" "}
        <Link
          href="#"
          className="uppercase font-[800] text-brandWhite text-[16px]"
        >
          About us
        </Link>{" "}
        <Link
          href="#"
          className="uppercase font-[800] text-brandWhite text-[16px]"
        >
          services
        </Link>{" "}
        <Link
          href="#"
          className="uppercase font-[800] text-brandWhite text-[16px]"
        >
          blog
        </Link>{" "}
        <Link
          href="#"
          className="uppercase font-[800] text-brandWhite text-[16px]"
        >
          contact us
        </Link>{" "}
        <Link
          href="#"
          className="uppercase font-[800] text-brandWhite text-[16px]"
        >
          case studies
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <div className="">
          <Image
            src="/images/arrow-up.svg"
            alt="arrow"
            width={100}
            height={100}
            priority
            className="md:w-full w-[20px] object-contain"
          />
        </div>
        <p className="uppercase font-[800] text-brandWhite text-[20px] text-center leading-[22px]">
          back <br /> to top
        </p>
      </div>
    </div>
  );
};

export default Footer;