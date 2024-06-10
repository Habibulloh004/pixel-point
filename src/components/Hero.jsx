import React from "react";
import Image from "next/image";
import { HeroBg, HeroImg } from "../../public";
import FreeTrial from "./shared/FreeTrial";

const Hero = () => {
  return (
    <main id="hero" className="hero h-screen relative">
      {/* <Image src={HeroBg} className="absolute w-full h-full -z-10" alt="heroBg" priority /> */}
      <div className="absolute w-[800px] aspect-square rounded-full bg-blured/30 blur-[100px] z-10 top-0 left-0 -translate-x-[50%] -translate-y-[50%]" />
      <div className="w-[95%] mx-auto h-screen flex items-center pt-16">
        <article className="w-1/2 space-y-7">
          <h1 className="bg-gradient-to-r from-[#6D9CF6] from-10% to-[#FFFFFF] inline-block text-transparent bg-clip-text text-7xl leading-tight">
            Revolutionize your DevOps journey with DevOptima
          </h1>
          <p className="text-secondary-gray text-lg">
            Empower teams to innovate faster through streamlined development,
            efficient automated workflows, and reliable scaling.
          </p>
          <FreeTrial />
        </article>
        <article className="w-1/2 flex items-center justify-end relative">
          <Image src={HeroImg} alt="heroImg" priority />
          <div className="absolute w-[716px] h-[396px] aspect-square rounded-full bg-blured/30 blur-[100px] -z-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] "></div>
        </article>
      </div>
    </main>
  );
};

export default Hero;
