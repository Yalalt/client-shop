import React from "react";
import css from "../styles/cardProduct.module.css";
import GrayShoppingCardImage from "../utils/imgs/shoppingcartgray.png";

const CardProduct = (props) => {
  return (
    <div>
      <div className={css.CardBody}>
        <div className={css.CardImage}>
          <img src={props.itemData.image} alt="Item shop" />
        </div>
        <div className={css.CardContent}>
          <span className={css.CardBrandName}>{props.itemData.spec.Brand}</span>
          <span className={css.Name}>{props.itemData.name}</span>
          <span className={css.Price}>${props.itemData.price}</span>
        </div>
        {props.itemData.sale !== 0 && (
          <div className={css.saleTitle}>Sale {props.itemData.sale}% off</div>
        )}
        <div className={css.grayShoppingCart}>
          <img src={GrayShoppingCardImage} alt="Shopping cart" />
        </div>
      </div>
    </div>
  );
};
export default CardProduct;
