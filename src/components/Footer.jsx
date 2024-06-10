// "use client";
import Image from "next/image";
// import React, { useState, useEffect } from "react";
import { FooterLogo } from "../../public";
import { footerItems } from "@/utils";

const Footer = () => {
  // const [screenSize, setScreenSize] = useState("");

  // function resizeHandler() {
  //   setScreenSize(window.innerWidth);
  // }

  // useEffect(() => {
  //   window.addEventListener("resize", resizeHandler);
  //   return () => {
  //     window.removeEventListener("resize", resizeHandler);
  //   };
  // }, []);
  return (
    <footer className="border-t border-gray-800">
      <div className="w-[95%] mx-auto flex justify-between items-center py-8">
        <div className="flex flex-col justify-between items-start h-36">
          <Image src={FooterLogo} className="cursor-pointer" alt="footerLogo" />
          <p className="text-secondary-gray text-sm">
            Devoptima 2023 © All rights reserved
          </p>
        </div>
        <ul className="flex justify-between items-start w-[40%] mt-4">
          {footerItems.map((item) => (
            <li
              key={item.id}
              className="text-secondary-gray text-sm flex flex-col gap-3 min-w-28"
            >
              <span className="text-white font-semibold">{item.title}</span>
              {item.items.map((i, idx) => {
                const findCommunity = item.title == "Community";
                return findCommunity ? (
                  <span
                    key={idx}
                    className="flex gap-3 items-center hover:text-white hover:font-semibold transition-all cursor-pointer w-full"
                  >
                    {/* <Image src={i.icon} alt="footerIcons" /> */}
                    <p className="text-lg">{i.icon()}</p>
                    <p>{i.title}</p>
                  </span>
                ) : (
                  <span
                    key={idx}
                    className="hover:text-white transition-all cursor-pointer"
                  >
                    {i}
                  </span>
                );
              })}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
