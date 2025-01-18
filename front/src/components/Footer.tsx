import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col h-[30vh] lg:h-[20vh] items-center ">
      <div className="flex flex-col lg:flex-row h-4/5 items-center lg:items-center gap-4 lg:justify-center w-full lg:w-11/12 border-t-2 pt-5 lg:pt-14">
        <p className="w-full lg:w-2/12 text-lg text-center lg:text-start text-[#233c3c] ">
          &copy; {new Date().getFullYear()} Muebles Casa River
        </p>
        <Link href="/TyC" className="w-full lg:w-2/12 text-lg text-center lg:text-start">
          <p className="w-full text-[#233c3c] ">
            Terminos y condiciones
          </p>
        </Link>
        <p className="text-xl lg:text-3xl w-[90%] lg:w-4/12 text-[#233c3c] font-tenor font-normal text-center lg:pl-10  ">
          Ponte en contacto con nosotros y cotiza tu próximo mueble favorito.
        </p>
      </div>
    </div>
  );
};

export default Footer;
