import Link from "next/link";
import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

const MainHome = () => {
  return (
    <section
      id="Main"
      className="flex flex-col min-h-screen  w-full items-center justify-start pt-36 "
    >
      <div className="relative flex flex-col mb-20 py-36 w-full items-center justify-center bg-[url('/assets/hero_.webp')] bg-cover bg-bottom ">
      <div className="absolute inset-0 bg-black/70 "></div>
        <h1 className="text-[#ffba80] font-normal font-tenor text-5xl mb-6 md:text-7xl md:mb-8  lg:text-8xl lg:mb-10 relative z-10">
          Muebles Casa River
        </h1>
        <p
          className="text-[#c6c0e0] w-full p-4 lg:w-[50%] font-normal text-lg text-center md:text-lg  lg:text-2xl relative z-10"
        >
          Conoce nuestra amplia variedad de muebles para tu hogar, diseñados con
          los mejores materiales, para que puedas disfrutar de un ambiente
          acogedor y elegante.
        </p>
      </div>
      <Link href='#Products' >
      <button className="flex flex-row px-6 h-14 w-auto gap-2 text-base lg:text-2xl font-semibold items-center justify-center text-[#ffba80] shadow-lg  shadow-[#59521e] bg-[#8c8341] hover:bg-[#736a27] rounded-xl transition ease-in-out duration-300">
        Ver productos{" "}
        {
          <AiOutlineArrowDown
          size={32}
          color="#ffba80"
          strokeWidth={4}
          className="p-0 m-0"
          />
        }
      </button>
        </Link>
    </section>
  );
};

export default MainHome;
