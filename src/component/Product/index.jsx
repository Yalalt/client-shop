import React, { useState, useEffect } from "react";
import css from "./products.module.css";
import { useProductContext } from "../ContextProviders/ProductContext";
import { useBasketContext } from "../ContextProviders/BasketContext";
import { useNavigate, useParams } from "react-router-dom";
import UserProvider from "../ContextProviders/UserContext";

const Product = () => {
  const { products } = useProductContext();
  const { basketList, addToBasket, removeFromBasket, updateBasketItemCount } = useBasketContext();

  const [desc, setDesc] = useState(true);
  const prodiData = useParams();
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);
  let basketStorage = JSON.parse(localStorage.getItem("basket"));

  useEffect(() => {
    let login = JSON.parse(localStorage.getItem("login"));
    // let countBasketID = {};
    // let count = 0;

    // if (login) {
    // basketStorage.map((id) => {
    //   countBasketID[id] = (countBasketID[id] || 0) + 1;
    // });
    // if (countBasketID[prodiData]) {
    //   count = countBasketID[prodiData];
    //   console.log(count);
    // }
    // setCounter(count);
    // }
  }, []);

  // const basketHandler = (id) => {
  //   let login = JSON.parse(localStorage.getItem("login"));
  //   let productsID = [];

  //   if (login) {
  //     for (let i = 0; i < counter; i++) {
  //       productsID.push(id);
  //     }

  //     basketStorage ? productsID.push(...basketStorage) : null;
  //     localStorage.setItem("basket", JSON.stringify(productsID));
  //   }
  // };

  // const counterHandler = (e, balance) => {
  //   let operator = e.target.innerText;

  //   if (operator === "+" && counter < balance) {
  //     setCounter((prev) => prev + 1);

  //   } else if (operator === "-" && counter > 0) {
  //     setCounter((prev) => prev - 1);

  //   }
  // };

  const backtoGoHome = () => {
    navigate(-1);
  };

  return (products.map((product, index) => {
    if (product.pid === prodiData.id) {
      return (<div className={css.CardContainer} key={index}>
        <p className={css.url}>
          Home{" > "}all{` > ${product.category} > ${product.name}`}
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
                "No stock"
              )}{" "}
            </p>
            <p>
              Sale: <strong>{product.sale}%</strong>
            </p>
            <br />
            <div className={css.quantity}>
              Quantity:
              <div className={css.quantity}>
                <button onClick={(e) => removeFromBasket(product.pid)}>
                  -
                </button>
                <input value={basketList[product.pid]} onChange={(e) => updateBasketItemCount(e.target.value, product.pid)}/>
                <button onClick={(e) => addToBasket(product.pid)}>
                  +
                </button>
              </div>
            </div>
            <br />
            <div className={css.productCardBtns}>
              {/* <button onClick={() => addToBasket(product.pid)}>
                Add to cart
              </button> */}
              <button>Buy it now</button>
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
