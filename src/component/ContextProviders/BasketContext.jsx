import { createContext, useContext, useEffect, useState } from "react";

const BasketContext = createContext();

export function useBasketContext() {
  return useContext(BasketContext);
}

export default function BasketProvider({ children }) {
  // Basket cart
  const [basketList, setBasketLst] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [closeModal, setCloseModal] = useState(false);



  return (
    <BasketContext.Provider value={{ basketList, setBasketLst, wishList, setWishList, closeModal, setCloseModal }}>
      {children}
    </BasketContext.Provider>
  );
}
