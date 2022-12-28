import { createContext, useState } from 'react';

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
  currentProductList: [],
});

export const ProductsProvider = ({ children }) => {
  const [currentProductList, setCurrentProductList] = useState(PRODUCTS);
  const value = { currentProductList };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
