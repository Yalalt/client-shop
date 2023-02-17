import React from "react";
import css from "./cardProduct.module.css";
import GrayShoppingCardImage from "../../utils/imgs/shoppingcartgray.png";
import { useNavigate } from "react-router-dom";
import { useBasketContext } from "../ContextProviders/BasketContext";

const CardProduct = (props) => {
  const { prodName, price, id, imageUrl, brand, sale } = props;
  const { basketList, addToBasket, removeFromBasket } = useBasketContext();
  const navigateToProduct = useNavigate();

  // const basketHandler = () => {

  //   let basket = [id];

  //   if(basketList) {
  //     basket = [...basketList, id];
  //   }
  // let temp = JSON.parse(localStorage.getItem("basket"));
  // if (temp) {
  //   basket = [...temp, id];
  // }
  // localStorage.setItem("basket", JSON.stringify(basket));
  // setBasketLst()
  // };

  const alertHandler = () => {
    alert("Та эхлээд нэвтрэх хэрэгтэй!");
  };

  const productPage = () => {
    navigateToProduct(`/product/${id}`);
    console.log("Product page to navigate ==> ", id);
  };

  return (
    <div>
      <div className={css.cardBodyOuter}>
        <div className={css.CardBody} onClick={productPage}>
          <div className={css.CardImage}>
            <img src={imageUrl} alt="Item shop" />
          </div>
          <div className={css.CardContent}>
            <span className={css.CardBrandName}>{brand}</span>
            <span className={css.Name}>{prodName}</span>
            <span className={css.Price}>${price}</span>
          </div>
        </div>
        {sale !== 0 && <div className={css.saleTitle}>Sale {sale}% off</div>}
        {basketList[id] > 0 && (
          <span className={css.iconNumberBasket}>{basketList[id]}</span>
        )}

        <div className={css.grayShoppingCart}>
          <button
            className={css.basketCartButton}
            onClick={
              basketList[id] > 0
                ? () => removeFromBasket(id)
                : () => addToBasket(id)
            }
          >
            <img src={GrayShoppingCardImage} alt="Shopping cart" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardProduct;
