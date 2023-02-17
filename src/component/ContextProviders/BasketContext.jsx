import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const BasketContext = createContext(null);

export function useBasketContext() {
  return useContext(BasketContext);
}

export default function BasketProvider({ children }) {
  // Basket cart
  const [basketList, setBasketLst] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [closeModal, setCloseModal] = useState(false);
  const [error, setError] = useState();

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
      console.log("Items basket outer ==> ", res);

      let basket = {};

      for (let i = 0; i < res.length; i++) {
        basket[res[i].pid] = 0;
      }

      setBasketLst(basket);
      // console.log(basket);
    });
  }, []);

  const addToBasket = (itemId) => {
    setBasketLst((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
  }
  
  const removeFromBasket = (itemId) => {
    setBasketLst((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
  }

  const updateBasketItemCount = (newAmout, itemId) => {
    setBasketLst((prev) => ({...prev, [itemId]: newAmout}));
  }

  const contextValue = {
    basketList,
    setBasketLst,
    wishList,
    setWishList,
    closeModal,
    setCloseModal,
    addToBasket,
    removeFromBasket,
    updateBasketItemCount
  };

  return (
    <BasketContext.Provider value={contextValue}>
      {children}
    </BasketContext.Provider>
  );
}
