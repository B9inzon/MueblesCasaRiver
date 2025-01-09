import { productsArray } from '@/helpers/ProductsArray';
import React from 'react'
import ProductCard from './ProductCard';

const ProductsList = () => {
  return (
    <div  className= "grid grid-cols-3 min-h-screen pt-36  w-full items-center bg-[#f2f1e9]"
    id='Products'>
        {productsArray.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
  )
}

export default ProductsList


