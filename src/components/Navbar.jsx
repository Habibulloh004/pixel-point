"use client";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Logo } from "../../public";
import Link from "next/link";
import { navItems } from "@/utils";
import Button from "./shared/Button";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [updateNavbar, setUpdateNavbar] = useState(false);
  const [screenSize, setScreenSize] = useState(1550);
  function scrollHandler() {
    if (window.scrollY >= 20) {
      setUpdateNavbar(true);
    } else {
      setUpdateNavbar(false);
    }
  }

  function resizeHandler() {
    setScreenSize(window.innerWidth);
  }

  useLayoutEffect(() => {
    setScreenSize(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", scrollHandler);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all ${
        updateNavbar && "backdrop-blur"
      }`}
    >
      <nav className="w-[95%] py-3 mx-auto flex justify-between items-center">
        <Link prefetch={false} href={"#hero"}>
          <Image src={Logo} alt="logo" />
        </Link>
        {screenSize < 1536 ? (
          <FaBars className="text-2xl"/>
        ) : (
          <>
            <ul className="flex items-center -translate-x-8 text-secondary-gray">
              {navItems.map((item, idx) => (
                <li key={item.id} className="cursor-pointer w-[130px]">
                  <Link
                    prefetch={false}
                    href={item.path}
                    className="hover:font-semibold hover:text-white transition-all"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Button variant="border">Get started</Button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
