import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <Link href="https://wa.link/0nego0" target="_blank">
      <div className="group inline-flex items-center justify-center rounded-full p-2 transition-all ease-in-out duration-500 hover:bg-[#25d366]">
        <BsWhatsapp
          size={40}
          strokeWidth={0.1}
          className='text-[#25d366] transition-all duration-500 ease-in-out hover:text-white'
        />
      </div>
    </Link>
  );
};

export default Contact;
