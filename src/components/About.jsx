import Image from "next/image";
import React from "react";
import { AboutSection, aboutIn1, aboutOut } from "../../public";
import { aboutItems } from "@/utils";

const About = () => {
  return (
    <main id="about" className="scroll-mt-28">
      <div className="w-10/12 mx-auto flex justify-between -translate-x-24 gap-5">
        <article className="w-1/2 relative">
          <div className="absolute -right-10 -top-10 w-[300px] h-[300px] bg-blured/30 rounded-full blur-[100px]" />
          <Image src={AboutSection} alt="aboutImage" />
        </article>
        <article className="w-[45%] space-y-5">
          <h1 className="text-4xl mt-10">What is DevOptima?</h1>
          <p className="text-secondary-gray text-lg">
            At DevOptima, we are a team of passionate DevOps experts committed
            to transforming the way businesses approach software development and
            operations.
          </p>
          <section className="grid grid-cols-2 place-items-start gap-5 pt-5">
            {aboutItems.map((item, idx) => (
              <div key={item.id} className="card flex flex-col items-start gap-4">
                <div className="card-head w-6 h-6 relative inline-block ml-1">
                  <div className="w-full h-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute opacity-80 bg-blue-700 rounded-full blur-xl" />
                  <div className="icon-container absolute w-full h-full">
                    <div className="w-[150%] h-[150%] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gradient-radial from-blue-900/50 to-blue-900/30 rounded-[9.25px] shadow border border-blue-400/30" />
                    <Image
                      className="absolute w-full h-full z-40"
                      src={item.icon}
                      alt={`aboutItemCard${idx}`}
                    />
                  </div>
                </div>
                <div className="card-body">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </section>
        </article>
      </div>
    </main>
  );
};

export default About;
