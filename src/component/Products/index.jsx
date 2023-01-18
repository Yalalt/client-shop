import React from "react";
import css from "./products.module.css";
import CardProduct from "../CardProduct";

const Products = (props) => {
  return (
    <div className={css.CardContainer}>
      {props.productsData.map((item, index) => (
        <CardProduct itemData={item} key={index} />
      ))}
    </div>
  );
};
export default Products;
