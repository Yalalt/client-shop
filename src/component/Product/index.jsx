import React from "react";
import css from "./products.module.css";
import { useProductContext } from "../ContextProviders/ProductContext";
import { useBasketContext } from "../ContextProviders/BasketContext";
import { useNavigate, useParams } from "react-router-dom";

const Product = () => {
  const { products } = useProductContext();
  const { basketList, addToBasket, removeFromBasket, updateBasketItemCount } = useBasketContext();
  const prodiData = useParams();
  const navigate = useNavigate();

  const counterHandler = (e, balance, pid) => {
    let operator = e.target.innerText;

    if (operator === "+" && basketList[pid] < balance) {
      addToBasket(pid);
    } else if (operator === "-" && basketList[pid] > 0) {
      removeFromBasket(pid);
    }
  };

  const backtoGoHome = () => {
    navigate(-1);
  };


  const goToCart = () => {
    navigate(`/basketcart`);
  };

  return (products.map((product, index) => {
    if (product.pid === prodiData.id) {
      return (<div className={css.CardContainer} key={index}>
        <p className={css.url}>
          Home{` > ${product.category} > ${product.name}`}
        </p>
        <div className={css.productCardMain}>
          <div className={css.imageBorder}>
            <img src={product.image} alt="" />
            <div className={css.imageSmallBorder}>
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
            </div>
          </div>
          <div className={css.productCardContent}>
            <h1 className={css.productCardName}>{product.name}</h1>
            <p className={css.productCardPrice}>${product.price}</p>
            <hr />
            <p>
              Product ID: <strong>{product.pid}</strong>
            </p>
            <p>
              Availability:{" "}
              {product.stock > 0 ? (
                <span>
                  <strong className={css.stockGreenLabel}> In stock </strong>
                  <strong>{product.stock}</strong> product left{" "}
                </span>
              ) : (
                "Дууссан"
              )}{" "}
            </p>
            <p>
              Sale: <strong>{product.sale}%</strong>
            </p>
            <br />
            <div className={css.quantityParent}>
              Quantity:
              <div className={css.quantityChild}>
                <button onClick={(e) => counterHandler(e, product.stock, product.pid)}>
                  -
                </button>
                <input value={basketList[product.pid]} onChange={(e) => updateBasketItemCount(e.target.value, product.pid)} />
                <button onClick={(e) => counterHandler(e, product.stock, product.pid)}>
                  +
                </button>
              </div>
            </div>
            <br />
            <div className={css.productCardBtns}>
              <button onClick={goToCart}>
                Add to cart
              </button>
              <button onClick={backtoGoHome}>Buy it now</button>
            </div>
            <hr />
            <div>
              <strong>Description:</strong>
              <br />
              {product.description}
            </div>
            <div>
              <br />
              <strong>Specification:</strong>
              <br />
              <ul>
                {product.spec.map((spec, i) => {
                  return (
                    <li key={i}>
                      {Object.keys(spec)}: {Object.values(spec)}
                    </li>
                  );
                })}
              </ul>
            </div>
            <button onClick={backtoGoHome} className={css.backButtonProduct}>
              Back
            </button>
          </div>
        </div>
      </div>
      );
    }
  }))
};
export default Product;
