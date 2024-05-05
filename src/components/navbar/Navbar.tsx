"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between bg-white py-5 px-[5%] ">
        <Image
          src="/images/logo-full.svg"
          alt="Logo"
          width={100}
          height={24}
          priority
          className="mix-blend-difference"
        />
        <div
          className="flex flex-col gap-1 bg-black w-[40px] h-[40px] flex items-center justify-center rounded-full p-2 cursor-pointer"
          onClick={() => {
            setIsOpenNavbar(!isOpenNavbar);
          }}
        >
          <div className="w-full h-[2px] bg-white"></div>
          <div className="w-full h-[2px] bg-white"></div>
          <div className="w-full h-[2px] bg-white"></div>
        </div>
      </div>
      <div
        className={`bg-brandBlack ${
          isOpenNavbar ? " top-[0%] " : "top-[-100%] "
        } h-[100%]  w-full fixed transition-all duration-300 ease-in-out`}
      >
        <div
          className="flex flex-col gap-1 bg-black w-[40px] h-[40px] flex items-center justify-center rounded-full p-2 cursor-pointer"
          onClick={() => {
            setIsOpenNavbar(!isOpenNavbar);
          }}
        >
          <div className="w-full h-[2px] bg-white rotate-[-45deg]"></div>
          <div className="w-full h-[2px] bg-white rotate-45"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
