import React from 'react';
import s from './ProductsCard.module.scss'
import { Product } from '../../types/AllProducts.type.ts';
type ProductsCardProps ={
  product: Product
}
export const ProductsCard: React.FC<ProductsCardProps> = ({product}) => {
  console.log(product);
  return <div className={s.main}>ProductsCard</div>
}