import { IProduct } from "@/Interfaces/IProduct";

const ProductCard: React.FC<IProduct> = ({name, image, description}) => {
    return (
        <div className="w-fit h-auto lg:h-[400px] flex flex-col items-center justify-center border  hover:cursor-pointer shadow-none hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] transition ease-in-out duration-700 ">
        <img className="w-full h-auto" src={image} alt={name} />
        <div className="flex flex-col w-full h-full p-4 items-start">
          <p className="text-lg font-semibold">{name}</p>
          <span className="">{`${description}`}</span>
        </div>
      </div>
    )
}

export default ProductCard;
