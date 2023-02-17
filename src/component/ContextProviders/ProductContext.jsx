import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext(null);

export function useProductContext() {
  return useContext(ProductContext);
}

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState();
  const [currentCat, setCurrentCat] = useState("all");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios
          .get("http://localhost:3008/products")
          .then((res) => {
            if (res.status === 200) {
              return res;
            } else {
              console.log("Not successful");
              setError(error);
            }
          });
        const resProducts = await response.data;
        return resProducts;
      } catch (error) {
        console.log("Products request axios Error uuslee", error);
        setError(error);
      }
    }

    fetchProducts().then((res) => {
      setProducts(res);
      console.log("Products=0_0=> ", res);
    });

  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts, currentCat, setCurrentCat }}>
      {children}
    </ProductContext.Provider>
  );
}
