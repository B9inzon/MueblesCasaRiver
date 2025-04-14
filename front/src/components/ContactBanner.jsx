import React from "react";
import { WhatsappIcon } from "./icons/WhatsappIcon";

export default function ContactBanner() {
  return (
    <div className="flex w-full h-[350px] lg:h-[500px] justify-center items-center ">
      <div className="flex flex-col w-full   h-[30vh] p-4 lg:h-60 justify-center items-center ">
        <h1 className="text-[#3c3a36] font-secondary font-bold text-xl md:text-2xl lg:text-3xl mb-10">
          Cotiza tu próximo mueble favotiro
        </h1>
        <div className=" flex w-full  justify-center ">
          <a
            href="https://wa.link/icnysi"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center	bg-[#25d366] p-1 md:p-3 w-[300px] md:w-[350px] lg:w-[450px]  rounded-4xl gap-4  hover:scale-105 transition-all duration-600 ease-in-out "
            style={{ filter: "drop-shadow(10px 10px 6px #282624)" }}
          >
            <WhatsappIcon  />
            <h3 className="text-[#3c3a36] font-semibold text-xl md:text-2xl lg:text-3xl ">
              Contáctanos
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
}
