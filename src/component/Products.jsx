import React from "react";
import css from "../styles/products.module.css";
import CardProduct from "./CardProduct";

const Products = (props) => {
  console.log("Selected==> " + props.selected);

  props.productsData.map((el) => console.log("data item: " + el));

  return (
    <div className={css.CardContainer}>
      {props.productsData.map((item, index) => (
        <CardProduct itemData={item} key={index} />
      ))}
    </div>
  );
};
export default Products;
