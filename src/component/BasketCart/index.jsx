import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CartItem from "../CartItem";
import { useBasketContext } from "../ContextProviders/BasketContext";
import { useProductContext } from "../ContextProviders/ProductContext";
import css from "./basketCart.module.css";
import EmptyCartLogo from "../../utils/imgs/empty_cartLogo.png";

export default function BasketCart() {
  const { products } = useProductContext();
  const { basketList, addToBasket, removeFromBasket, updateBasketItemCount } =
    useBasketContext();
  // let productCarts = [];
  console.log("Products context >> ", products);
  console.log("Context basket >> ", basketList);
  // useEffect(() => {
  //   console.log("Products in BASKET ===> ", products);
  // }, []);
  let listItem = [];

  const keysID = Object.keys(basketList);


  const filteredArr = keysID.filter(value => {
    if (basketList[value] > 0) {
      return basketList[value];
    }
  });


  return (
    <div className={css.CartContainer}>
      {filteredArr.length > 0 ? (
        <div>
          <h3>Cart List Products</h3>
          {products.map((product) => {
              if(basketList[product.pid] !== 0) {
                return <CartItem data={product} />
              }
            }
          )}
        </div>
      ) : (<h3><img src={EmptyCartLogo} /></h3>)}
    </div>
  );
}
