"use client";

import Link from "next/link";
import React from "react";
import BurguerMenu from "./BurguerMenu";
import Logotipo from "./Logotipo";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  const isTyCPage = pathname === "/TyC";

  return (
    <nav
      className="flex items-center justify-between h-36 px-10  lg:px-36 fixed top-0 left-0 right-0 z-50  bg-[#26230d]"
      id="navigation"
    >
      <div className="flex items-center">
        <Link href="/">
          <Logotipo />
        </Link>
      </div>
      <ul className="hidden font-normal font-roboto lg:flex lg:items-center space-x-10 text-xl text-[#e5a773]">
        <li>
          <Link href="/">Inicio</Link>
        </li>
        {!isTyCPage && (
          <>
            <li>
              <a href="#Salas">Salas</a>
            </li>
            <li>
              <a href="#Sillas">Sillas</a>
            </li>
            <li>
              <a href="#Comedores">Comedores</a>
            </li>
            <li>
              <a href="#Contact">Contáctanos</a>
            </li>
          </>
        )}
      </ul>
      <div className="lg:hidden">
        <BurguerMenu />
      </div>
    </nav>
  );
};

export default Navigation;
