"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Burger, CloseNav } from "../../../public/images/rendered-icon";
import Link from "next/link";
import { NavItems } from "@/constants";

const NavItem = ({ item, isOpenNavbar, closeNavbar }: any) => {
  const handleClick = () => {
    closeNavbar(); // Close the navbar when a link is clicked
  };
  return (
    <Link
      href={item.url}
      className={`text-white leading-tight ${
        isOpenNavbar ? "opacity-1" : "opacity-0"
      } transition-all duration-500 w-fit hover:text-lightBlue`}
      style={{ transitionDelay: `${item.delay}ms` }}
      onClick={handleClick}
    >
      <p className="uppercase font-light text-[12px]">{item.title}</p>
      <h1 className="uppercase font-bold text-[58px] leading-[48px]">
        {item.heading}
      </h1>{" "}
    </Link>
  );
};

const Navbar = () => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const toggleNavbar = () => {
    setIsOpenNavbar(!isOpenNavbar);
  };
  return (
    <>
      <div className="flex bg-transparent fixed top-0 left-0 w-full items-center justify-between py-5 px-[5%] z-[23]">
        <div className="flex gap-2 w-[200px] ">
          <Image
            src="/images/logo-one.svg"
            alt="Logo"
            width={60}
            height={24}
            priority
            className=""
          />
          <Image
            src="/images/logo-two.svg"
            alt="Logo"
            width={100}
            height={44}
            priority
            className="mix-blend-difference  w-[65%]"
          />
        </div>
        <Burger onClick={toggleNavbar} className="cursor-pointer" />
      </div>
      <div
        className={`bg-brandBlack ${
          isOpenNavbar ? " top-[0%] " : "top-[-100%] "
        } h-[100%]  w-full fixed transition-all duration-500 ease-in-out z-[30]`}
      >
        <div
          className={` ${
            isOpenNavbar ? "opacity-1" : "opacity-0"
          }   transition-opacity duration-500 flex items-center justify-between py-5 px-[5%] `}
        >
          <div className="flex gap-2 w-[200px]">
            <Image
              src="/images/logo-one.svg"
              alt="Logo"
              width={60}
              height={24}
              priority
              className=""
            />
            <Image
              src="/images/logo-two.svg"
              alt="Logo"
              width={100}
              height={44}
              priority
              className="mix-blend-difference  w-[65%]"
            />
          </div>
          <CloseNav onClick={toggleNavbar} className="cursor-pointer" />
        </div>
        {/* NAV ITEMS */}
        <div className="px-[5%] mt-20 flex flex-col gap-12">
          {NavItems.items.map((child, index) => (
            <NavItem
              key={index}
              item={child}
              isOpenNavbar={isOpenNavbar}
              closeNavbar={toggleNavbar}
            />
          ))}
        </div>
        <div
          className={`fixed right-20 ${
            isOpenNavbar ? " bottom-10" : " top-[-200%]"
          }  `}
        >
          <Image
            src="/images/navCopi.svg"
            alt="Logo"
            width={100}
            height={54}
            priority
            className={`w-[300px] delay-[700ms] transition-all duration-500 ${
              isOpenNavbar ? "opacity-1" : "opacity-0"
            } `}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
