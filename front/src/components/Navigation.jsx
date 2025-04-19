"use client";
import React, { useEffect, useState } from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import BurguerMenu from "./BurguerMenu";

export const Navigation = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setShowNavbar(true);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
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
  }, [lastScrollY, isMenuOpen]);

  const handleMenuToggle = (newState) => {
    setIsMenuOpen(newState);
  };

  return (
    <div
      className={`flex flex-row w-full h-20 lg:h-32 px-6 py-4 md:py-6 lg:py-8 items-center justify-between fixed top-0 left-0 right-0 z-50 bg-[#463c2d]/30 backdrop-blur-lg text-[#3C3A36] transition duration-700 ${
        showNavbar ? "translate-y-0 " : "-translate-y-full "
      } `}
    >
      <Link href="/">
        <Logo />
      </Link>
      <nav className="">
        <ul className="hidden lg:flex flex-row gap-10 text-lg font-medium">
          <li>
            <a href="/">Inicio</a>
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
          <BurguerMenu isOpen={isMenuOpen} onToggle={handleMenuToggle} />
        </div>
      </nav>
    </div>
  );
};
