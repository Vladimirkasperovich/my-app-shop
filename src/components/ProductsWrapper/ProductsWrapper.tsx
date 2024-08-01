

import { useGetAllProductsQuery } from '../../services/fakeStoreApi/fakeStore.api.ts';
import s from './ProductsWrapper.module.scss'
import { ProductsList } from '../ProductsList/ProductsList.tsx';

export const ProductsWrapper = () => {
  const { data } = useGetAllProductsQuery();
  const allProducts = data ?? []
  return (
    <div className={s.main}>
     <ProductsList products={allProducts}/>
    </div>
  );
};
