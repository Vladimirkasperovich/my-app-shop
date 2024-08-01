import { baseApi } from '../baseApi/baseApi.ts';
import { Product } from '../../types/AllProducts.type.ts';

const fakeStoreApi = baseApi.injectEndpoints({
  endpoints: build => {
    return {
      getAllProducts: build.query<Product[], void>({
        query: () => ({
          url: '/products',
          method: 'GET',
        })
      }),
    };
  },
});
export const { useGetAllProductsQuery } = fakeStoreApi;