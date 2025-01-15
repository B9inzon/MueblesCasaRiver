import { productsArray } from '@/helpers/ProductsArray';
import React from 'react'
import ProductCard from './ProductCard';

const ProductsList = () => {
  return (
    <div  className= "min-h-screen w-11/12 grid lg:grid-cols-4 gap-3 pt-40 pb-32 px-5 justify-items-center bg-[#f8f8fb]  "
    id='Products'>
        {productsArray.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
  )
}

export default ProductsList


