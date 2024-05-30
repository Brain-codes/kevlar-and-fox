"use client";

import React, { useEffect, useState } from "react";
import Footer from "./Footer";

import Navbar from "./Navbar";
import Preloader from "./Preloader";
import useSmoothScroll from "@/lib/useSmoothScroll";

const LoaderLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  useSmoothScroll();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      {isLoading ? (
        <>
          <Preloader />
        </>
      ) : (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default LoaderLayout;
