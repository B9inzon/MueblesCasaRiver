import { IProduct } from "@/Interfaces/IProduct";
import Contact from "./WhatsApp";

const ProductCard: React.FC<IProduct> = ({ name, image, description }) => {
  return (
    <div className="group relative w-fit h-auto lg:h-[400px] flex flex-col items-center justify-center border  hover:cursor-pointer shadow-none hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] transition ease-in-out duration-700 ">
      <img className="w-full h-auto" src={image} alt={name} />
      <div className="flex flex-row w-full h-full items-center justify-around">
        <div className="">
          <h2 className="text-lg font-semibold">{name}</h2>
          <h4 className="">{`${description}`}</h4>
        </div>
        <div className="opacity-0 invisible transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:-translate-x-6">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
