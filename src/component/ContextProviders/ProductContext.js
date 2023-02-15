import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState();
  const [currentCategory, setCurrentCategory] = useState("all");
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
