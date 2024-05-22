"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Burger, CloseNav } from "../../../public/images/rendered-icon";
import Link from "next/link";
import { NavItems } from "@/constants";

const NavItem = ({ item, isOpenNavbar, closeNavbar }: any) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerHeight <= 775);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  const handleClick = () => {
    closeNavbar(); // Close the navbar when a link is clicked
  };

  return (
    <Link
      href={item.url}
      className={`text-white leading-tight ${
        isOpenNavbar ? "opacity-1" : "opacity-0"
      } ${
        isSmallScreen ? "mt-7" : "mt-12"
      } transition-all duration-500 w-fit hover:text-lightBlue `}
      style={{ transitionDelay: `${item.delay}ms` }}
      onClick={handleClick}
    >
      <p className="uppercase font-light text-[12px]">{item.title}</p>
      <h1
        className={`${
          isSmallScreen ? "text-[38px]" : "text-[58px]"
        } uppercase font-bold leading-[48px]`}
      >
        {item.heading}
      </h1>
    </Link>
  );
};

const Navbar = () => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    "up"
  );

  const toggleNavbar = () => {
    setIsOpenNavbar(!isOpenNavbar);
  };

  const handleScroll = useCallback(() => {
    if (typeof window === "undefined") return;

    const currentScrollY = window.scrollY;

    if (currentScrollY >= 500 && lastScrollY < 500) {
      console.log("Reached 200px height");
    }

    if (currentScrollY < lastScrollY) {
      if (scrollDirection !== "up") {
        console.log("Scrolling up");
        setScrollDirection("up");
      }
    } else if (currentScrollY > lastScrollY) {
      if (scrollDirection !== "down") {
        console.log("Scrolling down");
        setScrollDirection("down");
      }
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY, scrollDirection]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <div
        className={`${
          typeof window !== "undefined" && window.scrollY >= 200
            ? "bg-brandBlack"
            : "bg-transparent"
        } ${
          scrollDirection === "up" ? "top-0" : "top-[-100%]"
        } flex transition-all duration-500 ease-in-out fixed left-0 w-full items-center justify-between py-5 px-[5%] z-[23]`}
      >
        <div className="flex gap-2 md:w-[200px] w-[100px]">
          <Image
            src="/images/logo-full.svg"
            alt="Logo"
            width={60}
            height={24}
            priority
            className="w-full"
          />
        </div>
        <Burger onClick={toggleNavbar} className="cursor-pointer" />
      </div>
      <div
        className={`bg-brandBlack ${
          isOpenNavbar ? "top-0" : "top-[-200%]"
        } h-[100%] w-full fixed transition-all duration-500 ease-in-out z-[30]`}
      >
        <div
          className={`${
            isOpenNavbar ? "opacity-1" : "opacity-0"
          } transition-opacity duration-500 flex items-center justify-between py-5 px-[5%]`}
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
              className="w-[65%]"
            />
          </div>
          <CloseNav onClick={toggleNavbar} className="cursor-pointer" />
        </div>
        {/* NAV ITEMS */}
        <div className="px-[5%] md:mt-7 mt-0 flex flex-col ">
          {NavItems.items.map((child, index) => (
            <NavItem
              key={index}
              item={child}
              isOpenNavbar={isOpenNavbar}
              closeNavbar={toggleNavbar}
            />
          ))}
        </div>
        {/* <div
          className={`fixed right-20 ${
            isOpenNavbar ? "bottom-10" : "top-[-200%]"
          }`}
        >
          <Image
            src="/images/navCopi.svg"
            alt="Logo"
            width={100}
            height={54}
            priority
            className={`w-[300px] delay-[700ms] transition-all duration-500 ${
              isOpenNavbar ? "opacity-1" : "opacity-0"
            }`}
          />
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
