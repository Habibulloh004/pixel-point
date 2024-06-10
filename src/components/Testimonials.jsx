import Image from "next/image";
import React from "react";
import {
  testimonialIn1,
  testimonialIn2,
  testimonialUser1,
  testimonialUser2,
} from "../../public";
import Button from "./shared/Button";

const Testimonials = () => {
  return (
    <>
      <main id="whyDevoptima" className="testimonial scroll-mt-2 mt-32 h-screen">
        <div className="container w-8/12 mx-auto flex items-center justify-between h-screen">
          <article className="card flex flex-col items-start gap-4 relative w-[45%] translate-x-8">
            <Image
              src={testimonialIn1}
              className="w-32 absolute top-0 left-0 -translate-x-10 -translate-y-10"
              alt={`testimonialCard1`}
            />
            <p className="text-secondary-gray mt-16 ">
              Thanks to DevOptima, our team can focus more on{" "}
              <span className="text-white font-semibold">innovation</span> and less on
              operational challenges. Their{" "}
              <span className="text-white font-semibold">cloud management solutions</span> are
              top-notch.
            </p>
            <div className="user-section flex gap-3 items-center">
              <Image src={testimonialUser1} alt={`testimonialCard1`} />
              <span>
                <p className="text-white text-lg">John Smith</p>
                <p className="text-secondary-gray text-base">
                  IT Director at Reflex
                </p>
              </span>
            </div>
          </article>
          <article className="card flex flex-col items-start gap-4 relative w-[45%] ">
            <Image
              src={testimonialIn2}
              className="w-32 absolute top-0 left-0 -translate-x-10 -translate-y-10"
              alt={`testimonialCard1`}
            />
            <p className="text-secondary-gray mt-16">
              DevOptima has been a game-changer for us. With their support, we
              {"'"}ve shifted our focus{" "}
              <span className="text-white">
                from operational hurdles to pushing boundaries in innovation.
              </span>
            </p>
            <div className="user-section flex gap-3 items-center">
              <Image src={testimonialUser2} alt={`testimonialCard1`} />
              <span>
                <p className="text-white text-lg">John Smith</p>
                <p className="text-secondary-gray text-base">
                  IT Director at Reflex
                </p>
              </span>
            </div>
          </article>
        </div>
      </main>
      <main className="relative overflow-hidden h-[70vh] flex items-center">
        <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-indigo-950/60 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-indigo-950/60 rounded-full blur-[100px]" />
        <div className="container w-8/12 mx-auto text-center space-y-5">
          <h1 className="bg-text-gradient inline-block text-transparent bg-clip-text text-5xl leading-tight">
          Ready to elevate your DevOps strategy?
          </h1>
          <p className="text-secondary-gray w-3/4 mx-auto">Join the multitude of companies benefiting from optimized DevOps practices. Contact us to discover how DevOptima can help your business.</p>
          <div className="flex gap-5 items-center justify-center pt-3">
            <Button>Contact us</Button>
            <Button variant="border">Try for free</Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Testimonials;
