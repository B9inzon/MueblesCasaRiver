"use client";
import React, { useEffect, useState } from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import BurguerMenu from "./BurguerMenu";

export const Navigation = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`flex flex-row w-full h-20 lg:h-32 px-6 py-4 md:py-6 lg:py-8 items-center justify-between fixed top-0 left-0 right-0 z-50 bg-black  bg-opacity-20 backdrop-blur-md text-[#3C3A36] transition duration-700 ${showNavbar ? "translate-y-0 " : "-translate-y-full opacity-0" } `}>
      <Link href="/">
        <Logo />
      </Link>
      <nav className="">
        <ul className="hidden lg:flex flex-row gap-10 text-lg font-medium">
          <li>
            <a href="/landing">Inicio</a>
          </li>
          <li>
            <a href="/products">Catálogo</a>
          </li>
          <li>
            <a href="/contact">Contacto</a>
          </li>
          <li>
            <a href="/about">Acerca de nosotros</a>
          </li>
        </ul>
        <div className="lg:hidden">
          <BurguerMenu />
        </div>
      </nav>
    </div>
  );
};
