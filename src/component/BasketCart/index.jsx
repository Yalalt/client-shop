import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBasketContext } from "../ContextProviders/BasketContext";
import { useProductContext } from "../ContextProviders/ProductContext";
import css from "./basketCart.module.css";

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

  // products.map((product) => console.log(product));
  // console.log("Keys ID >>> ", keysID);
  // console.log("Basket Value >>> ", valueID);
  console.log("SElECTION ITEMS ---------");
  console.log("Filtered ===>> ", filteredArr);


  return (
    <div className={css.CartContainer}>
      {filteredArr.length > 0 ? (
        <div>
          <h3>Cart List Products</h3>
          {products.map((element, index) => {
            return filteredArr.map((idValue) => {

              if (element.pid === idValue) {
                console.log("***********");
                return (<div key={index}>
                  <p>{`Product name: ${element.name}`}</p>
                  <p>{`Price: ${element.price}`}</p>
                  <p>{`Amount: ${basketList[idValue]}`}</p>
                </div>)
              }
            })
          })
          }</div>
      ) : (<h3>Your cart empty</h3>)}
    </div>
  );
}
