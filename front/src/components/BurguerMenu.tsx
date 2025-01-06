"use client";

import { Menu } from "lucide-react";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";

const BurguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const switchMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Menu size={32} color="#19120c" strokeWidth={2} className="lg:hidden" onClick={switchMenu} />
      <div
        className={`fixed top-0 right-0 min-h-screen w-1/2 bg-gradient-to-b from-[#80762c] to-[#191708] shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        <div className="flex justify-end p-4">
          <CgClose
            size={32}
            color="#cc9466"
            strokeWidth={2}
            onClick={switchMenu}
          />
        </div>
        <ul className=" flex h-full flex-col font-medium items-center space-y-6 text-xl mt-10 text-[#cc9466] transition ">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="Salas">Salas</a>
          </li>
          <li>
            <a href="Salas">Sillas</a>
          </li>
          <li>
            <a href="Salas">Comedores</a>
          </li>
          <li>
            <a href="#Contact">Contáctanos</a>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed h-screen inset-0 bg-[#19120c] opacity-80 lg:hidden z-40"
          onClick={switchMenu}
        ></div>
      )}
    </div>
  );
};

export default BurguerMenu;