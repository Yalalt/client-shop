import { useBasketContext } from "../ContextProviders/BasketContext";
import css from "./basketCart.module.css";

export default function BasketCart(prop) {
  const { products } = useProductContext();
  const { basketList, addToBasket, removeFromBasket, updateBasketItemCount } =
    useBasketContext();

  return (
    <div className={css.CartContainer}>
      <h3>Cart List Porducts</h3>
      {products.map((product) => {
        Object.keys(basketList).map((key) => {
          if (key === product.pid) {
            <div>
              <img src={product.image} />
            </div>
          }
        });
      })}
    </div>
  );
}
