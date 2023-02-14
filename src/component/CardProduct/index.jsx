import React from "react";
import css from "./cardProduct.module.css";
import GrayShoppingCardImage from "../../utils/imgs/shoppingcartgray.png";
import { useNavigate } from "react-router-dom";

const CardProduct = (props) => {
  const { login, prodName, desc, price, stock, category, id, imageUrl, brand, sale } = props;

  console.log("Card Product dotor shvv!!!!");

  const basketHandler = () => {
    let basket = [id];
    let temp = JSON.parse(localStorage.getItem("basket"));
    if (temp) {
      basket = [...temp, id];
    }
    localStorage.setItem("basket", JSON.stringify(basket));
  }

  const alertHandler = () => {
    alert("Та эхлээд нэвтрэх хэрэгтэй!");
  }

  const navigateToProduct = useNavigate();
  const productPage = () => {
    navigateToProduct(`/product/${id}`);
    console.log("Product page to navigate ==> ", id);
  }

  return (
    <div>
      <div
        className={css.CardBody}
        onClick={productPage}
      >
        <div className={css.CardImage}>
          <img src={imageUrl} alt="Item shop" />
        </div>
        <div className={css.CardContent}>
          <span className={css.CardBrandName}>{brand}</span>
          <span className={css.Name}>{prodName}</span>
          <span className={css.Price}>${price}</span>
        </div>
        {sale !== 0 && (
          <div className={css.saleTitle}>Sale {sale}% off</div>
        )}
        <div className={css.grayShoppingCart}>
          <button
            onClick={login ? basketHandler : alertHandler}
          >
          <img src={GrayShoppingCardImage} alt="Shopping cart" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardProduct;
