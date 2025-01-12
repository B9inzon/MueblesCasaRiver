import { productsArray } from '@/helpers/ProductsArray';
import React from 'react'
import ProductCard from './ProductCard';

const ProductsList = () => {
  return (
    <div  className= "min-h-screen grid lg:grid-cols-4 gap-4 pt-40 px-5 w-full justify-items-center bg-[#f8f8fb]  "
    id='Products'>
        {productsArray.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
  )
}

export default ProductsList


