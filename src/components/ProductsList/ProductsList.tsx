import React from 'react';
import { Product } from '../../types/AllProducts.type.ts';
import s from './ProductsList.module.scss';
import { ProductsCard } from '../ProductsCard/ProductsCard.tsx';


type ProductsListProps = {
  products: Product[];
}
export const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <div className={s.main}>
      {
        products.map(product => <ProductsCard key={product.id} product={product}/>)
      }
    </div>
  );
};
