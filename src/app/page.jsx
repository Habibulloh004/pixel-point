"use client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const About = dynamic(() => import("@/components/About"));
const Solutions = dynamic(() => import("@/components/Solutions"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));

export default function Home() {
  const [screenSize, setScreenSize] = useState(1550);

  function resizeHandler() {
    setScreenSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  return (
    <main className="">
      {screenSize < 1536 ? (
        <>
          <main className="w-9/12 mx-auto h-screen flex justify-center items-center flex-col text-center gap-5">
            <h1 className="text-3xl font-semibold">Hey! 👋</h1>
            <p className="text-secondary-gray text-base">
              This task is designed for a screen width of{" "}
              <span className="text-blue-500">1536px or greater</span>. Please focus your evaluation and
              testing on this resolution. The assessment of mobile or smaller
              screen designs is not required at this stage, and we encourage you
              to concentrate on the larger screen format.
            </p>
            <p className="text-lg font-semibold">Thank you and good luck! 🍀</p>
          </main>
        </>
      ) : (
        <>
          <Hero />
          <About />
          <Solutions />
          <Testimonials />
          <Footer />
        </>
      )}
    </main>
  );
}
